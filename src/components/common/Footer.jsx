import React from "react";
import { footerData, footerIcons } from "./Helper";
import Link from "next/link";
import { Logo } from "./Icons";

const Footer = () => {
  return (
    <div className="relative border-t border-white border-opacity-20">
      <img
        className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
        src="/img/footer-gradient.png"
        alt="gradient"
      />
      <div className="container px-5 mx-auto 2xl:max-w-[1300px]">
        <div className=" flex flex-col xl:flex-row justify-between py-16">
          <div className="w-full max-w-[400px]">
            <Link href="/">
              <Logo />
            </Link>
            <p className="py-5 sm:text-lg text-base font-normal text-white opacity-70 max-w-[330px] sm:mb-3">
              Transforming businesses with cutting- edge digital solutions.
            </p>
            <div className="flex gap-4 items-center">
              {footerIcons.map((obj, i) => (
                <Link
                  key={i}
                  href={obj.url}
                  className="inline-block hover:scale-110 duration-200"
                >
                  {obj.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex justify-between w-full max-w-[1000px] mt-7 xl:mt-0 gap-7 flex-wrap sm:flex-nowrap">
            {footerData.map((obj, i) => (
              <div key={i} className="sm:w-full">
                <h3 className="text-lg font-semibold pb-2">{obj.title}</h3>
                <ul>
                  {obj.content.map((obj, i) => (
                    <li className="xl:py-1.5  py-1">
                      <Link
                        className="xl:text-lg text-base font-normal text-white opacity-70 hover:opacity-100 duration-200"
                        href={obj.url}
                      >
                        {obj.link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-white border-opacity-20">
          <p className="text-center pt-7 pb-10 text-sm sm:text-base opacity-60">
            © <span>{new Date().getFullYear()}</span> PDS Digital Solutions. All
            rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
