export const AUCTION_TIMER = 10;
export const DELAY_AUCTION_WARNING = 5;

export const MOCK_ITEMS = [
  {
    id: 1,
    title: "BMW X5",
    start_price: 1,
    rereserve_item: 500, // 0 or (rereserve_item > 0)
    bidders: [], // { bidderId bid }
  },
];

export const BIDDERS = [
  { bidderId: 1, name: "A" },
  { bidderId: 2, name: "B" },
  { bidderId: 3, name: "C" },
  { bidderId: 4, name: "D" },
  { bidderId: 5, name: "E" },
];

export const AUCTION_DATA = {
  items: MOCK_ITEMS,
  bidders: BIDDERS,
};

export const NO_BIDDER_MSG = "No one bid in your auction!";
