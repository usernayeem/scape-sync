import React, { useState } from "react";

const faqData = [
  {
    question: "Is the app free to use?",
    answer:
      "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.",
  },
  {
    question: "Can I assign multiple employees to one job?",
    answer:
      "Absolutely! You can assign multiple team members to a single job and track their individual progress and time contributions in real-time.",
  },
  {
    question: "Does it work on both mobile and desktop?",
    answer:
      "Yes, our app is fully responsive and works seamlessly across all devices including mobile phones, tablets, and desktop computers.",
  },
  {
    question: "How do I track employee performance?",
    answer:
      "Our built-in analytics dashboard provides comprehensive insights into employee performance, including time tracking, job completion rates, and productivity metrics.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-11/12 m-auto mt-[17rem] mb-[17rem]">
      <div className="text-center mb-[8rem]">
        <h2 className="text-gray-800 public-sans font-bold text-[3.2rem]/[4rem] sm:text-[4.8rem]/[6.4rem] mb-[1.6rem]">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 public-san text-center text-[1.4rem] sm:text-[1.6rem] max-w-[600px] mx-auto">
          Quick answers to help you get the most out of our app.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-[800px] mx-auto space-y-[1.6rem]">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-[1.6rem] border border-[#C7E6C5] overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            {/* Question */}
            <button
              className="w-full text-left p-[3.2rem] flex items-center justify-between border-0"
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="text-[#334155] public-sans font-semibold text-[1.8rem] sm:text-[2rem] pr-[2rem] leading-tight">
                {item.question}
              </h3>
              <div className="flex-shrink-0 w-[2.4rem] h-[2.4rem] flex items-center justify-center">
                <img
                  src={
                    openIndex === index
                      ? "../images/minus.png"
                      : "../images/plus.png"
                  }
                  alt={openIndex === index ? "collapse" : "expand"}
                  className={`w-[1.6rem] h-[1.6rem] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </button>

            {/* Answer with smooth transition */}
            <div
              className={`px-[3.2rem] overflow-hidden transition-all duration-300 ease-out ${
                openIndex === index
                  ? "max-h-[200px] opacity-100 pb-[3.2rem]"
                  : "max-h-0 opacity-0 pb-0"
              }`}
            >
              <p className="text-[#64748B] public-san text-[1.6rem]/[2.4rem]">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
