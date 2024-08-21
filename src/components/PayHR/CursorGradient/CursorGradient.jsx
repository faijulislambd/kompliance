const CursorGradient = ({ src, id, onMouseMove }) => {
  return (
    <div
      className="expertise-showcase__magnet-gradient ff-magnet ff-magnet--active"
      id={id}
    >
      <div className="expertise-showcase__magnet-gradient-inner">
        <div className="expertise-showcase__magnet-gradient-element">
          <img src={src} />
        </div>
      </div>
    </div>
  );
};

export default CursorGradient;
