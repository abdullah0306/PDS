import React from "react";
import Marquee from "react-fast-marquee";

const LogosSlider = () => {
  return (
    <section className="pb-20  overflow-x-hidden relative">
      <div className="bg-dark3 py-2">
        <Marquee speed={30}>
          <img
            src="/img/slider-images.png"
            alt="slider img"
            className="w-full"
          />
          <img
            src="/img/slider-images.png"
            alt="slider img"
            className="w-full"
          />
          <img
            src="/img/slider-images.png"
            alt="slider img"
            className="w-full"
          />
        </Marquee>
      </div>
    </section>
  );
};

export default LogosSlider;
