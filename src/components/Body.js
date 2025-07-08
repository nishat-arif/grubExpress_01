
import { RestaurantCard } from "./RestaurantCard";
import {resList }from "../../utils/mockData";
import React from "react";
import { useState } from "react";

const Body= () => {

    const restaurantData= resList.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

    const [restaurantList, setRestaurantList]= useState(restaurantData)


    const filterByRating =()=>{
        // Filter restaurants with avgRating >= 4.3
        const filteredList = restaurantList.filter((restaurant) => {
            return restaurant.info.avgRating >= 4.3;
        });

        // Update the state with the filtered list
        setRestaurantList(filteredList);
    }

    const filterReset =()=>{
        setRestaurantList(restaurantData);
    }

    return (
    <div>
        <div className="search"></div>
        <div className="restaurant-list">
            <div className="restaurant-list-header">
                <h1 className="restaurant-list-title">Restaurants with online food delivery in your area</h1>
                <div className="restaurants-filters">
                    <button className="filter-btn" onClick={filterByRating}>Ratings 4.3+</button>
                    <button className="filter-btn">Fast Delivery</button>  
                    <button className="filter-btn">Pure Veg</button>
                    <button className="filter-btn">Rs.300 - Rs.600</button>
                    <button className="filter-btn">Less than Rs.300</button>
                    <button className="filter-btn" onClick={filterReset}>No filter</button>
                </div>
            </div>
            
            <div className="restaurant-cards">

                {restaurantList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}


            </div>
            
        </div>

    </div>
    )};

    export default Body;