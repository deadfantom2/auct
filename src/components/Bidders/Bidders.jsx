import { useState, useCallback } from "react";
import { findBidderByName } from "../../helpers/auction.helper";
import "./bidders.css";

const Bidders = ({ timer, data, setterData, resetTimer, children }) => {
  const [currentBidder, setCurrentBidder] = useState({});

  const handleBidChange = (e) => {
    const { name, value } = e.target;
    setCurrentBidder({ [name]: value });
  };

  const handlePutBid = useCallback(
    (nameBidder) => {
      if (timer !== 0) {
        setterData((prev) => {
          return {
            ...prev,
            items: [
              {
                ...prev.items[0],
                bidders: [
                  ...prev.items[0].bidders,
                  {
                    bidderId: findBidderByName(nameBidder).bidderId,
                    bid: Object.values(currentBidder)[0],
                  },
                ],
              },
            ],
          };
        });
        resetTimer(10);
      } else {
      }
    },
    [currentBidder]
  );

  return (
    <div className="bidders-container">
      <div className="bidders-border">
        <h1>All bidders</h1>
        <div>{children}</div>
      </div>
      <div className="bidders-container--users">
        {data.bidders.map((bidder) => (
          <div key={bidder.bidderId}>
            <h3>Bidder: {bidder.name}</h3>
            <input
              type="number"
              placeholder={`Put your bid ${bidder.name}`}
              name={bidder.name}
              value={currentBidder[bidder.name] || ""}
              onChange={handleBidChange}
            />
            <button onClick={() => handlePutBid(bidder.name)}>
              Submit Bid
            </button>

            {/* <HistoricBidders bidders={getBidsByName(data.items, bidder.name)} /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bidders;
