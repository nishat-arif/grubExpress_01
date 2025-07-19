
import { useParams } from "react-router-dom";
import {Shimmer} from "./Shimmer"

import { useRestaurantDetail } from "../../utils/useRestaurantDetail";

const RestaurantCard =() =>{

const {resId} = useParams()
const restaurantDetail = useRestaurantDetail(resId);

const resName = restaurantDetail.data?.cards[2]?.card?.card?.info?.name;
const resMenu = restaurantDetail.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    return restaurantDetail.length==0? <Shimmer/> :(
        <div>
      <h1>{resName}</h1>      
            <ul>
                {resMenu.map(menu => (
                   <li key={menu.card?.info?.id}>{menu.card?.info?.name}</li> 
                ))}
            </ul>

        </div>
    )
}

export default RestaurantCard;