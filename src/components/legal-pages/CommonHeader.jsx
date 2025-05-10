"use client";
import React from "react";
import { LeftArrow, ShareIcon } from "../common/Icons";
import { useRouter } from "next/navigation";

const CommonHeader = ({ title }) => {
  const router = useRouter();
  return (
    <div className="ff_poppin container px-5 mx-auto 2xl:max-w-[1300px] lg:mt-32 mt-20 pt-10">
      <div className="flex justify-between">
        <div
          className="flex gap-3 items-center cursor-pointer"
          onClick={() => router.back()}
        >
          <LeftArrow /> <p className="text-[22px] font-semibold">Back</p>
        </div>
        <div className="cursor-pointer">
          <ShareIcon />
        </div>
      </div>
      <h2 className="xl:text-[60px] lg:text-[50px] sm:text-[40px] text-[35px] font-extrabold ff_lato pt-5">
        {title}
      </h2>
    </div>
  );
};

export default CommonHeader;
