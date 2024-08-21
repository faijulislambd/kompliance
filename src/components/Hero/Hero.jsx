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
        <div className="w-1/2">
          <h1 className="text-8xl text-white font-bold">
            Dare.
            <br />
            Perform.
            <br />
            Evolve.
            <br />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
