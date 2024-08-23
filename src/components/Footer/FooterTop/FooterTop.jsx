import Button from "../../../utils/Button/Button";
import logo from "./../../../assets/footer/logo-k.png";
import "./FooterTop.css";

const FooterTop = () => {
  return (
    <div className="flex justify-between items-center py-16">
      <div className="newsletter-width">
        <div>
          <h5>Keep up to date with our latest Payroll and HRIS news</h5>
          <form className="mt-6 w-full flex">
            <div>
              <label className="text-white">Email</label>
              <input
                type="email"
                className="input-width bg-transparent border-b focus:outline-none text-white"
              />
            </div>
            <Button
              text="Sunscribe to newsletter"
              className="text-base"
            ></Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
