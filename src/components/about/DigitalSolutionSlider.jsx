import React from "react";
import Marquee from "react-fast-marquee";

const DigitalSolutionSlider = () => {
  return (
    <section className="sm:pt-10 overflow-x-hidden relative">
      <div className="bg-dark3 py-2">
        <Marquee speed={30}>
          {[...Array(10)].map((_, index) => (
            <img
              key={index}
              src="/img/slider-logo.png"
              alt={`slider img ${index + 1}`}
              className="w-auto mx-6"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default DigitalSolutionSlider;
