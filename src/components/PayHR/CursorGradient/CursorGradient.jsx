const CursorGradient = ({ src, id }) => {
  return (
    <div className="expertise-showcase__magnet-gradient ff-magnet ff-magnet--active">
      <div className="expertise-showcase__magnet-gradient-inner">
        <div className="expertise-showcase__magnet-gradient-element">
          <img src={src} />
        </div>
      </div>
    </div>
  );
};

export default CursorGradient;
