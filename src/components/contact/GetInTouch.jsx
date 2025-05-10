import React from "react";
import GetInTouchForm from "./GetInTouchForm";
import { ContactIcon } from "../common/Icons";

const GetInTouch = () => {
  return (
    <div className="pt-32 text-white ff_dm">
      <div className="container px-5 mx-auto 2xl:max-w-[1300px]">
        <div className="flex flex-col lg:flex-row gap-10 justify-between pt-16">
          <GetInTouchForm />
          <div className="lg:max-w-[382px] pt-3">
            <h5 className="text-lg font-bold pb-4">
              Want to reach us directly?
            </h5>
            <p className="text-lg font-normal xl:leading-[30px] pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
              pharetra elementum sit id sagittis non donec egestas.
            </p>
            <div className="flex gap-3 items-center mt-5">
              <ContactIcon />
              <a
                className="text-lg font-normal"
                href="mailto:contact@example.com"
              >
                contact@example.com
              </a>
            </div>
            <div className="flex gap-3 items-center mt-5">
              <ContactIcon />
              <a
                className="text-lg font-normal"
                href="mailto:support@example.com"
              >
                support@example.com
              </a>
            </div>
            <div className="flex gap-3 items-center mt-5">
              <ContactIcon />
              <a
                className="text-lg font-normal"
                href="mailto:press@example.com"
              >
                press@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
