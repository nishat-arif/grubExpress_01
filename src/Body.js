
import { RestaurantCard } from "./RestaurantCard";
import {resList }from "../utils/mockData";
import React from "react";

const Body= () => {

    return (
    <div>
        <div className="search"></div>
        <div className="restaurant-list">
            <h1 className="restaurant-list-title">Restaurants in your area</h1>
            <div className="restaurant-cards">
                <RestaurantCard  resData={resList.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0]}/>
                <RestaurantCard  resData={resList.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[1]}/>
              
              <RestaurantCard  resData={resList.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[2]}/>
              
              <RestaurantCard  resData={resList.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[3]}/>
              
              

            </div>
            
        </div>

    </div>
    )};

    export default Body;