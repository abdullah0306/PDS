import Image from "next/image";
import React from "react";
import { CustomBorderIcon } from "../common/Icons";

const Timeline = () => {
  const timelineData = [
    {
      year: "2014",
      title: "Announcement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.",
    },
    {
      year: "2016",
      title: "Announcement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.",
    },
    {
      year: "2018",
      title: "Announcement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.",
    },
    {
      year: "2022",
      title: "Announcement",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.",
    },
  ];

  return (
    <div className="relative">
      <div className="lg:h-[800px] lg:w-[800px] w-[500px] h-[500px] 2xl:w-[700px] 2xl:h-[700px] absolute left-[0] 2xl:left-[10%] lg:-top-[10%] top-[-5%]  bg-[#1F143A]  rounded-full blur-[70px] z-[-1]"></div>
      <div className="main-container flex md:flex-row flex-col justify-between gap-10 xl:mt-[178px] lg:mt-[150px] md:mt-[120px] sm:mt-[100px] mt-20">
        <div className="md:max-w-[382px] w-full ">
          <h3 className="heading">Timeline</h3>
          <p className="sub-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <Image
            className="max-w-[260px] w-full object-cover xl:mt-[85px] lg:mt-16 mt-12 md:mx-0 mx-auto"
            src={"/img/svg/cube.svg"}
            alt="cube"
            width={260}
            height={263}
            unoptimized
          />
        </div>
        <div className="md:max-w-[683px] w-full flex relative">
          <div className="h-[75%] w-[1px] absolute md:flex hidden">
            <CustomBorderIcon />
          </div>
          <div>
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="lg:pb-10 pb-7 xl:mb-20 lg:mb-16 mb-7 border-b border-customrgba relative md:pl-[64px] md:-ml-[10px]"
              >
                <h3 className="timeline-card-year relative">
                  {item.year}
                  <span className="absolute w-6 h-6 -left-[66px] bg-white rounded-full md:inline-block hidden"></span>
                </h3>
                <p className="timeline-card-announcement mt-4 mb-3">
                  {item.title}
                </p>
                <span className="sub-heading">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
