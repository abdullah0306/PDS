import React from "react";
import ServiceCard from "../common/ServiceCard";
import PhoneCard from "../common/PhoneCard";
import { DownArrow } from "../common/Icons";

const ServiceWeOffer = () => {
  return (
    <div className="relative" id="services">
      <div className="xl:h-[800px] xl:w-[800px] sm:w-[500px] w-[300px] h-[300px] sm:h-[500px] 2xl:w-[700px] 2xl:h-[700px] absolute -right-[2%] 2xl:right-[15%] lg:-top-[10%] sm:-top-[5%] top-0 2xl:-bottom-40 bg-blue opacity-30 rounded-full sm:blur-[80px] blur-[40px] z-[-1]"></div>
      <div className=" w-[500px] h-[500px] 2xl:w-[600px] 2xl:h-[600px] absolute -left-[10%] 2xl:left-[7%] -bottom-[15%] bg-darkBlue  rounded-full blur-[60px] z-[-1]"></div>

      <div className="container px-5 mx-auto text-center relative z-[1]">
        <img
          className="w-[78px] h-[78px] mx-auto"
          src="/img/main.gif"
          alt="qube"
        />
        <p className="text-sm font-semibold bg-[#2563EB] bg-opacity-30 rounded-full inline-block py-1 px-4 max-w-[140px] text-center mx-auto ff_inter mt-5">
          Our Expertise
        </p>
        <h2 className="font-bold xl:text-8xl sm:text-5xl text-[29px] sm:leading-[110%] leading-[120%] py-2 mt-2 text-center ff_inter grey_gradient">
          Services We Offer!!
        </h2>
        <p className="sm:text-lg text-base font-normal text-grey lg:pt-5 pt-3 pb-5 lg:pb-0 max-w-[600px] mx-auto text-center ff_inter">
          Comprehensive digital solutions tailored to meet your business
          objectives and drive growth.
        </p>

        <div className="flex flex-col xl:flex-row xl:justify-between justify-center gap-5 max-w-[1200px] mx-auto xl:mt-16 mt-8 ff_dm">
          <div className="flex flex-col sm:flex-row xl:flex-col justify-center gap-7 order-1 xl:order-1">
            <ServiceCard
              imgUrl="/img/service-1.png"
              title="Web Development"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
            />
            <ServiceCard
              imgUrl="/img/service-2.png"
              title="SEO Optimization"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
            />
          </div>
          <div className="order-3 xl:order-2">
            <PhoneCard />
          </div>
          <div className="flex flex-col sm:flex-row xl:flex-col gap-7 justify-center order-2 xl:order-3">
            <ServiceCard
              imgUrl="/img/service-3.png"
              title="UI/UX Design"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
            />
            <ServiceCard
              imgUrl="/img/service-4.png"
              title="Cloud Solutions"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
            />
          </div>{" "}
        </div>
        <button className="text-base text-white bg-transparent sm:px-7 px-4 py-3 rounded-full font-medium border border-white border-opacity-20 flex gap-2 items-center group sm:mt-16 mt-10 mx-auto">
          View all services
          <span className="inline-block group-hover:-rotate-[90deg] duration-200">
            <DownArrow />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ServiceWeOffer;
