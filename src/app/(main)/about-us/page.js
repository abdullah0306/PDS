import DigitalSolutions from "@/components/about/DigitalSolutions";
import DigitalSolutionSlider from "@/components/about/DigitalSolutionSlider";
import FinanceFlow from "@/components/about/FinanceFlow";
import Investors from "@/components/about/Investors";
import OurStory from "@/components/about/OurStory";
import OurTeam from "@/components/about/OurTeam";
import Timeline from "@/components/about/Timeline";
import GetAProject from "@/components/common/GetAProject";
import OurPastWork from "@/components/common/OurPastWork";
export const metadata = {
  title: "PDS || About",
  description: `Transforming businesses with cutting-edge technology and
strategic innovation. Elevate your brand with our comprehensive
digital services.`,
};
const page = () => {
  return (
    <div>
      <div className=" w-full md:pt-[177px] sm:pt-[150px] pt-[140px] z-10 relative filter-[10px]">
        <DigitalSolutions />
        <FinanceFlow />
      </div>{" "}
      <div className=" relative w-full pt-12">
        <OurStory />
        <Timeline />
        <OurTeam />{" "}
      </div>
      <Investors />
      <OurPastWork />
      <DigitalSolutionSlider />
      <GetAProject />
    </div>
  );
};

export default page;
