import React from "react";

export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="flex justify-self-start rounded-[1rem]">
        <img src={icon} alt="icon" className="mx-auto" />
      </div>
      <h3 className="text-gray-800 public-sans font-bold text-[1.8rem] text-start mt-[1.9rem] py-[0.4rem]">
        {title}
      </h3>
      <p className="text-gray-600 public-san text-start">{description}</p>
    </div>
  );
};
