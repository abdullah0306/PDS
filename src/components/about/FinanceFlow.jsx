import React from "react";
import {
  CommunityIcon,
  TransparentIcon,
  UserIcon,
  WorldWideIcon,
} from "../common/Icons";

const FinanceFlow = () => {
  const features = [
    {
      title: "Open Source",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.",
      icon: <UserIcon />,
    },
    {
      title: "Secure",
      description:
        "Data security is our top priority. Your information is encrypted and protected at every layer.",
      icon: <WorldWideIcon />,
    },
    {
      title: "Fast Performance",
      description:
        "Experience lightning-fast load times and seamless navigation across the platform.",
      icon: <TransparentIcon />,
    },
    {
      title: "Fast Performance",
      description:
        "Experience lightning-fast load times and seamless navigation across the platform.",
      icon: <CommunityIcon />,
    },
  ];

  return (
    <div className="relative pt-10">
      <div className="lg:h-[400px] lg:min-w-[800px] w-[500px] h-[500px] 2xl:w-[900px] 2xl:h-[500px] absolute right-1/2 translate-x-1/2 lg:-top-[20%] -top-[0%]  bg-[#010D50] opacity-50 rounded-full blur-[80px] z-[-1]"></div>

      <div className="main-container lg:mt-[71px] mt-[50px]">
        <div className="flex md:flex-row flex-col lg:gap-6 gap-4 justify-between items-center w-full lg:mb-7 mb-10 ff_dm">
          <h4 className="heading md:max-w-[598px] w-full">
            What drives Finance Flow?
          </h4>
          <p className="sub-heading md:max-w-[496px] w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
        </div>
        <div className="xl:gap-7 gap-4 grid md:grid-cols-2 grid-cols-1">
          {features.map((item, index) => (
            <div
              key={index}
              className="xl:py-[58px] md:py-[40px] py-6 xl:px-8 px-6 xl:rounded-[40px] rounded-3xl bg-lightBlack flex xl:gap-6 gap-4"
            >
              <span className="xl:max-w-[68px] max-w-[50px] xl:max-h-[68px] max-h-[50px] xl:min-w-[68px] min-w-[50px] xl:min-h-[68px] min-h-[50px] flex items-center justify-center bg-delta rounded-[20px] p-2">
                {item.icon}
              </span>
              <div>
                <h4 className="xl:text-lg lg:text-base text-sm text-white leading-[144.4%] uppercase tracking-[0.9px] font-bold">
                  {item.title}
                </h4>
                <p className="sub-heading mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinanceFlow;
