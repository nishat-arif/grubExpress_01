
import {useState } from "react";
import { useParams } from "react-router-dom";
import {CORS_PROXY, RESTAURANT_URL_PREFIX} from "../../utils/constants";

const RestaurantCard =() =>{

    const params = useParams()
    const {resId} = params;

    const [restaurantDetail,setRestaurantDetail]= useState([])

    const getRestaurantDetails = async () => {
        const data = await fetch(CORS_PROXY + RESTAURANT_URL_PREFIX +resId);
    
        const json_data = await data.json();
        console.log("/////",json_data)
        //json_data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
        return  json_data;
    
    }

    // useEffect=()=>{

    //     getRestaurantDetails(resId)
    //                         .then(res => {
    //                             // Adjust this path based on your API response structure
    //                             console.log("res",res)
    //                             const getRestaurantDetail = res;
    //                             setRestaurantDetail(getRestaurantDetail);
    //                         })
    //                         .catch(err => {
    //                             console.error("Failed to fetch restaurant data:", err);
    //                         });
    //     console.log("getResDetails", getRestaurantDetail) ,[]
    // }
    return (
        <div>
            <h1 onClick={getRestaurantDetails}>Res</h1>
        </div>
    )
}

export default RestaurantCard;