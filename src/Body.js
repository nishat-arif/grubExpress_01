
import { RestaurantCard } from "./RestaurantCard";
import {resList }from "../utils/mockData";
import React from "react";

const Body= () => {

    const restaurantList = resList.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    //console.log(restaurantList);

    return (
    <div>
        <div className="search"></div>
        <div className="restaurant-list">
            <h1 className="restaurant-list-title">Restaurants in your area</h1>
            <div className="restaurant-cards">

                {restaurantList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}


            </div>
            
        </div>

    </div>
    )};

    export default Body;