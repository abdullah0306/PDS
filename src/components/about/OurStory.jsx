import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div className="relative">
      {" "}
      <div className="lg:h-[800px] lg:w-[800px] w-[500px] h-[500px] 2xl:w-[900px] 2xl:h-[800px] absolute -right-[25%] 2xl:right-[-10%] lg:-top-[50%] -top-[30%]  bg-[#010D50] opacity-50 rounded-full blur-[80px] z-[-1]"></div>
      <section className="flex md:flex-row flex-col items-center justify-between main-container gap-10">
        <div className="md:max-w-[607px] w-full">
          <h2 className="heading mb-4">Our story</h2>
          <p className="sub-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
            lorem purus justo, ultricies. Sollicitudin odio elementum urna
            placerat lacus, vulputate. Non malesuada viverra et ultrices cras.
            Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus
            ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
            <span className="mt-9 flex">
              Vulputate pellentesque proin facilisis dignissim gravida sed
              faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in
              nisl, in quis nulla tellus suscipit id. Semper velit odio cras
              pretium tristique habitant. Elit eu penatibus congue orci turpis.
            </span>
          </p>
        </div>
        <div className="max-w-[552px] w-full md:mx-0 mx-auto">
          <Image
            src={"/img/svg/earth.svg"}
            alt="earth"
            width={552}
            height={552}
            unoptimized
          />
        </div>
      </section>
    </div>
  );
};

export default OurStory;
