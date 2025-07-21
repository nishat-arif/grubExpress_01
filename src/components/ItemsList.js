import { useDispatch } from "react-redux";
import {ITEM_IMG_PREFIX, CORS_PROXY} from "../../utils/constants"
import { addItem } from "../../utils/cartSlice";

export const ItemsList = ({ items }) => {

  const dispatch = useDispatch()

  const handleAddItem=(item)=>{

    dispatch(addItem(item))

  }

   return (
    <div className="itemList-container">
      {items.map((item) => (
        <div
          key={item.card.info.id}
        className="item-container">
          <div >
            <div className="item-name">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p >{item.card.info.description}</p>
          </div>
          <div >
            <div>
              <button style={{"cursor":"pointer"}}
              onClick={()=>handleAddItem(item)}>
                Add +
              </button>
            </div>
            <img src={ITEM_IMG_PREFIX + item.card.info.imageId} className="img-width"/>
          </div>
        </div>
      ))}
    </div>
  );
}