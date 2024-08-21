import Button from "../../../utils/Button/Button";
import "./Card.css";

const Card = ({ className }) => {
  return (
    <div className={`card ${className}`}>
      <p className="uppercase bg-sky-600 p-[0.7rem] text-white inline-block mb-8">
        In-House
      </p>
      <div className="opacity-20">#1101</div>
      <h3>HRIS Advison at Komplice</h3>
      <div className="card-info">
        <div>
          <span>Status: </span>
          <p>Full Time Permanent</p>
        </div>
        <div>
          <span>Status: </span>
          <p>100% Télétravail | Remote</p>
        </div>
        <div>
          <span>Type: </span>
          <p>Remote</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-8">
        <p>October 10th, 2023</p>
        <div>
          <Button text="See Offer" className="text-black"></Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
