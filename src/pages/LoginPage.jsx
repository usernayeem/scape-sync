import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import ApiService from "../services/api";
import { useToast } from "../contexts/ToastContext";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const showToast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.email.trim()) {
      showToast.error("Email is required");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      showToast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.password) {
      showToast.error("Password is required");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const response = await ApiService.login({
        email: formData.email,
        password: formData.password,
        rememberMe: rememberMe,
      });

      if (response.token) {
        ApiService.setAuthToken(response.token, rememberMe);
      }

      showToast.success("Login successful! Welcome back.");
      navigate("/");
    } catch (error) {
      showToast.error(
        error.message || "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#FDFFFD] flex items-center justify-center px-4 pb-[15rem]">
        <div className="w-full max-w-[500px] mx-auto">
          {/* Form Container */}
          <div className="bg-white rounded-[1.6rem] p-[4rem]">
            {/* Header */}
            <div className="text-center mb-[3.2rem]">
              <h1 className="text-gray-800 public-sans font-bold text-[2.8rem]/[3.6rem] mb-[0.8rem]">
                Welcome to ScapeSync
              </h1>
              <p className="text-gray-600 public-san text-[1.4rem]/[2rem]">
                Please share your login details so you can access the website.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-[2.4rem]">
              {/* Email Address */}
              <div>
                <label className="block text-gray-600 public-san text-[1.4rem] mb-[0.8rem]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-[1.6rem] py-[1.2rem] border border-[#E2E8F0] rounded-[0.8rem] text-[1.6rem] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3BA334] transition-colors"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-600 public-san text-[1.4rem] mb-[0.8rem]">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-[1.6rem] py-[1.2rem] pr-[4.8rem] border border-[#E2E8F0] rounded-[0.8rem] text-[1.6rem] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3BA334] transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-[1.6rem] top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <img src="../images/eye.png" alt="eye" />
                  </button>
                </div>
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between mt-[2.4rem]">
                <div className="flex items-center gap-[1.2rem]">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-[1.8rem] h-[1.8rem] accent-[#3BA334] cursor-pointer"
                  />
                  <label
                    htmlFor="remember"
                    className="text-gray-600 public-san text-[1.4rem] cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to={"/password-reset"}
                  className="text-[#3BA334] public-san text-[1.4rem] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
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
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </button>

              {/* OR Divider */}
              <div className="flex items-center gap-[1.6rem] my-[2.4rem]">
                <div className="flex-1 h-[1px] bg-[#E2E8F0]"></div>
                <span className="text-gray-500 public-san text-[1.4rem]">
                  OR
                </span>
                <div className="flex-1 h-[1px] bg-[#E2E8F0]"></div>
              </div>

              {/* Log in with Google */}
              <button
                type="button"
                className="w-full bg-white border border-[#E2E8F0] text-gray-700 py-[1.4rem] px-[2.4rem] public-san text-[1.6rem] rounded-[0.8rem] hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-[1.2rem]"
              >
                <svg className="w-[2rem] h-[2rem]" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Log in with Google
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center mt-[2.4rem]">
              <p className="text-gray-600 public-san text-[1.4rem]">
                Don't have an account?{" "}
                <Link
                  to={"/register"}
                  className="text-[#3BA334] hover:underline"
                >
                  Get started
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
