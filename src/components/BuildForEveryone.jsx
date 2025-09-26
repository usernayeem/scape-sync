import React from "react";

export const BuildForEveryone = () => {
  return (
    <div className="w-11/12 m-auto mt-[17rem] relative overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-[8rem]">
        <h2 className="text-gray-800 public-sans font-bold text-[4.8rem]/[6.4rem] mb-[1.6rem]">
          Build for Everyone
        </h2>
        {/* Decorative line under title */}
        <img
          src="/images/title-line.webp"
          alt="line"
          className="absolute top-3"
        />
        <p className="text-gray-600 public-san text-center text-[1.4rem]">
          Whether you're booking services, managing tasks, or running
          operations, we've <br /> designed the perfect experience for you.
        </p>
      </div>

      {/* Feature 1 */}
      <div className="flex flex-col lg:flex-row items-center gap-[8rem] mb-[16rem] relative">
        {/* Small curved arrow - top left */}
        <div className="absolute left-[-8rem] top-[10rem] hidden lg:block">
          <img
            src="/images/left-arrow.webp"
            alt="arrow"
            className=" -mt-70 ml-70 h-40 hidden lg:block"
          />
        </div>
        {/* Small curved arrow - top left */}
        <div className="absolute left-[-8rem] top-[10rem] hidden lg:block">
          <img
            src="/images/right-arrow.webp"
            alt="arrow"
            className="-mt-70 ml-470 h-90 hidden lg:block"
          />
        </div>
        <div className="lg:w-1/2">
          <div className="mb-[2.4rem]">
            <span className="inline-block border border-[#3BA334] text-[#3BA334] text-[1.4rem] font-medium px-[1.6rem] py-[0.8rem] rounded-full">
              Clients
            </span>
          </div>
          <h3 className="text-gray-900 public-sans font-bold text-[2.4rem]/[3.6rem] mb-[2.4rem]">
            Book services, find a template and hire someone
          </h3>
          <p className="text-gray-600 text-[1.8rem]/[2.4rem] mb-[3.2rem]">
            Everything you need to manage your workday from job assignments to
            optimized routes and time logging.
          </p>
          <div className="space-y-[2.4rem] pt-8">
            <div className="flex items-start gap-[1.6rem]">
              <div className="w-[0.4rem] h-[2.4rem] bg-[#3BA334] mt-[0.2rem] flex-shrink-0"></div>
              <p className="text-[#0F172A] text-[1.6rem]/[2.4rem] font-medium">
                Book services with thousands of providers
              </p>
            </div>
            <div className="flex items-start gap-[1.6rem]">
              <div className="w-[0.4rem] h-[2.4rem] bg-[#3BA334] opacity-40 mt-[0.2rem] flex-shrink-0"></div>
              <p className="text-[#0F172A] text-[1.6rem]/[2.4rem] font-medium">
                Get your own app instantly
              </p>
            </div>
            <div className="flex items-start gap-[1.6rem]">
              <div className="w-[0.4rem] h-[2.4rem] bg-[#3BA334] opacity-40 mt-[0.2rem] flex-shrink-0"></div>
              <p className="text-[#0F172A] text-[1.6rem]/[2.4rem] font-medium">
                Schedule appointments at your convenience
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="/images/hand-bg.webp"
              alt="hand background"
              className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            />
            <img
              src="/images/mobile1.webp"
              alt="Mobile app showing service booking"
              className="max-w-full h-auto relative z-10"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-20"></div>
          </div>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-[8rem] mb-[16rem] relative">
        <div className="lg:w-1/2">
          <div className="mb-[2.4rem]">
            <span className="inline-block border border-[#3BA334] text-[#3BA334] text-[1.4rem] font-medium px-[1.6rem] py-[0.8rem] rounded-full">
              Service Providers
            </span>
          </div>
          <h3 className="text-gray-900 public-sans font-bold text-[2.4rem]/[3.6rem] mb-[2.4rem]">
            Complete tasks, earn money. Get opportunities submitted.
          </h3>
          <p className="text-gray-600 text-[1.8rem]/[2.4rem] mb-[3.2rem]">
            Get an overview of how you are performing and motivate yourself to
            achieve even more.
          </p>
          <div className="space-y-[2.4rem] pt-8">
            <div className="flex items-start gap-[1.6rem]">
              <div className="w-[0.4rem] h-[2.4rem] bg-[#3BA334] mt-[0.2rem] flex-shrink-0"></div>
              <p className="text-[#0F172A] text-[1.6rem]/[2.4rem] font-medium">
                Apply jobs in the region near location
              </p>
            </div>
            <div className="flex items-start gap-[1.6rem]">
              <div className="w-[0.4rem] h-[2.4rem] bg-[#3BA334] opacity-40 mt-[0.2rem] flex-shrink-0"></div>
              <p className="text-[#0F172A] text-[1.6rem]/[2.4rem] font-medium">
                Manage and track your time
              </p>
            </div>
            <div className="flex items-start gap-[1.6rem]">
              <div className="w-[0.4rem] h-[2.4rem] bg-[#3BA334] opacity-40 mt-[0.2rem] flex-shrink-0"></div>
              <p className="text-[#0F172A] text-[1.6rem]/[2.4rem] font-medium">
                Receive job notifications real-time
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="/images/hand-bg.webp"
              alt="hand background"
              className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            />
            <img
              src="/images/mobile2.webp"
              alt="Mobile app showing task management"
              className="max-w-full h-auto relative z-10"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-20"></div>
          </div>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col lg:flex-row items-center gap-[8rem] relative">
        <div className="lg:w-1/2">
          <div className="mb-[2.4rem]">
            <span className="inline-block border border-[#3BA334] text-[#3BA334] text-[1.4rem] font-medium px-[1.6rem] py-[0.8rem] rounded-full">
              Employees
            </span>
          </div>
          <h3 className="text-gray-900 public-sans font-bold text-[2.4rem]/[3.6rem] mb-[2.4rem]">
            See tasks, track time, and navigate routes with ease.
          </h3>
          <p className="text-gray-600 text-[1.8rem]/[2.4rem] mb-[3.2rem]">
            Everything you need to manage your workday from job assignments to
            optimized routes and time logging.
          </p>
          <div className="space-y-[2.4rem] pt-8">
            <div className="flex items-start gap-[1.6rem]">
              <div className="w-[0.4rem] h-[2.4rem] bg-[#3BA334] mt-[0.2rem] flex-shrink-0"></div>
              <p className="text-[#0F172A] text-[1.6rem]/[2.4rem] font-medium">
                Assign jobs to the right team member
              </p>
            </div>
            <div className="flex items-start gap-[1.6rem]">
              <div className="w-[0.4rem] h-[2.4rem] bg-[#3BA334] opacity-40 mt-[0.2rem] flex-shrink-0"></div>
              <p className="text-[#0F172A] text-[1.6rem]/[2.4rem] font-medium">
                Monitor performance in real time
              </p>
            </div>
            <div className="flex items-start gap-[1.6rem]">
              <div className="w-[0.4rem] h-[2.4rem] bg-[#3BA334] opacity-40 mt-[0.2rem] flex-shrink-0"></div>
              <p className="text-[#0F172A] text-[1.6rem]/[2.4rem] font-medium">
                Manage clients and services seamlessly
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="/images/hand-bg.webp"
              alt="hand background"
              className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            />
            <img
              src="/images/mobile3.webp"
              alt="Mobile app showing dashboard"
              className="max-w-full h-auto relative z-10"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
