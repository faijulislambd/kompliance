import Button from "../../utils/Button/Button";
import SectionHead from "../../utils/SectionHead/SectionHead";

const SubmissionSection = () => {
  return (
    <section className="content-wrapper py-40 ">
      <SectionHead
        title={
          <>
            Tell us about <span>your</span> project
          </>
        }
      />
      <p className="mt-5 text-3xl text-white leading-10">
        We want to get to know you, so that we can target the service best
        suited to your needs.
      </p>
      <div className="mt-5">
        <Button text="Fill the form"></Button>
      </div>
    </section>
  );
};

export default SubmissionSection;
