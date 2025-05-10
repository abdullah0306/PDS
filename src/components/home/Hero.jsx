import React from "react";
import {
  DownArrow,
  HeroDiscord,
  HeroMedium,
  HeroTwitter,
  RightArrowHero,
} from "../common/Icons";
import FloatingIcon from "../common/FloatingIcon";

const Hero = () => {
  return (
    <div className="sm:h-screen relative max-h-[1080px]">
      <img
        className="absolute lg:bottom-[-30%] sm:bottom-[25%] bottom-[47%] right-0 w-full xl:max-w-[700px] max-w-[600px] 2xl:max-w-[800px] z-[1]"
        src="/img/hand.png"
        alt="hand"
      />{" "}
      <div className=" sm:w-[500px] sm:h-[500px] w-[300px] h-[300px] 2xl:w-[600px] 2xl:h-[600px] absolute -left-[10%] 2xl:left-[7%] -top-[15%] bg-lightBlue  rounded-full blur-[60px] z-[-1]"></div>
      <div className=" sm:w-[500px] w-[300px] h-[400px] sm:h-[600px] 2xl:w-[600px] 2xl:h-[700px] absolute -right-[10%] 2xl:right-[-10%] -bottom-[15%] bg-lightBlue  rounded-full sm:blur-[80px] blur-[40px] z-[-1]"></div>
      <div className="container px-5 mx-auto h-full 2xl:max-w-[1300px] ff_inter">
        <div className="flex flex-col lg:flex-row justify-between gap-5 h-full">
          <div className="w-full lg:h-full flex flex-col justify-center lg:mt-[7vh] order-2 lg:order-1 ">
            <p className="flex gap-1 items-center text-[11px] text-[#FF9217] border border-opacity-5 border-white bg-[url('/img/hero-badge.png')] max-w-[160px] text-center py-1 justify-center rounded-full">
              Featured on Product Hunt
              <span>
                <RightArrowHero />
              </span>
            </p>
            <h1 className="xl:text-[65px] sm:text-[45px] text-[39px] font-bold text_gradient_hero bg-clip-text text-transparent max-w-[700px] leading-[120%] py-2 2xl:mt-4 mt-2">
              Next Generation{" "}
              <span className="font-[100] ">
                <i>Digital</i>{" "}
              </span>
              Solutions.
            </h1>
            <p className="sm:text-lg text-base font-normal text-white opacity-55 py-3">
              Transforming businesses with cutting-edge technology and strategic
              innovation. Elevate your brand with our comprehensive digital
              services.
            </p>
            <div className="flex sm:gap-5 gap-3 sm:mt-5 mt-3">
              <button className="text-base text-black bg-white sm:px-8 px-6 py-3 rounded-full font-medium border border-white hover:opacity-90 duration-200">
                Contact us
              </button>
              <button className="text-base text-white bg-transparent sm:px-6 px-4 py-3 rounded-full font-medium border border-white border-opacity-20 flex gap-2 items-center group">
                Our services
                <span className="inline-block group-hover:-rotate-[90deg] duration-200">
                  <DownArrow />
                </span>
              </button>
            </div>
            <div className="flex gap-5 items-center xl:mt-12 mt-8">
              <a
                className="flex flex-col justify-center items-center h-10 w-10 rounded-full border border-white border-opacity-30 group"
                href="/"
              >
                <span className="inline-block group-hover:scale-110 duration-200">
                  <HeroDiscord />
                </span>
              </a>
              <a
                className="flex flex-col justify-center items-center h-10 w-10 rounded-full border border-white border-opacity-30 group"
                href="/"
              >
                <span className="inline-block group-hover:scale-110 duration-200">
                  <HeroTwitter />
                </span>
              </a>
              <a
                className="flex flex-col justify-center items-center h-10 w-10 rounded-full border border-white border-opacity-30 group"
                href="/"
              >
                <span className="inline-block group-hover:scale-110 duration-200">
                  <HeroMedium />
                </span>
              </a>
            </div>
          </div>
          <div className="relative w-full h-full flex flex-col justify-center lg:mt-[7vh] overflow-hidden  order-1 lg:order-2 sm:pt-[40px] pt-[100px] pb-[100px] sm:pb-0 lg:pt-0">
            <img
              className="absolute sm:left-1/2 sm:-translate-x-1/2 top-1/2 -translate-y-1/2 w-full sm:max-w-[500px] max-w-[250px] h-full object-cover object-bottom"
              src="/img/hero-right-layer.png"
              alt="right-layer"
            />
            <img
              className="w-full xl:max-w-[350px] sm:max-w-[300px] max-w-[200px] sm:mx-auto z-10 relative ps-7 sm:ps-0"
              src="/img/main.gif"
              alt="hero"
            />
          </div>
        </div>
        <FloatingIcon />
      </div>
    </div>
  );
};

export default Hero;
