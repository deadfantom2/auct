import { haveMsgReserveItem } from "../../helpers/auction.helper";
import "./auctionItem.css";

const AuctionItem = ({ item, onChange }) => {
  return (
    <div className="auction-item">
      <input
        type="radio"
        name="auctionItem"
        value={item.id}
        id={item.title}
        onChange={onChange}
      />
      <label htmlFor={item.title}>{item.title}</label>
      <p>{haveMsgReserveItem(item.rereserve_item)}</p>
    </div>
  );
};

export default AuctionItem;
