
import { useState , useEffect
 } from "react";
import {getRestaurantDetails} from "../src/services/getRestaurantData"
export const useRestaurantDetail = (id) => {

        const [restaurantDetail,setRestaurantDetail]= useState([])

        useEffect(()=>{

        getRestaurantDetails(id)
                            .then(res => {
                                // Adjust this path based on your API response structure
                                
                                const getRestaurantDetail = res;
                                setRestaurantDetail(getRestaurantDetail);
                            })
                            .catch(err => {
                                console.error("Failed to fetch restaurant data:", err);
                            });
                        },[]
)

console.log("restaurantDetail", restaurantDetail)

    return restaurantDetail;
}