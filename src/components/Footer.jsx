import React from "react";

export const Footer = () => {
  return (
    <footer className="text-white relative overflow-hidden pt-8">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/footer-background.webp"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-11/12 m-auto pt-[4rem] relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[3rem]">
          {/* Left section */}
          <div className="lg:w-1/3 flex flex-col items-start">
            {/* Logo */}
            <div className="mb-[2.4rem]">
              <img
                src="/images/footer-logo.webp"
                alt="ScapeSync logo"
                className="h-[4rem]"
              />
            </div>
          </div>

          {/* Middle section */}
          <div className="lg:w-1/3 flex justify-center">
            <p className="text-white/90 public-san text-[1.4rem]/[2rem] max-w-[400px]">
              Your all-in-one platform for job scheduling, employee management,
              and client service built to keep your business running smoothly
              from anywhere.
            </p>
          </div>

          {/* Right section */}
          <div className="lg:w-1/3 flex flex-col items-end justify-start">
            <div className="flex gap-[1.2rem] items-center lg:items-end">
              {/* Apple App Store */}
              <div className="flex px-[1.2rem] sm:px-[1.4rem] py-[1rem] gap-[1.2rem] border border-white/30 rounded-[1rem] cursor-pointer hover:bg-white/10 transition-colors w-full sm:w-auto max-w-[200px] sm:max-w-none">
                <img
                  src="/images/white-apple.webp"
                  alt="apple store icon"
                  className="w-[24px] h-[24px] sm:w-auto sm:h-auto"
                />
                <div>
                  <p className="text-white/80 text-[0.8rem] sm:text-[0.9rem]">
                    Download on the
                  </p>
                  <p className="text-white text-[1.4rem] sm:text-[1.8rem] font-semibold">
                    App Store
                  </p>
                </div>
              </div>

              {/* Google Play Store */}
              <div className="flex px-[1.2rem] sm:px-[1.4rem] py-[1rem] gap-[1.2rem] border border-white/30 rounded-[1rem] cursor-pointer hover:bg-white/10 transition-colors w-full sm:w-auto max-w-[200px] sm:max-w-none">
                <img
                  src="/images/playstore.webp"
                  alt="google play store icon"
                  className="w-[24px] h-[24px] sm:w-auto sm:h-auto"
                />
                <div>
                  <p className="text-white/80 text-[0.8rem] sm:text-[0.9rem]">
                    Download on the
                  </p>
                  <p className="text-white text-[1.4rem] sm:text-[1.8rem] font-semibold whitespace-nowrap">
                    Google Play
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social media icons */}
        <div className="flex items-center gap-[1.2rem] mt-8">
          <a
            href="#"
            className="w-[3.6rem] h-[3.6rem] rounded-[0.6rem] flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <img
              src="/images/youtube.webp"
              alt="YouTube"
              className="w-[18px] h-[18px]"
            />
          </a>
          <a
            href="#"
            className="w-[3.6rem] h-[3.6rem] rounded-[0.6rem] flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <img
              src="/images/twitter.webp"
              alt="X"
              className="w-[14px] h-[14px]"
            />
          </a>
          <a
            href="#"
            className="w-[3.6rem] h-[3.6rem] rounded-[0.6rem] flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <img src="/images/facebook.webp" className="w-[18px] h-[18px]" />
          </a>
          <a
            href="#"
            className="w-[3.6rem] h-[3.6rem] rounded-[0.6rem] flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <img
              src="/images/instagram.webp"
              alt="Instagram"
              className="w-[18px] h-[18px]"
            />
          </a>
        </div>
      </div>

      {/* Copyright text - Full screen border */}
      <div className="relative z-10 border-t border-white/30 mt-8">
        <div className="w-11/12 m-auto pt-8 pb-4">
          <p className="text-white/70 text-[1.2rem]">
            © 2021-2025, ScapeSync. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
