import gradientBG from "./../../assets/gradientBG.png";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-32 content-wrapper">
      {/*Background Image*/}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={gradientBG}
      />
      <div className="flex">
        <div className="w-2/3">
          {/* Head 1 */}
          <h1 className="text-8xl text-white font-bold">
            Dare.
            <br />
            Perform.
            <br />
            Evolve.
            <br />
          </h1>
          {/* Sub Text */}
          <p className="my-4 text-4xl text-white">
            We are Komplice, your Payroll and HRIS Integrated Service Center. We
            dare to offer a personalized approach to the application of Payroll
            and HRIS solutions, thus becoming partner of our clients'
            performance and evolution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
