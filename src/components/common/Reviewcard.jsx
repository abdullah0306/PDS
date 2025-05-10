import React from "react";

const Reviewcard = ({ obj }) => {
  return (
    <div className="lg:px-4 px-2">
      <div className="bg-[#141517] lg:px-12 px-8 lg:py-16 py-8 rounded-[30px] sm:rounded-[40px] opacity-40 hover:opacity-100 duration-200">
        <p className="text-base sm:text-lg font-normal">{obj.review}</p>{" "}
        <div className="flex mt-5 gap-4 items-center pt-2">
          <div>
            <img
              className="w-[58px] h-[58px]"
              src={obj.profile}
              alt="profile"
            />
          </div>
          <div className="uppercase">
            <p className="font-bold">{obj.name}</p>
            <p className="font-normal mb-0">{obj.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewcard;
