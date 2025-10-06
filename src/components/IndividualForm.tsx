import { useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

export default function IndividualForm() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Send email via EmailJS
    emailjs
      .send(
        "service_lz15hw6",
        "template_dgbfyjh",
        {
          to_email: email,
          otp: otp,
        },
        "vBdYxkAocUH9U0vS1"
      )
      .then(
        () => {
          // Save OTP & email in localStorage for verification page
          localStorage.setItem("otp", otp);
          localStorage.setItem("email", email);
          navigate("/verify");
        },
        (err) => {
          console.error("Email send error:", err);
          alert("Failed to send OTP. Try again!");
        }
      );
  };
  return (
    <>
      {" "}
      <form onSubmit={handleSubmit} className="pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-2  max-w-4xl mx-auto text-center">
          <div>
            <input
              type="text"
              placeholder="First Name*"
              className="mt-1 py-4 px-4 w-80 rounded-lg  bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name*"
              className="mt-1 py-4 px-4 w-80 rounded-lg  bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Work Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 py-4 px-4 w-80 rounded-lg  bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number*"
              className="mt-1 py-4 px-4 w-80 rounded-lg  bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="City*"
              className="mt-1 py-4 px-4 w-80 rounded-lg  bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Referral Code"
              className="mt-1 py-4 px-4 w-80 rounded-lg  bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 text-white px-4 py-2 font-semibold text-lg rounded-full">
            Register
          </button>
        </div>
      </form>
    </>
  );
}
