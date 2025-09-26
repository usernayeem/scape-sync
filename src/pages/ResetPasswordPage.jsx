import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiService from "../services/api";
import { useToast } from "../contexts/ToastContext";

export const ResetPasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const showToast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      showToast.error("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      await ApiService.forgotPassword(email);

      // Store email for reset verification
      sessionStorage.setItem("resetEmail", email);

      showToast.success("Password reset email sent successfully!");
      navigate("/password-reset-successfull");
    } catch (error) {
      showToast.error(
        error.message || "Failed to send reset email. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFFFD] px-4 py-8">
      <div className="w-full max-w-[500px] mx-auto">
        {/* Logo */}
        <Link to={"/"} className="mb-[6rem]">
          <img
            src="../images/logo.webp"
            alt="ScapeSync logo"
            className="absolute left-8 top-8"
          />
        </Link>

        {/* Back Button */}
        <div className="mb-[4rem]">
          <Link
            to="/login"
            className="flex items-center gap-[0.8rem] text-gray-600 public-san text-[1.4rem] hover:text-gray-800 transition-colors  pt-[10rem]"
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
              Forgot your password?
            </h1>
            <p className="text-gray-600 public-san text-[1.4rem]/[2rem] max-w-[400px] mx-auto">
              Please enter the email address associated with your account, and
              we'll email you a link to reset your password.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-[2.4rem]">
            {/* Email Address */}
            <div>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-[1.6rem] py-[1.2rem] border border-[#E2E8F0] rounded-[0.8rem] text-[1.6rem] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3BA334] transition-colors"
                disabled={loading}
              />
            </div>

            {/* Reset Password Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#3BA334] text-white py-[1.4rem] px-[2.4rem] public-sans font-bold text-[1.6rem] rounded-[0.8rem] hover:bg-[#329A2C] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
                  Sending...
                </>
              ) : (
                "Reset Password"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
