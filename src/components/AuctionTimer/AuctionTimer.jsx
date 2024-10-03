import "./auctionTimer.css";

const AuctionTimer = ({ timer, duration }) => {
  const timeWarningStyle = `${
    (timer < Math.ceil(duration / 3) ? "warning" : "primary") + "-time"
  }`;

  return (
    <div className={timeWarningStyle}>
      <span>{timer}</span>
    </div>
  );
};
export default AuctionTimer;
