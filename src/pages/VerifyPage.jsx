import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiService from "../services/api";
import { useToast } from "../contexts/ToastContext";

export const VerifyPage = () => {
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const showToast = useToast();

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("verificationEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      navigate("/register");
    }
  }, [navigate]);

  const handleInputChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const otp = verificationCode.join("");

    if (otp.length !== 6) {
      showToast.error("Please enter all 6 digits of the verification code.");
      return;
    }

    setLoading(true);

    try {
      await ApiService.verifyOtp({
        email: email,
        otp: otp,
      });

      sessionStorage.removeItem("verificationEmail");
      showToast.success("Email verified successfully!");
      navigate("/account-created");
    } catch (error) {
      showToast.error(
        error.message || "Verification failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setLoading(true);

    try {
      await ApiService.resendOtp(email);
      showToast.success("Verification code has been resent to your email.");
    } catch (error) {
      showToast.error(
        error.message || "Failed to resend code. Please try again."
      );
    } finally {
      setLoading(false);
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
              <span className="text-gray-800 font-medium">{email}</span>, please
              enter the code in below box to verify your email.
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
                disabled={loading}
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            disabled={loading}
            className="w-full bg-[#3BA334] text-white py-[1.4rem] px-[2.4rem] public-sans font-bold text-[1.6rem] rounded-[0.8rem] hover:bg-[#329A2C] transition-colors duration-200 mb-[2.4rem] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Verifying...
              </>
            ) : (
              "Verify"
            )}
          </button>

          {/* Resend Code Link */}
          <div className="text-center">
            <p className="text-gray-600 public-san text-[1.4rem]">
              Don't have a code?{" "}
              <button
                onClick={handleResendCode}
                disabled={loading}
                className="text-[#3BA334] hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Resend code
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
