"use client";
import React, { useState } from "react";

const FloatingIcon = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="fixed bottom-[5%] right-[5%] z-10"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <img className="w-10 h-10 cursor-pointer" src="/img/tv.png" alt="tv" />

      {showTooltip && (
        <div className="absolute text-[13px] font-bold flex gap-2 items-center bottom-full  -left-[250px] px-6 pb-3 pt-4 rounded-[30px_30px_0px_30px] floating_gradient text-white text-sm transition-opacity duration-200 whitespace-nowrap z-10">
          <img src="/img/mouse.png" alt="mouse" /> Hi ! How can I help you?
        </div>
      )}
    </div>
  );
};

export default FloatingIcon;
