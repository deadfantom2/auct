import { BIDDERS, NO_BIDDER_MSG } from "../constants/auction.constant";

export const getHighestBid = (bids) => {
  let highestBid = { bidderId: "", bid: 0 };
  highestBid = bids?.reduce(
    (highest, current) =>
      Number(current.bid) > Number(highest.bid) ? current : highest,
    { bidderId: "", bid: 0 }
  );

  return {
    bidderId: highestBid.bidderId,
    bid: Number(highestBid.bid),
  };
};

export const calculateBidWinner = (bidders) => {
  const highestBid = getHighestBid(bidders);
  const highestBidderName = BIDDERS.filter(
    (i) => i.bidderId === highestBid.bidderId
  )[0]?.name;
  return { bid: getHighestBid(bidders).bid, bidderName: highestBidderName };
};

export const getBidsByName = (bidders, name) => {
  const bidder = bidders.find((bidder) => bidder.name === name);
  return bidder ? bidder.bids : [];
};

export const findBidderByName = (name) =>
  BIDDERS.find((bidder) => bidder.name === name);

export const WINNER_TEXT = (bidder, reserve) => {
  if (bidder?.bidderName === undefined) {
    return NO_BIDDER_MSG;
  } else {
    if (bidder.bid >= reserve) {
      return `The buyer ${bidder.bidderName} wins the auction at the price of ${bidder.bid} euros.`;
    } else {
      return "Unfothently the bid not attempt his reserve price!";
    }
  }
};

export const haveMsgReserveItem = (rereserve_item) =>
  rereserve_item &&
  `You make know that a reserve price for this lot is ${rereserve_item}`;
