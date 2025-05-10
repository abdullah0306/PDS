import FaqsContainer from "@/components/common/FaqsContainer";
import GetInTouch from "@/components/contact/GetInTouch";
export const metadata = {
  title: "PDS || Contact us",
  description: `Transforming businesses with cutting-edge technology and
strategic innovation. Elevate your brand with our comprehensive
digital services.`,
};
const page = () => {
  return (
    <div>
      <GetInTouch />
      <div className="py-20 mb-10">
        <FaqsContainer />
      </div>
    </div>
  );
};

export default page;
