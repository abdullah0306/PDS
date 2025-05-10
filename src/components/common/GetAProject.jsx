import React from "react";
import { CallIcon, GradientRightIcon, MailIcon } from "./Icons";

const GetAProject = () => {
  return (
    <div className="container px-5 mx-auto flex items-center py-20 gap-10 2xl:max-w-[1300px]">
      <div className="w-full xl:max-w-[450px] max-w-[300px]  hidden lg:block">
        <img className="w-full" src="/img/girl.png" alt="girl" />
      </div>
      <div className="sm:pt-16 2xl:pt-20 w-full ff_inter">
        <h2 className="font-bold xl:text-8xl sm:text-5xl text-[29px] sm:leading-[100%] leading-[120%]">
          Got a <i className="font-light">Project</i> in Mind ??{" "}
        </h2>{" "}
        <p className="xl:text-6xl sm:text-3xl text-[22px] font-normal pb-7">
          Let’s Connect with Us.
        </p>
        <div className="sm:rounded-[30px] rounded-[20px] xl:py-12 py-8 xl:px-12 sm:px-8 px-5 w-full relative overflow-hidden  flex flex-col justify-center bg-[url('/img/gradient.png')] bg-cover bg-no-repeat bg-right">
          <p className="sm:text-2xl text-xl font-normal text-[#98A2B3] sm:leading-[110%] leading-[120%] ">
            Have an idea you want to bring to life? Let’s collaborate and create
            something amazing together. Reach out to us today! 🚀
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-2 sm:items-center xl:pt-16 sm:pt-10 pt-7">
            <div className="flex gap-4 items-center">
              <MailIcon />
              <div>
                <p className="text-base uppercase font-normal text-white opacity-40">
                  Email
                </p>
                <p className="text-lg">contact@reom.co</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <CallIcon />
              <div>
                <p className="text-base uppercase font-normal text-white opacity-40">
                  Email
                </p>
                <p className="text-lg">contact@reom.co</p>
              </div>
            </div>
            <div>
              <button className="flex flex-col justify-end items-end w-full">
                <GradientRightIcon />
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAProject;
