import React from "react";

export const Hero = () => {
  return (
    <div className="m-auto w-11/12 flex sm:flex-col lg:flex-row">
      <div className="left-column pt-36">
        <img
          src="../images/hero-bg.png"
          alt="hero background"
          className="absolute top-0 left-0"
        />
        <h1 className="text-gray-800 font-bold text-[8.4rem]/[9.2rem]">
          All Your Jobs <br />
          One Smart App
        </h1>
        <p className="text-gray-600 text-[1.6rem]/[2.4rem] pt-[1.6rem]">
          Built for business owners, employees, and clients streamline job{" "}
          <br />
          scheduling, service tracking, and team management in one <br />
          powerful app.
        </p>
        <img
          src="../images/leaf.png"
          alt="leaf"
          className="absolute top-48 left-1/4"
        />
        <div className="mt-[6.5rem] flex gap-[1.8rem]">
          <div className="flex px-[1.4rem] py-[1rem] gap-[1.2rem] border border-[#ABDAA9] rounded-[1rem] cursor-pointer">
            <img src="../images/apple.png" alt="apple store icon" />
            <div>
              <p className="text-gray-800 text-[0.9rem]">Download on the</p>
              <p className="text-gray-800 text-[1.8rem]">App Store</p>
            </div>
          </div>
          <div className="flex px-[1.4rem] py-[1rem] gap-[1.2rem] border border-[#ABDAA9] rounded-[1rem] cursor-pointer">
            <img src="../images/playstore.png" alt="apple store icon" />
            <div>
              <p className="text-gray-800 text-[0.9rem]">Download on the</p>
              <p className="text-gray-800 text-[1.8rem]">Google Play</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-column">
        <img src="../images/hand.png" alt="hand" />
        <img
          src="../images/hand-bg.png"
          alt="hand background"
          className="absolute top-0"
        />
      </div>
    </div>
  );
};
