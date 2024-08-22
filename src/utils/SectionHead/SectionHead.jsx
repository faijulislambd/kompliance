import "./SectionHead.css";

const SectionHead = ({ subTitle, title }) => {
  return (
    <div>
      {subTitle && <p className="sub-title">{subTitle}</p>}
      <h2 className="section-title">{title}</h2>
    </div>
  );
};

export default SectionHead;
