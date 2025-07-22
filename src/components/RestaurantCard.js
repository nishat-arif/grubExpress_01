
import { useParams } from "react-router-dom";
import {Shimmer} from "./Shimmer"

import { useRestaurantDetail } from "../../utils/useRestaurantDetail";
import {RestaurantCardItems} from "../components/RestaurantCardItems"
import { useState } from "react";

const RestaurantCard =() =>{

const [showItemIndex , setShowItemIndex] = useState(0)

const {resId} = useParams()
const restaurantDetail = useRestaurantDetail(resId);

const cardName = restaurantDetail.data?.cards[2]?.card?.card?.info?.name;

const categories = restaurantDetail.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return restaurantDetail.length==0? <Shimmer/> :(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{cardName}</h1> 

            {categories?.map((category, index) => (
                <RestaurantCardItems  key={category?.card?.card.title} data={category?.card?.card} 
                showItems={index === showItemIndex ? true :false}
                setShowItems={()=>{setShowItemIndex(index)}}
                currIndex = {index}
                showItemIndex ={showItemIndex}/>
      ))}

            
        </div>
    )
}

export default RestaurantCard;