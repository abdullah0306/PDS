"use client";
import { RightArrow } from "../common/Icons";

const Career = () => {
  return (
    <div className="relative career_section">
      <div className="h-[600px] w-[600px] 2xl:w-[700px] 2xl:h-[700px] absolute -left-20 lg:top-20 top-0 2xl:-bottom-40 bg-darkBlue rounded-full blur-[80px] z-[-1]"></div>

      {/* career image */}
      <img
        className="absolute pointer-events-none top-0 xl:top-[-100px] 2xl:left-[15%] left-[7%] w-full xl:max-w-[600px] max-w-[500px]"
        src="/img/careerimg.webp"
        alt="img"
      />
      <div className="container mx-auto sm:py-16 px-5 py-10 career_container 2xl:max-w-[1300px]">
        <div className="xl:flex">
          <div className="xl:w-1/3">
            <img
              className="xl:top-[-100px] left-0  w-full sm:max-w-[400px] max-w-[270px] sm:ps-20 ps-10"
              src="/img/suitcase.gif"
              alt="suitcase"
            />
          </div>
          <div className="xl:w-2/3 xl:ps-20 pt-5 am:pt-0">
            <div className="flex items-center">
              <div className="career_heading_div hidden xl:block"></div>
              <div className="flex sm:gap-4 gap-2 items-center">
                <img
                  className="lg:w-[78px] w-[50px] lg:h-[78px] h-[50px]"
                  src="/img/main.gif"
                  alt="qube"
                />

                <h2
                  className=" xl:text-8xl sm:text-5xl text-[29px] sm:leading-[110%]
                leading-[120%] font-bold md:pe-10 sm:pe-7 pe-5 career_heading ff_inter grey_gradient"
                >
                  Careers
                </h2>
              </div>
              <span className="inline-block bg-multicolor w-[2px] sm:h-[40px] h-[30px]"></span>
              <p className="md:ps-9 sm:ps-6 ps-4 md:text-[25px] sm:text-[22px] text-[20px] font-normal">
                Join our team
              </p>
            </div>
            <p className="py-7 text-white opacity-60 text-[14px] sm:text-[16px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p className="pb-4 text-white opacity-60 text-[14px] sm:text-[16px]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non
            </p>
            <button className="sm:flex hidden group items-center border-grey2 border-[1px] rounded-[40px] md:py-4 py-3 mt-4  md:px-7 px-6 hover:border-[#777777] transition-all duration-200 ease-in-out">
              See open positions
              <span className="ps-4 group-hover:translate-x-[5px] inline-block transition-all duration-200 ease-in-out">
                <RightArrow />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
