import React from "react";

export const TestimonialCard = ({ avatar, name, title, testimonial }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-[1.6rem] p-[3.2rem] shadow-lg">
      {/* User Info */}
      <div className="flex items-center mb-[2.4rem]">
        <div className="w-[6.4rem] h-[6.4rem] rounded-full overflow-hidden mr-[1.6rem] flex-shrink-0">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-[#334155] public-sans font-bold text-[1.8rem] mb-[0.4rem]">
            {name}
          </h4>
          <p className="text-[#64748B] public-san text-[1.4rem]">{title}</p>
        </div>
      </div>

      {/* Quote Icon and Testimonial Text */}
      <div className="relative">
        <img
          src="../images/quote.png"
          alt="quote"
          className="absolute -top-10 -left-5 h-30 z-0"
        />
        <p className="text-[#475569] public-san text-[1.6rem]/[2.4rem] relative z-10">
          {testimonial}
        </p>
      </div>
    </div>
  );
};
