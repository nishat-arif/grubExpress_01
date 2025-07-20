import { useState } from "react";
import { ItemsList } from "./ItemsList";

export const RestaurantCardItems = (props) => {

    //const [showItem1 , setShowItem] = useState(false)

    const {data ,showItems , setShowItems, currIndex}  = props;


    const handleClick=()=>{
     //setShowItem(!showItem)
        setShowItems();
    }

    return (
        <div>
        <div className="item-heading"
        onClick={handleClick} 
        >
            <span >
            {data.title} ({data.itemCards.length})
            </span>
            <span>⬇️</span>
        </div>
        <div>
             {showItems && <ItemsList items={data.itemCards}/>}
        </div>
        </div>
    )

}

