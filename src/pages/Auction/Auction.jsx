import { useEffect, useState } from "react";
import useTimer from "../../hooks/useTimer";
import AuctionTimer from "../../components/AuctionTimer/AuctionTimer";
import Bidders from "../../components/Bidders/Bidders";
import { AUCTION_TIMER, AUCTION_DATA } from "../../constants/auction.constant";
import { calculateBidWinner } from "../../helpers/auction.helper";
import { WINNER_TEXT } from "../../helpers/auction.helper";
import "./auction.css";

const Auction = () => {
  const { timer, setterTimer } = useTimer();
  const [data, setData] = useState(AUCTION_DATA);

  const resetTimer = (time) => setterTimer(time);
  const setterData = (data) => setData(data);

  useEffect(() => {
    setterTimer(AUCTION_TIMER);
  }, []);

  useEffect(() => {}, [timer]);

  return (
    <div>
      <Bidders
        timer={timer}
        data={data}
        setterData={setterData}
        resetTimer={resetTimer}
      >
        <AuctionTimer timer={timer} duration={AUCTION_TIMER} />
        {timer === null && (
          <div className="winner-msg">
            {WINNER_TEXT(
              calculateBidWinner(data.items[0].bidders),
              data.items[0].rereserve_item
            )}
          </div>
        )}
      </Bidders>
    </div>
  );
};

export default Auction;
