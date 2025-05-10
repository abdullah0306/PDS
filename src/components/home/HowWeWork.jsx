import React from "react";
import { PDS1, PDS2, PDS3 } from "../common/Icons";

const HowWeWork = () => {
  const data = [
    {
      icon: <PDS1 />,
      title: "100% Private data",
    },
    {
      icon: <PDS2 />,
      title: "99.99% Uptime guarantee",
    },
    {
      icon: <PDS3 />,
      title: "24/7 Dedicated support",
    },
  ];
  return (
    <div className="pb-20 relative">
      <div className="lg:h-[800px] lg:w-[800px] w-[500px] h-[500px] 2xl:w-[700px] 2xl:h-[700px] absolute -right-[25%] 2xl:right-0 lg:-top-[70%] -top-[30%] 2xl:-bottom-40 bg-[#010D50] opacity-50 rounded-full blur-[40px] z-[-1]"></div>

      <div className="container px-5 mx-auto flex flex-col lg:flex-row justify-between gap-5 lg:gap-10 items-end 2xl:max-w-[1300px]">
        <div className="w-full  ">
          <h2 className="font-bold xl:text-8xl sm:text-5xl text-[29px] sm:leading-[110%] leading-[120%] py-2 mt-2 ff_inter grey_gradient">
            How we work at PDS Digital Solutions ?
          </h2>
          <p className="sm:text-lg text-base font-normal text-white lg:pt-7 pt-3 pb-5 lg:pb-4 max-w-[500px] ff_dm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
          <ul>
            {data.map((obj, i) => (
              <li key={i} className="flex items-center gap-5 mt-4 ff_dm">
                <span>{obj.icon}</span>
                <p className="text-lg font-normal">{obj.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full ">
          <img
            className="w-full sm:max-w-[460px] max-w-[360px] mx-auto"
            src="/img/main.gif"
            alt="qube"
          />
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
