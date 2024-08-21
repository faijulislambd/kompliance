import "./blob.css";
import gradient1 from "./../../assets/gradient-general.png";
import gradient2 from "./../../assets/gradient-blue.png";
import gradient3 from "./../../assets/gradient-orange.png";

const Blob = () => {
  return (
    <div className="gradient-blob gradient-blob--has-loop-animation top-page-gradient-blob">
      <div className="gradient-blob__container">
        <div className="gradient-blob__inner">
          <img
            className="gradient-blob__image gradient-blob__image--default "
            alt=""
            src={gradient1}
          />
          <img
            className="gradient-blob__image gradient-blob__image--blue "
            alt=""
            src={gradient2}
          />
          <img
            className="gradient-blob__image gradient-blob__image--orange "
            alt=""
            src={gradient3}
          />
        </div>
      </div>
    </div>
  );
};

export default Blob;
