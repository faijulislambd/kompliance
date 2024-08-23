import Button from "../../../utils/Button/Button";
import logo from "./../../../assets/footer/logo-k.png";
import "./FooterTop.css";
import { FaLinkedin } from "react-icons/fa";

const FooterTop = () => {
  return (
    <div className="flex justify-between items-center py-16">
      <div className="newsletter-width">
        <div>
          <h5>Keep up to date with our latest Payroll and HRIS news</h5>
          <form className="mt-6 w-full flex mt-16">
            <div className="relative">
              <label className="text-white absolute text-2xl -top-2 left-0">
                Email*
              </label>
              <input
                type="email"
                className="input-width bg-transparent border-b focus:outline-none text-white min-h-[54px] block mt-[4px]"
              />
            </div>
            <Button
              text="Sunscribe to newsletter"
              className="text-base"
            ></Button>
          </form>
        </div>
      </div>
      <div className="flex logo-k items-center space-x-16">
        <div className="flex flex-col space-y-3 text-white text-right items-end">
          <div>
            <a
              className="text-3xl transition-colors hover:text-[#a7e6d7]"
              href="#"
            >
              info@komplice.com
            </a>
          </div>
          <div>
            <a
              className="text-3xl transition-colors hover:text-[#a7e6d7]"
              href="#"
            >
              1 (888) 850-3303
            </a>
          </div>
          <div>
            <a
              className="text-2xl flex flex-end transition-colors hover:text-[#a7e6d7]"
              href="#"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <img src={logo} width={256} height={271} />
      </div>
    </div>
  );
};

export default FooterTop;
