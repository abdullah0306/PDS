import FaqsContainer from "@/components/common/FaqsContainer";
import GetAProject from "@/components/common/GetAProject";
import Career from "@/components/home/Career";
import Hero from "@/components/home/Hero";
import HowWeWork from "@/components/home/HowWeWork";
import LogosSlider from "@/components/home/LogosSlider";
import MeetClientSlider from "@/components/home/MeetClientSlider";
import NewsLetter from "@/components/home/NewsLetter";
import OurPastWork from "@/components/common/OurPastWork";
import ServiceWeOffer from "@/components/home/ServiceWeOffer";
import WhatOurClientSay from "@/components/home/WhatOurClientSay";
export const metadata = {
  title: "PDS",
  description: `Transforming businesses with cutting-edge technology and
strategic innovation. Elevate your brand with our comprehensive
digital services.`,
};

export default function Home() {
  return (
    <>
      <Hero />
      <MeetClientSlider />
      <ServiceWeOffer />
      <OurPastWork />
      <HowWeWork />
      <Career />
      <WhatOurClientSay />
      <FaqsContainer />
      <GetAProject />
      <LogosSlider />
      <NewsLetter />
    </>
  );
}
