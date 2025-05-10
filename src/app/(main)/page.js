import FaqsContainer from "../../components/common/FaqsContainer.jsx";
import GetAProject from "../../components/common/GetAProject.jsx";
import Career from "../../components/home/Career.jsx";
import Hero from "../../components/home/Hero.jsx";
import HowWeWork from "../../components/home/HowWeWork.jsx";
import LogosSlider from "../../components/home/LogosSlider.jsx";
import MeetClientSlider from "../../components/home/MeetClientSlider.jsx";
import NewsLetter from "../../components/home/NewsLetter.jsx";
import OurPastWork from "../../components/common/OurPastWork.jsx";
import ServiceWeOffer from "../../components/home/ServiceWeOffer.jsx";
import WhatOurClientSay from "../../components/home/WhatOurClientSay.jsx";
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
