import "./FooterBottom.css";

import p1 from "./../../../assets/footer/1.png";
import p2 from "./../../../assets/footer/2.png";
import p3 from "./../../../assets/footer/3.png";

const FooterBottom = () => {
  return (
    <div className="flex justify-between py-16">
      <div className="flex flex-col">
        <span className="text-white text-[1.2rem]">Members | Partners</span>
        <div className="footer-partner flex space-x-8">
          <a href="#">
            <img src={p1} alt="" />
          </a>
          <a href="#">
            <img src={p2} alt="" />
          </a>
          <a href="#">
            <img src={p3} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
