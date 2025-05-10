import React from "react";

const ServiceCard = ({ imgUrl, title, desc }) => {
  return (
    <div className="bg-[#010D50] bg-opacity-60 xl:rounded-[40px] rounded-[30px] sm:p-7 p-5 max-w-[355px] text-start mx-auto lg:mx-0">
      <img className="w-full max-w-[100px]" src={imgUrl} alt="" />
      <h3 className="text-lg font-bold uppercase py-3">{title}</h3>
      <p className="text-base font-normal">{desc}</p>
    </div>
  );
};

export default ServiceCard;
