import Link from "next/link";
import React from "react";
import { CallIconHeader, LocationIcon, OfferIcon } from "./Icons";

const TopHeader = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black z-30 ff_lato">
      <div className="container px-5 mx-auto flex justify-between items-center py-2 gap-4 2xl:max-w-[1300px]">
        <p className="text-xs sm:text-base">
          Welcome to PDS Digital Solutions !
        </p>
        <div className="flex items-center sm:gap-5 gap-3">
          <Link href="/" className="flex sm:gap-2 gap-1 items-center">
            <CallIconHeader />
            <span className="hidden lg:inline-block">
              Call at +91 000 000 000
            </span>
          </Link>
          <p className="flex sm:gap-2 gap-1 items-center border-l sm:ps-3 ps-2">
            <LocationIcon />
            <span className="hidden lg:inline-block">Address Here</span>
          </p>
          <p className="flex sm:gap-2 gap-1 items-center border-l sm:ps-3 ps-2">
            <OfferIcon />
            <span className="hidden lg:inline-block">All Offers</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
