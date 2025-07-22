import { useState } from "react";
import { ItemsList } from "./ItemsList";

export const RestaurantCardItems = (props) => {

    //const [showItem1 , setShowItem] = useState(false)

    const {data ,showItems , setShowItems}  = props;


    const handleClick=()=>{
     //setShowItem(!showItem)
        setShowItems();
    }

    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer"
        onClick={handleClick} 
        >
              <span className="font-bold text-lg">
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

