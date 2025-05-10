import React from "react";
import Faqs from "./Faqs";

const FaqsContainer = () => {
  return (
    <div className="relative">
      <div className="container px-5 mx-auto flex flex-col lg:flex-row justify-between gap-5 lg:gap-10 items-end 2xl:max-w-[1300px]">
        <div className="w-full order-2 lg:order-1">
          <Faqs />
        </div>
        <div className="w-full lg:max-w-[500px] order-1 lg:order-2 ">
          <div className="h-[600px] w-[700px] 2xl:w-[700px] 2xl:h-[700px] absolute sm:right-10 2xl:right-52 lg:-bottom-20 bottom-40 2xl:-bottom-40 bg-darkBlue rounded-full blur-[60px] z-[-1]"></div>
          <img
            className="w-full max-w-[260px] mx-auto"
            src="/img/main.gif"
            alt="qube"
          />
          <h2 className="font-bold xl:text-7xl sm:text-5xl text-[29px] sm:leading-[120%] leading-[120%] py-2 mt-2 ff_hevatica grey_gradient">
            Frequently Asked Questions
          </h2>
          <p className="sm:text-lg text-base font-normal text-grey lg:pt-5 pt-3 pb-5 lg:pb-0 ff_hevatica">
            Have questions about PDS Digital Solutions? We’ve got you covered.
            Explore the answers to our most commonly asked questions below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqsContainer;
