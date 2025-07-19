import {ITEM_IMG_PREFIX, CORS_PROXY} from "../../utils/constants"

export const ItemsList = ({ items }) => {

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
              <button
              >
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