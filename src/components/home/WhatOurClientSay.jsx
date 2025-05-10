"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Reviewcard from "../common/Reviewcard";
import { reviewData } from "../common/Helper";

const WhatOurClientSay = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2.5,
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
    <div className="py-20 relative">
      <div className="h-[400px] w-[400px] 2xl:w-[500px] 2xl:h-[500px] absolute left-[20%] lg:top-20 top-0 2xl:-bottom-40 bg-blue opacity-20 rounded-full blur-[80px] z-[-1]"></div>

      <div className="container px-5 mx-auto 2xl:max-w-[1300px] relative z-[1] ff_dm">
        <div className=" flex flex-col lg:flex-row justify-between gap-0 lg:gap-10 items-center">
          <div className="w-full flex sm:gap-4 gap-2 items-center">
            <img
              className="lg:w-[78px] w-[50px] lg:h-[78px] h-[50px]"
              src="/img/main.gif"
              alt="qube"
            />
            <h2 className="font-bold xl:text-8xl sm:text-5xl text-[29px] sm:leading-[110%] leading-[120%] py-2 mt-2 grey_gradient">
              What Our Clients Say?
            </h2>
          </div>
        </div>
      </div>
      <div className="sm:mt-10 mt-6 pb-5">
        <Slider {...settings}>
          {reviewData.map((obj, i) => (
            <Reviewcard obj={obj} key={i} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WhatOurClientSay;
