"use client";

import { gsap } from "gsap";
import { useEffect, useState } from "react";
import {
  BookACallBtn,
  CrossIcon,
  HeaderLogo,
  SunIcon,
  ToggleIcon,
} from "./Icons";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/#services" },
  { label: "About", href: "/about-us" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "/contact-us" },
];

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);

  const mobileLinksAnimate = () => {
    gsap.fromTo(
      ".mobile_nav_link",
      { yPercent: 50, autoAlpha: 0 },
      { yPercent: 0, autoAlpha: 1, stagger: 0.2, duration: 1 }
    );
  };

  const handleNavClick = (href) => {
    setOpenNav(false);

    const isHashLink = href.startsWith("#") || href.startsWith("/#");

    if (isHashLink) {
      const id = href.replace("/#", "#");
      const targetEl = document.querySelector(id);
      if (targetEl && window.lenis) {
        window.lenis.scrollTo(targetEl, {
          offset: 0,
          immediate: false,
          duration: 1.2,
        });
      }
    } else {
      window.location.href = href;
    }
  };

  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
  }, [openNav]);

  return (
    <div className="fixed w-full left-0 sm:top-10 top-8 z-30 border border-white border-opacity-20 backdrop-blur-[20px] bg-black bg-opacity-10 ff_poppin">
      <div className="container mx-auto sm:py-4 py-1 px-5 2xl:max-w-[1300px]">
        <div className="flex justify-between items-center">
          <a href="/">
            <HeaderLogo />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex">
            {navLinks.map(({ label, href }) => (
              <li key={label} className="lg:px-5 px-3">
                {href.startsWith("/") && !href.includes("#") ? (
                  <Link
                    href={href}
                    className="hover:scale-[1.2] inline-block transition-all duration-300 ease-in-out"
                  >
                    {label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(href)}
                    className="hover:scale-[1.2] inline-block transition-all duration-300 ease-in-out text-white"
                  >
                    {label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <div className="flex items-center">
            <span className="md:inline-block hidden hover:scale-110 duration-200 cursor-pointer">
              <BookACallBtn />
            </span>
            <div className="ps-5">
              <SunIcon />
            </div>
            <div
              className="lg:hidden ps-5 cursor-pointer"
              onClick={() => {
                setOpenNav(true);
                mobileLinksAnimate();
              }}
            >
              <ToggleIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed lg:hidden bg-black w-full h-screen transition-all duration-300 z-[100] flex flex-col justify-center items-center ${
          openNav ? "-top-9 left-0" : "top-[-100vh] left-[-100vw]"
        }`}
      >
        <div
          className="absolute right-[30px] top-[30px] cursor-pointer"
          onClick={() => setOpenNav(false)}
        >
          <CrossIcon />
        </div>

        <ul className="text-center">
          {navLinks.map(({ label, href }) => (
            <li
              key={label}
              className="lg:px-5 px-3 sm:py-4 py-3 sm:text-[30px] text-[25px] mobile_nav_link"
            >
              {href.startsWith("/") && !href.includes("#") ? (
                <Link
                  href={href}
                  className="hover:scale-110 inline-block transition-all duration-300 ease-in-out"
                  onClick={() => handleNavClick(href)}
                >
                  {label}
                </Link>
              ) : (
                <button
                  onClick={() => handleNavClick(href)}
                  className="hover:scale-110 inline-block transition-all duration-300 ease-in-out text-white"
                >
                  {label}
                </button>
              )}
            </li>
          ))}
        </ul>

        <div
          className="mobile_nav_link mt-5"
          onClick={() => handleNavClick("#services")}
        >
          <button className="flex sm:hidden group items-center border border-grey2 rounded-[40px] py-3 px-6 hover:border-white transition-all duration-200">
            More posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
