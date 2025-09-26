import React from "react";
import { TestimonialCard } from "./TestimonialCard";

const testimonialData = [
  {
    avatar: "/images/Farzana.webp",
    name: "Farzana H.",
    title: "Owner, CleanPro Services",
    testimonial:
      "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
  },
  {
    avatar: "/images/Ahmed.webp",
    name: "Ahmed R.",
    title: "Technician",
    testimonial:
      "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
  },
  {
    avatar: "/images/Farzanah.webp",
    name: "Farzana H.",
    title: "Rafiq M., Homeowner",
    testimonial:
      "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing – just clear updates.",
  },
];

export const Testimonials = () => {
  return (
    <div className="w-11/12 m-auto mt-[17rem] mb-[17rem]">
      {/* Section Header */}
      <div className="text-center mb-[8rem]">
        <h2 className="text-gray-800 public-sans font-bold text-[4.8rem]/[6.4rem] mb-[1.6rem]">
          What Our Users Are Saying
        </h2>
        <p className="text-gray-600 public-san text-center text-[1.4rem]">
          Real stories from clients, employees, and business owners who use{" "}
          <br />
          our app every day.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4rem]">
        {testimonialData.map((item, index) => (
          <TestimonialCard
            key={index}
            avatar={item.avatar}
            name={item.name}
            title={item.title}
            testimonial={item.testimonial}
          />
        ))}
      </div>
    </div>
  );
};
