import DigitalSolutions from "../../../components/about/DigitalSolutions.jsx";
import DigitalSolutionSlider from "../../../components/about/DigitalSolutionSlider.jsx";
import FinanceFlow from "../../../components/about/FinanceFlow.jsx";
import Investors from "../../../components/about/Investors.jsx";
import OurStory from "../../../components/about/OurStory.jsx";
import OurTeam from "../../../components/about/OurTeam.jsx";
import Timeline from "../../../components/about/Timeline.jsx";
import GetAProject from "../../../components/common/GetAProject.jsx";
import OurPastWork from "../../../components/common/OurPastWork.jsx";
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
