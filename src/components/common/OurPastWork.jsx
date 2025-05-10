"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { pastWorkData } from "./Helper";
import { DownArrow } from "./Icons";

const OurPastWork = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2.1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="py-20" id="portfolio">
      <div className="container px-5 mx-auto 2xl:max-w-[1300px] ff_inter">
        <div className=" flex flex-col lg:flex-row justify-between gap-0 lg:gap-10 items-center">
          <div className="w-full">
            <div className="flex sm:gap-4 gap-2 items-center">
              <img
                className="lg:w-[78px] w-[50px] lg:h-[78px] h-[50px]"
                src="/img/main.gif"
                alt="qube"
              />
              <h2 className="font-bold xl:text-8xl sm:text-5xl text-[29px] sm:leading-[110%] leading-[120%] py-2 mt-2 grey_gradient">
                Our Past Work{" "}
              </h2>
            </div>
            <p className="sm:text-lg text-base font-normal text-grey xl:pt-5 pt-3 pb-5 lg:pb-0 max-w-[570px]">
              Our AI-driven assistant is designed to decode complex financial
              figures and{" "}
              <span className="text-white">illuminate key trends</span> in your
              business.
            </p>
          </div>
          <div className="w-full lg:text-end">
            <button className="text-base text-white bg-transparent sm:px-7 px-4 py-3 rounded-full font-medium border border-white border-opacity-20 flex gap-2 items-center group lg:ms-auto">
              View all
              <span className="inline-block group-hover:-rotate-[90deg] duration-200">
                <DownArrow />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Slider {...settings}>
          {pastWorkData.map((obj, i) => (
            <div key={i} className="px-5 outline-none">
              <img className="w-full" src={obj} alt="img" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurPastWork;
