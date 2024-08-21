import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ bg, text }) => {
  return (
    <button className="group flex relative py-[1em] px-[1.3em] overflow-hidden items-center justify-center bg-primary-color rounded-full ">
      <FaArrowRightLong className="transition-all absolute -left-6 text-xl group-hover:left-4" />
      <span className="text-xl transition-all group-hover:translate-x-8">
        {text}
      </span>
      <FaArrowRightLong className="ms-4 text-xl transition-all group-hover:translate-x-14" />
    </button>
  );
};

export default Button;
