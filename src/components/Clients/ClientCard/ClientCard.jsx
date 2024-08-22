import "./ClientCard.css";

const ClientCard = ({ link = "#", img, className = "" }) => {
  return (
    <div className={`client-card ${className}`}>
      <a href={link} target="__blank" className="p-40">
        <img src={img} alt="Client Name" className="w-full" />
      </a>
    </div>
  );
};

export default ClientCard;
