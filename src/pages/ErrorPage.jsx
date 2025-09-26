import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
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

        {/* Error Container */}
        <div className="bg-white rounded-[1.6rem] p-[4rem] text-center pt-[10rem]">
          {/* Error Illustration */}
          <div className="mb-[3.2rem] flex justify-center">
            <div className="w-[160px] h-[160px] bg-[#FEF2F2] rounded-full flex items-center justify-center">
              <svg
                className="w-[80px] h-[80px] text-[#EF4444]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-gray-800 public-sans font-bold text-[2.8rem]/[3.6rem] mb-[1.6rem]">
            Oops! Something went wrong
          </h1>

          <p className="text-gray-600 public-san text-[1.4rem]/[2rem] mb-[3.2rem] max-w-[400px] mx-auto">
            We're sorry, but the page you're looking for doesn't exist or an
            unexpected error occurred.
          </p>

          {/* Action Buttons */}
          <div className="space-y-[1.6rem]">
            {/* Go To Home Button */}
            <Link
              to="/"
              className="inline-block w-full bg-[#3BA334] text-white py-[1.4rem] px-[2.4rem] public-sans font-bold text-[1.6rem] rounded-[0.8rem] hover:bg-[#329A2C] transition-colors duration-200 text-center mb-[1.6rem]"
            >
              Go To Home
            </Link>

            {/* Go Back Button */}
            <button
              onClick={handleGoBack}
              className="w-full bg-white border border-[#E2E8F0] text-gray-700 py-[1.4rem] px-[2.4rem] public-san text-[1.6rem] rounded-[0.8rem] hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-[0.8rem]"
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
              Go Back
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-[3.2rem] pt-[2.4rem] border-t border-[#E2E8F0]">
            <p className="text-gray-500 public-san text-[1.2rem]">
              If this problem persists, please contact our support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
