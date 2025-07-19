
import { useParams } from "react-router-dom";
import {Shimmer} from "./Shimmer"

import { useRestaurantDetail } from "../../utils/useRestaurantDetail";
import {RestaurantCardItems} from "../components/RestaurantCardItems"

const RestaurantCard =() =>{

const {resId} = useParams()
const restaurantDetail = useRestaurantDetail(resId);

const cardName = restaurantDetail.data?.cards[2]?.card?.card?.info?.name;

const categories = restaurantDetail.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log("catgories" , categories)

    return restaurantDetail.length==0? <Shimmer/> :(
        <div>
            <h1>{cardName}</h1> 

            {categories?.map((category, index) => (
                <RestaurantCardItems  key={category?.card?.card.title} data={category?.card?.card}/>
      ))}

            
        </div>
    )
}

export default RestaurantCard;