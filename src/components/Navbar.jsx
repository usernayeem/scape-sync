import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#9DFF99]" : "bg-transparent"
      }`}
    >
      <div className="w-11/12 h-[10rem] m-auto flex items-center justify-between">
        <Link to={"/"} className="cursor-pointer">
          <img src="../images/logo.webp" alt="logo" />
        </Link>
        <div>
          <Link
            to={"/user-role"}
            className="bg-[#3BA334] text-white text-[1.6rem] py-[1rem] px-[2.6rem] public-sans bold rounded-[0.8rem] fill-[#39A432] drop-shadow-xl/25 hover:bg-[#329A2C] transition-colors duration-200"
            style={{ cursor: "pointer" }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
