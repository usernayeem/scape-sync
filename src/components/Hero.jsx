import React from "react";

export const Hero = () => {
  return (
    <div className="m-auto w-11/12 flex pt-32">
      <div className="left-column">
        <h1 className="text-gray-800 font-bold text-[8.4rem]/[9.2rem]">
          All Your Jobs <br />
          One Smart App
        </h1>
        <p className="text-gray-600 text-[1.6rem]/[2.4rem] pt-16">
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
      </div>
      <div className="right-column">
        <img src="../images/hand.png" alt="hand" />
      </div>
    </div>
  );
};
