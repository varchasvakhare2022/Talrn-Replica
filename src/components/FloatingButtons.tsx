import { useEffect, useState } from "react";
import { FaArrowUp, FaCommentDots } from "react-icons/fa";

export default function FloatingButtons() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;

      setScrollProgress(progress);
      setVisible(window.scrollY > window.innerHeight * 0.3); // show after Hero
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openChat = () => {
    alert("Chat widget coming soon! 🚀");
    // later integrate with Crisp / Tawk.to / Intercom
  };

  return (
    <>
      {visible && (
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 items-center">
          {/* Chat Bubble */}
          <button
            onClick={openChat}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent  text-blue-500 shadow-lg transition-all"
          >
            <FaCommentDots size={20} />
          </button>

          {/* Scroll Progress Button */}
          <button
            onClick={scrollToTop}
            className="relative w-12 h-12 flex items-center justify-center rounded-full bg-transparent text-blue-500 shadow-lg transition-all"
          >
            {/* Progress Circle */}
            <svg className="absolute w-12 h-12 -rotate-90">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="gray"
                strokeWidth="3"
                fill="transparent"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="#3b82f6" // Tailwind blue-500
                strokeWidth="3"
                fill="transparent"
                strokeDasharray={2 * Math.PI * 20}
                strokeDashoffset={
                  2 * Math.PI * 20 - (scrollProgress / 100) * (2 * Math.PI * 20)
                }
                className="transition-all duration-75"
              />
            </svg>

            {/* Arrow Icon */}
            <FaArrowUp className="relative z-10" />
          </button>
        </div>
      )}
    </>
  );
}
