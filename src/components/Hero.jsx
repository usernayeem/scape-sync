import React from "react";

export const Hero = () => {
  return (
    <div className="m-auto w-11/12 flex flex-col lg:flex-row items-center lg:items-start">
      <div className="left-column w-full lg:w-1/2 pt-16 lg:pt-36 text-center lg:text-left relative">
        <img
          src="../images/hero-bg.webp"
          alt="hero background"
          className="absolute top-0 -left-20 hidden lg:block"
        />
        <h1 className="text-gray-800 font-bold text-[3.2rem]/[3.8rem] sm:text-[4.8rem]/[5.6rem] lg:text-[6.4rem]/[7.2rem] xl:text-[8.4rem]/[9.2rem] relative z-10">
          All Your Jobs <br />
          One Smart App
        </h1>
        <img src="../images/heading-line.webp" alt="line" className="absolute" />
        <p className="text-gray-600 text-[1.4rem]/[2rem] sm:text-[1.6rem]/[2.4rem] pt-[1.6rem] max-w-[90%] lg:max-w-none mx-auto lg:mx-0">
          Built for business owners, employees, and clients streamline job{" "}
          scheduling, service tracking, and team management in one powerful app.
        </p>
        <img
          src="../images/leaf.webp"
          alt="leaf"
          className="absolute top-0 left-1/4 hidden lg:block"
        />
        <div className="mt-[4rem] lg:mt-[6.5rem] flex flex-col sm:flex-row gap-[1.2rem] sm:gap-[1.8rem] items-center lg:items-start justify-center lg:justify-start">
          <div className="flex px-[1.2rem] sm:px-[1.4rem] py-[1rem] gap-[1.2rem] border border-[#ABDAA9] rounded-[1rem] cursor-pointer hover:bg-green-50 transition-colors w-full sm:w-auto max-w-[200px] sm:max-w-none">
            <img
              src="../images/apple.webp"
              alt="apple store icon"
              className="w-[24px] h-[24px] sm:w-auto sm:h-auto"
            />
            <div>
              <p className="text-gray-800 text-[0.8rem] sm:text-[0.9rem]">
                Download on the
              </p>
              <p className="text-gray-800 text-[1.4rem] sm:text-[1.8rem] font-semibold">
                App Store
              </p>
            </div>
          </div>
          <div className="flex px-[1.2rem] sm:px-[1.4rem] py-[1rem] gap-[1.2rem] border border-[#ABDAA9] rounded-[1rem] cursor-pointer hover:bg-green-50 transition-colors w-full sm:w-auto max-w-[200px] sm:max-w-none">
            <img
              src="../images/playstore.webp"
              alt="google play store icon"
              className="w-[24px] h-[24px] sm:w-auto sm:h-auto"
            />
            <div>
              <p className="text-gray-800 text-[0.8rem] sm:text-[0.9rem]">
                Download on the
              </p>
              <p className="text-gray-800 text-[1.4rem] sm:text-[1.8rem] font-semibold">
                Google Play
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-column w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end relative">
        <div className="relative max-w-[300px] sm:max-w-[400px] lg:max-w-none">
          <img
            src="../images/hand.webp"
            alt="hand"
            className="w-full h-auto relative z-10"
          />
          <img
            src="../images/hand-bg.webp"
            alt="hand background"
            className="absolute top-0 left-20 w-full h-full object-cover hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};
