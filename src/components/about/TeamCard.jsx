import React from "react";

const TeamCard = ({ obj }) => {
  return (
    <div className="bg-[#0F0E12] rounded-[30px] lg:rounded-[40px] p-6 xl:max-w-[375px] sm:max-w-[355px]">
      <img className="w-full" src={obj.imgUrl} alt="team image" />
      <p className="pt-4 uppercase font-bold">{obj.name}</p>
      <p className="uppercase font-normal pt-1">{obj.role}</p>
    </div>
  );
};

export default TeamCard;
