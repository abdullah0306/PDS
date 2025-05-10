import React from "react";
import { teamData } from "../common/Helper";
import TeamCard from "./TeamCard";

const OurTeam = () => {
  return (
    <div className="relative">
      <div className="lg:h-[700px] lg:w-[800px] w-[500px] h-[500px] 2xl:w-[800px] 2xl:h-[700px] absolute -right-[25%] 2xl:right-[-10%] lg:-top-[50%] -top-[0%]  bg-[#010D50] opacity-50 rounded-full blur-[80px] z-[-1]"></div>
      <div className="lg:h-[700px] lg:w-[800px] w-[500px] h-[500px] 2xl:w-[800px] 2xl:h-[700px] absolute -left-[25%] 2xl:left-[-10%] lg:-bottom-[70%] bottom-[-10%]  bg-blue opacity-30 rounded-full blur-[80px] z-[-1]"></div>
      <div className="container px-5 mx-auto pb-10 lg:pb-5 2xl:max-w-[1300px]">
        <h2 className="font-bold xl:text-8xl sm:text-5xl text-[32px] sm:leading-[110%] leading-[120%] py-2 mt-2">
          Our Team
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap lg:justify-start justify-center xl:gap-9 sm:gap-4 gap-6 items-center sm:py-7 py-4">
          {teamData.map((obj, i) => (
            <TeamCard obj={obj} key={i} />
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default OurTeam;
