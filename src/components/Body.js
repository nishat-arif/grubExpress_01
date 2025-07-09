
import { RestaurantCard } from "./RestaurantCard";
import {resList }from "../../utils/mockData";
import { useEffect } from "react";
import { useState } from "react";
import { getRestaurantData } from "../services/getRestaurantData";
import { Shimmer } from "./Shimmer";
import { Search } from "./Search";
import { filterByDeliveryTime } from "../services/filter";

const Body= () => {

    const [restaurantList, setRestaurantList]= useState([])
    const [filteredRestaurantList, setFilteredRestaurantList]= useState([])

    useEffect(()=>{
        getRestaurantData()
                .then(res => {
                    // Adjust this path based on your API response structure
                    const fetchedRestaurants = res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
                    setRestaurantList(fetchedRestaurants);
                    setFilteredRestaurantList(fetchedRestaurants);
                })
                .catch(err => {
                    console.error("Failed to fetch restaurant data:", err);
                });


                //filtering by Delivery time
                const getFilterResByDelTime =(data)=>{
                setFilteredRestaurantList(data.detail.length==1? [data.detail[0]] : data.detail);}

                window.addEventListener('filterByDelTimeEvent', getFilterResByDelTime);

                return () => {
                window.removeEventListener('filterByDelTimeEvent', getFilterResByDelTime);
                };
   
    }, [])


    const handleClickFilterByDelTime = ()=>{
        filterByDeliveryTime(restaurantList);
    }

    


    const filterByRating =()=>{
        const filteredList = restaurantList.filter((restaurant) => {
            return restaurant.info.avgRating >= 4.3;
        });
        setFilteredRestaurantList(filteredList);
    }

    const filterReset =()=>{
        setFilteredRestaurantList(restaurantList);
    }


    const handleSearchData =(data)=>{
        const filteredSearch = restaurantList.filter(res=>{
            return res.info.name.toLowerCase().includes(data.toLowerCase())
        })
        setFilteredRestaurantList(filteredSearch);

    }


                return (<div> 
                        <div className="search"></div>
                        <div className="restaurant-list">
                            <div className="restaurant-list-header">
                                <Search onSearchTextSend ={handleSearchData}/>
                                <div className="restaurants-filters">
                                    <button className="filter-btn" onClick={filterByRating}>Ratings 4.3+</button>
                                    <button className="filter-btn" onClick={handleClickFilterByDelTime}>Fast Delivery</button>  
                                    <button className="filter-btn">Pure Veg</button>
                                    <button className="filter-btn">Rs.300 - Rs.600</button>
                                    <button className="filter-btn">Less than Rs.300</button>
                                    <button className="filter-btn" onClick={filterReset}>No filter</button>
                                </div>
                            </div>
                            
                            <div className="restaurant-cards">
                                {restaurantList.length === 0 ? (
                                    <Shimmer />
                                ) : (
                                    filteredRestaurantList.map((restaurant) => (
                                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                                    ))
                                )}
                            </div>                           
                        </div>
                    </div>
                    )

};

export default Body;