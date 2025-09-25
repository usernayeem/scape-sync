import React from "react";
import { Link } from "react-router-dom";

export const ResetPasswordPage = () => {
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
            to="/login"
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
              Forgot your password?
            </h1>
            <p className="text-gray-600 public-san text-[1.4rem]/[2rem] max-w-[400px] mx-auto">
              Please enter the email address associated with your account, and
              we'll email you a link to reset your password.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-[2.4rem]">
            {/* Email Address */}
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-[1.6rem] py-[1.2rem] border border-[#E2E8F0] rounded-[0.8rem] text-[1.6rem] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3BA334] transition-colors"
              />
            </div>

            {/* Reset Password Button */}
            <Link to={"/password-reset-successfull"}>
              <button
                type="submit"
                className="w-full bg-[#3BA334] text-white py-[1.4rem] px-[2.4rem] public-sans font-bold text-[1.6rem] rounded-[0.8rem] hover:bg-[#329A2C] transition-colors duration-200"
              >
                Reset Password
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
