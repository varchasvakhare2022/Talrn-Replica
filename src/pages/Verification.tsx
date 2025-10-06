import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyPage() {
  const [inputOtp, setInputOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const savedOtp = localStorage.getItem("otp");

    if (inputOtp === savedOtp) {
      navigate("/success");
    } else {
      alert("Invalid OTP. Try again!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleVerify}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4">Verify Email</h2>
        <p className="mb-4 text-sm text-gray-600">
          We have sent a 6-digit OTP to your email.
        </p>

        <input
          type="text"
          maxLength={6}
          className="w-full border px-3 py-2 rounded mb-4"
          placeholder="Enter OTP"
          value={inputOtp}
          onChange={(e) => setInputOtp(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Verify
        </button>
      </form>
    </div>
  );
}
