import React from "react";
import { FeatureCard } from "./FeatureCard";

const cardItems = [
  {
    icon: "../images/calender.webp",
    title: "Easy Service Booking",
    description:
      "Streamlined booking process for clients with service catalogs and availability.",
  },
  {
    icon: "../images/tracking.webp",
    title: "Real-Time Tracking",
    description:
      "Monitor job progress, employee hours, and project timelines with live updates.",
  },
  {
    icon: "../images/analytics.webp",
    title: "Performance Analytics",
    description:
      "Comprehensive reporting and insights to improve business operations and efficiency.",
  },
  {
    icon: "../images/secure.webp",
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with 99.9% uptime guarantee and data protection.",
  },
];

export const Features = () => {
  return (
    <div className="w-11/12 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[7.2rem] mt-[8.5rem]">
      {cardItems.map((item, index) => (
        <FeatureCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};
