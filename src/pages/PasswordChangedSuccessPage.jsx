import React from "react";
import { Link } from "react-router-dom";

export const PasswordChangedSuccessPage = () => {
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

        {/* Success Container */}
        <div className="bg-white rounded-[1.6rem] p-[4rem] text-center">
          {/* Success Illustration */}
          <div className="mb-[3.2rem] flex justify-center">
            <img
              src="https://pfst.cf2.poecdn.net/base/image/162d0fabb0a0379a804bb570112da6a6ae5c4abf15429e1d101acc3142d76d43?w=332&h=328"
              alt="Celebration confetti"
              className="w-[160px] h-[160px] object-contain"
            />
          </div>

          {/* Success Message */}
          <h1 className="text-gray-800 public-sans font-bold text-[2.8rem]/[3.6rem] mb-[1.6rem]">
            Password Changed Successfully!
          </h1>

          <p className="text-gray-600 public-san text-[1.4rem]/[2rem] mb-[3.2rem]">
            Your account is set up! Just verify your email to get started.
          </p>

          {/* Go To Login Button */}
          <Link
            to="/login"
            className="inline-block w-full bg-[#3BA334] text-white py-[1.4rem] px-[2.4rem] public-sans font-bold text-[1.6rem] rounded-[0.8rem] hover:bg-[#329A2C] transition-colors duration-200 text-center"
          >
            Go To Login
          </Link>
        </div>
      </div>
    </div>
  );
};
