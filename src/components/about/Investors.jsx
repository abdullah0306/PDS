import React from "react";
import { companayLogoData } from "../common/Helper";

const Investors = () => {
  return (
    <div className="xl:py-20 md:py-10">
      <div className="container px-5 mx-auto 2xl:max-w-[1300px]">
        <h3 className="sm:text-[42px] text-[35px] font-bold text-center">
          Investors
        </h3>
        <p className="text-lg font-normal text-center max-w-[500px] mx-auto py-2 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
          lorem purus justo, ultricies.
        </p>
        <div className="flex flex-wrap lg:flex-nowrap gap-5 lg:justify-between justify-center items-center pt-10">
          {companayLogoData.map((obj, i) => (
            <span key={i}>{obj}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Investors;
