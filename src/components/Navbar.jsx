import React from "react";

export const Navbar = () => {
  return (
    <div className="w-11/12 h-[10rem] m-auto flex items-center justify-between">
      <div>
        <img src="../images/logo.png" alt="logo" />
      </div>
      <div>
        <button className="bg-[#3BA334] text-white py-[1rem] px-[2.6rem] public-sans bold rounded-[0.8rem] fill-[#39A432] drop-shadow-xl/25">
          Get Started
        </button>
      </div>
    </div>
  );
};
