import Button from "../../utils/Button/Button";
import gradientBG from "./../../assets/gradientBG.png";
import Webinar from "./Webinar/Webinar";
import bg from "./../../assets/web.png";

const Hero = () => {
  return (
    <section className="relative pb-32 content-wrapper">
      {/*Background Image*/}

      <div className="flex lg:flex-row flex-col items">
        <div className="lg:w-1/2 w-full pt-60">
          {/* Head 1 */}
          <h1 className="hero-main-title text-white font-bold ">
            Dare.
            <br />
            Perform.
            <br />
            Evolve.
            <br />
          </h1>
          {/* Sub Text */}
          <p className="mt-6 text-[1.9rem] leading-10 text-white">
            We are Komplice, your Payroll and HRIS Integrated Service Center. We
            dare to offer a personalized approach to the application of Payroll
            and HRIS solutions, thus becoming partner of our clients'
            performance and evolution.
          </p>
          {/** Button */}
          <Button text="Discover who we are" className="mt-8"></Button>
        </div>
        <div className="lg:w-1/2 w-full relative">
          <img
            src={bg}
            className="absolute object-cover pointer-events-none -z-[1] h-full w-full opacity-45 rounded-xl overflow-hidden blur-[1.2px]"
          />
          <Webinar></Webinar>
        </div>
      </div>
    </section>
  );
};

export default Hero;
