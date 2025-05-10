import React from "react";

const NewsLetter = () => {
  return (
    <div className="sm:py-20 pb-20 pt-8">
      <div className="container mx-auto px-5 2xl:max-w-[1300px]">
        <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-0">
          <div className="border-t border-b border-r lg:border-r-0 border-l xl:max-w-[450px] 2xl:max-w-[650px] lg:max-w-[350px]  border-white border-opacity-20 rounded-[34px] py-10 px-10 w-full relative xl:min-h-[320px] min-h-[250px] flex flex-col justify-center">
            <img
              className="absolute sm:-top-16 -top-10 left-10 bg-black  w-full sm:max-w-[170px] max-w-[120px]"
              src="/img/inbox-1.png"
              alt="inbox-1"
            />
            <img
              className="absolute bottom-3 right-3  w-full sm:max-w-[100px] max-w-[70px]"
              src="/img/inbox-2.png"
              alt="inbox-2"
            />
            <img
              className="absolute bottom-3 sm:right-32 right-24 w-full sm:max-w-[50px] max-w-[40px] -rotate-[15deg] opacity-50"
              src="/img/inbox-2.png"
              alt="inbox-2"
            />

            <h3 className="xl:text-5xl text-3xl font-normal leading-[120%] text-center">
              Subscribe to our{" "}
              <span className="font-bold">
                {" "}
                <br />
                Newsletter
              </span>
            </h3>
          </div>
          <div className="border-t border-b border-r  border-white border-opacity-20 rounded-[34px] py-10 sm:px-10 px-5 w-full relative overflow-hidden xl:min-h-[320px] min-h-[250px] flex flex-col justify-center bg-[url('/img/gradient.png')] bg-cover bg-no-repeat bg-right">
            <div className="border-dashed border h-full absolute left-0 top-0 opacity-20"></div>
            <p className="lg:text-[24px] sm:text-xl text-base font-normal">
              Be the first to receive our newsletter to take advantage of
              opportunities before everyone else
            </p>
            <div className="flex relative mt-7">
              <input
                className="w-full sm:py-4 py-3 border border-opacity-20 border-white rounded-full bg-transparent sm:px-5 px-3 text-sm sm:text-base"
                type="email"
                placeholder="email@address.com"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-white hover:bg-opacity-90 duration-200  text-black sm:py-3 py-2 sm:px-7 px-5 text-sm sm:text-base font-normal rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
