import React from "react";

const PhoneCard = () => {
  return (
    <div className="bg-[#1B1B1C] sm:pt-10 pt-7 sm:px-10 px-5 lg:rounded-[40px] rounded-[30px] w-full text-start h-full flex flex-col justify-between max-w-[550px] mx-auto relative">
      <img
        className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-[500px]"
        src="/img/circle.png"
        alt="circle"
      />
      <div className="z-1 relative">
        <p className="text-xl font-bold uppercase">
          iOS & Android App Development
        </p>
        <p className="text-base font-normal py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In amet,
          morbi non at sed neque.
        </p>
      </div>
      <img
        className="w-full max-w-[260px] mx-auto z-1 relative"
        src="/img/hone.png"
        alt="phone"
      />
    </div>
  );
};

export default PhoneCard;
