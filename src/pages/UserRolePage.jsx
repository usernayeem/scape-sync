import React from "react";
import { Link } from "react-router-dom";

export const UserRolePage = () => {
  return (
    <div className="min-h-screen bg-[#FDFFFD] flex items-center justify-center px-4">
      <style jsx>{`
        .role-card {
          background-color: white;
          border: 1px solid #e2e8f0;
          border-radius: 1.6rem;
          padding: 3.2rem;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }

        .role-card:hover {
          background-color: #f0fdf4;
          border-color: #3ba334;
          box-shadow: 0 4px 12px rgba(59, 163, 52, 0.1);
        }

        .role-card:hover .card-title {
          color: #3ba334;
        }

        .role-card:hover .card-description {
          color: #22c55e;
        }

        .card-title {
          transition: color 0.3s ease-in-out;
        }

        .card-description {
          transition: color 0.3s ease-in-out;
        }
      `}</style>

      <div className="w-full max-w-[600px] mx-auto">
        {/* Logo */}
        <div className="text-center mb-[4rem]">
          <img
            src="/images/logo.webp"
            alt="ScapeSync logo"
            className="mx-auto mb-[3.2rem]"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-[4.8rem]">
          <h1 className="text-gray-800 public-sans font-bold text-[3.2rem]/[4rem] mb-[1.6rem]">
            Who Are You?
          </h1>
          <p className="text-gray-600 public-san text-[1.6rem]/[2.4rem] max-w-[480px] mx-auto">
            Choose the option that best describes you so we can tailor your
            experience.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3.2rem]">
          {/* Client Card */}
          <Link to={"/register"} className="role-card">
            {/* Icon */}
            <div className="flex justify-center mb-[2.4rem]">
              <div className="w-[8rem] h-[8rem] rounded-[1.2rem] flex items-center justify-center">
                <img
                  src="/images/client.webp"
                  alt="Client"
                  className="w-[5.6rem] h-[5.6rem] object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="card-title text-gray-800 public-sans font-bold text-[2rem]/[2.4rem] mb-[0.8rem]">
                I'm a Client
              </h3>
              <p className="card-description text-gray-600 public-san text-[1.4rem]/[2rem]">
                Browse services & hire service companies.
              </p>
            </div>
          </Link>

          {/* Business Owner Card */}
          <Link to={"/register"} className="role-card">
            {/* Icon */}
            <div className="flex justify-center mb-[2.4rem]">
              <div className="w-[8rem] h-[8rem] rounded-[1.2rem] flex items-center justify-center">
                <img
                  src="/images/business.webp"
                  alt="Business Owner"
                  className="w-[5.6rem] h-[5.6rem] object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="card-title text-gray-800 public-sans font-bold text-[2rem]/[2.4rem] mb-[0.8rem]">
                I'm a Business Owner
              </h3>
              <p className="card-description text-gray-600 public-san text-[1.4rem]/[2rem]">
                Manage jobs, staff & deliver work done.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
