import { useState } from "react";
import { ItemsList } from "./ItemsList";

export const RestaurantCardItems = (props) => {

    const [showItem , setShowItem] = useState(false)

    const {data}  = props;

    const handleClick=()=>{
     setShowItem(!showItem)

    }

    return (
        <div>
        <div className="item-heading"
        
        >
            <span onClick={handleClick} >
            {data.title} ({data.itemCards.length})
            </span>
            <span>⬇️</span>
        </div>
        <div>
             {showItem && <ItemsList items={data.itemCards}/>}
        </div>
        </div>
    )

}

