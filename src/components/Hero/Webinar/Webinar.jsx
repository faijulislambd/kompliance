import Button from "../../../utils/Button/Button";
import "./Webinar.css";

const Webinar = () => {
  return (
    <div className="webinar-content relative">
      <h6 className="text-white text-4xl">
        Interactive Webinar <br />
        "Let's talk Payroll"{" "}
        <em className="ms-3">How to manage occasional payroll overloads</em>
      </h6>
      <p className="text-xl my-6 text-white">Presented by Komplice</p>
      <div>
        <Button
          text="Access the reply"
          bg="bg-[rgba(35,31,32,.5)]"
          className="inline-block text-white"
        ></Button>
      </div>
    </div>
  );
};

export default Webinar;
