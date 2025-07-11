
import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getRestaurantDetails} from "../services/getRestaurantData"
import {Shimmer} from "./Shimmer"

const RestaurantCard =() =>{

    const params = useParams()
    const {resId} = params;

    const [restaurantDetail,setRestaurantDetail]= useState([])

    useEffect(()=>{

        getRestaurantDetails(resId)
                            .then(res => {
                                // Adjust this path based on your API response structure
                                
                                const getRestaurantDetail = res;
                                console.log("res",getRestaurantDetail.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories)
                                setRestaurantDetail(getRestaurantDetail);
                            })
                            .catch(err => {
                                console.error("Failed to fetch restaurant data:", err);
                            });
                        },[]
)
    return restaurantDetail.length==0? <Shimmer/> :(
        <div>
            <h1>{}</h1>
        </div>
    )
}

export default RestaurantCard;