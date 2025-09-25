import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export const VerifyPage = () => {
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
  ]);
  const inputRefs = useRef([]);

  const handleInputChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Auto-focus next input
      if (value && index < 4) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace to go to previous input
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFFFD] px-4 py-8">
      <div className="w-full max-w-[500px] mx-auto">
        {/* Logo */}
        <div className="mb-[6rem]">
          <img
            src="../images/logo.png"
            alt="ScapeSync logo"
            className="h-[4rem]"
          />
        </div>

        {/* Back Button */}
        <div className="mb-[4rem]">
          <Link
            to="/register"
            className="flex items-center gap-[0.8rem] text-gray-600 public-san text-[1.4rem] hover:text-gray-800 transition-colors"
          >
            <svg
              className="w-[1.6rem] h-[1.6rem]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </Link>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-[1.6rem] p-[4rem]">
          {/* Header */}
          <div className="text-center mb-[3.2rem]">
            <h1 className="text-gray-800 public-sans font-bold text-[2.8rem]/[3.6rem] mb-[1.6rem]">
              Please check your email!
            </h1>
            <p className="text-gray-600 public-san text-[1.4rem]/[2rem] max-w-[400px] mx-auto">
              We've emailed a 6-digit confirmation code to{" "}
              <span className="text-gray-800 font-medium">acbd@cmail</span>,
              please enter the code in below box to verify your email.
            </p>
          </div>

          {/* Verification Code Inputs */}
          <div className="flex justify-center gap-[1.2rem] mb-[3.2rem]">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-[4.8rem] h-[4.8rem] border border-[#E2E8F0] rounded-[0.8rem] text-center text-[2rem] font-semibold text-gray-800 focus:outline-none focus:border-[#3BA334] transition-colors"
                maxLength={1}
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            className="w-full bg-[#3BA334] text-white py-[1.4rem] px-[2.4rem] public-sans font-bold text-[1.6rem] rounded-[0.8rem] hover:bg-[#329A2C] transition-colors duration-200 mb-[2.4rem]"
          >
            Verify
          </button>

          {/* Resend Code Link */}
          <div className="text-center">
            <p className="text-gray-600 public-san text-[1.4rem]">
              Don't have a code?{" "}
              <button className="text-[#3BA334] hover:underline">
                Resend code
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
