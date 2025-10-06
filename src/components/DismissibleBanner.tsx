import { useState } from "react";

interface DismissibleBannerProps {
  onDismiss?: () => void;
}

export default function DismissibleBanner({ onDismiss }: DismissibleBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  return (
    <div className="bg-blue-500 text-white py-4 px-6 w-full flex items-center justify-center fixed top-0 z-50">
      <div className="flex items-center space-x-4">
        <button className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">
          NEW
        </button>
        <span className="text-sm font-normal">
          Get a Guaranteed Developer within 24 working hours
        </span>
        <button className="text-white hover:text-blue-200 text-sm font-medium">
          Hire candidates
        </button>
      </div>
      <button
        onClick={handleDismiss}
        className="text-white hover:text-blue-200 text-xl font-bold absolute right-6"
        aria-label="Dismiss banner"
      >
        ×
      </button>
    </div>
  );
}
