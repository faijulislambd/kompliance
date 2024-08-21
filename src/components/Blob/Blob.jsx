import "./blob.css";

const Blob = () => {
  return (
    <div className="gradient-blob gradient-blob--has-loop-animation top-page-gradient-blob">
      <div className="gradient-blob__container">
        <div className="gradient-blob__inner">
          <img
            className="gradient-blob__image gradient-blob__image--default "
            alt=""
            src="https://komplice.com/wp-content/themes/fatfish/img/gradient-general.png"
          />
          <img
            className="gradient-blob__image gradient-blob__image--blue "
            alt=""
            src="https://komplice.com/wp-content/themes/fatfish/img/gradient-blue.png"
          />
          <img
            className="gradient-blob__image gradient-blob__image--orange "
            alt=""
            src="https://komplice.com/wp-content/themes/fatfish/img/gradient-orange.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Blob;
