import g1 from "./../../../assets/gradient-general.png";
import blue from "./../../../assets/gradient-blue.png";
import orange from "./../../../assets/gradient-orange.png";

const FooterBlob = () => {
  return (
    <div
      className="gradient-blob gradient-blob--has-loop-animation "
      aria-hidden="true"
    >
      <div className="gradient-blob__container">
        <div className="gradient-blob__inner">
          <img
            className="gradient-blob__image gradient-blob__image--default "
            data-src={g1}
            alt=""
            src={g1}
          />
          <img
            className="gradient-blob__image gradient-blob__image--blue "
            data-src={blue}
            alt=""
            src={blue}
          />
          <img
            className="gradient-blob__image gradient-blob__image--orange "
            data-src={orange}
            alt=""
            src={orange}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterBlob;
