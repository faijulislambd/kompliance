import Button from "../../../utils/Button/Button";
import "./Card.css";

const Card = ({ className, badge, href = "#" }) => {
  return (
    <a
      className={`card ${className} transition-all hover:bg-[#3f3e5f] pointer-events-auto`}
      href={href}
    >
      {badge && (
        <p className="uppercase bg-sky-600 p-[0.7rem] text-white inline-block mb-8">
          {badge}
        </p>
      )}
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
    </a>
  );
};

export default Card;
