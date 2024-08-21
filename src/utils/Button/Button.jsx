const Button = ({ bg = "bg-primary-color", text, className }) => {
  return (
    <button className={`${bg} primary-button ${className}`}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
