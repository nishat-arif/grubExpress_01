
import { RestaurantCardsList } from "./RestaurantCardsList";
import {resList }from "../../utils/mockData";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { getRestaurantData } from "../services/getRestaurantData";
import { Shimmer } from "./Shimmer";
import { Search } from "./Search";
import { filterByDeliveryTime, filterByVegType } from "../services/filter";
import { Link } from "react-router-dom";
import OfferTag from "./OfferTag";
import { UserContext } from "../../utils/userContext";

const Body= () => {

    const [restaurantList, setRestaurantList]= useState([])
    const [filteredRestaurantList, setFilteredRestaurantList]= useState([])
    const RestaurantCardsListWithOffer = OfferTag(RestaurantCardsList)

    const {loggedInUser , setUserName} = useContext(UserContext);

    useEffect(()=>{
                getRestaurantData()
                    .then(res => {
                        // Adjust this path based on your API response structure
                        const resGrid = res.data.cards.filter((item, index)=>{
                                            if( item.card?.card?.gridElements?.infoWithStyle?.restaurants){
                                                return item;
                                            }
                        })
                        const fetchedRestaurants = resGrid[0].card.card.gridElements.infoWithStyle.restaurants;
                        setRestaurantList(fetchedRestaurants);
                        setFilteredRestaurantList(fetchedRestaurants);
                    })
                    .catch(err => {
                        console.error("Failed to fetch restaurant data:", err);
                    });

                //start: filtering by Veg 
                const getFilterResByVeg =(data)=>{
                setFilteredRestaurantList(data.detail.length==1? [data.detail[0]] : data.detail);}             
                //end: filtering by Veg 


                //start: filtering by Delivery time
                const getFilterResByDelTime =(data)=>{
                setFilteredRestaurantList(data.detail.length==1? [data.detail[0]] : data.detail);}
                //end: filtering by Delivery 




                window.addEventListener('filterByVegEvent', getFilterResByVeg);
                window.addEventListener('filterByDelTimeEvent', getFilterResByVeg);
                return () => {
                window.removeEventListener('filterByVegEvent', getFilterResByVeg);
                window.removeEventListener('filterByDelTimeEvent', getFilterResByDelTime);
                };

                

                
   
    }, [])


    const handleClickFilterByDelTime = ()=>{
        filterByDeliveryTime(restaurantList);
    }

    const handleClickFilterByVeg =()=>{
        filterByVegType(restaurantList)
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
                                    <button className="filter-btn" onClick={handleClickFilterByVeg}>Pure Veg</button>
                                    <button className="filter-btn">Rs.300 - Rs.600</button>
                                    <button className="filter-btn">Less than Rs.300</button>
                                    {/* <button className="filter-btn" onClick={filterReset}>No filter</button> */}
                                    <input defaultValue={loggedInUser} onChange={(e)=>setUserName(e?.target?.value)}></input>
                                </div>
                            </div>
                            
                            <div className="restaurant-cards">
                                {restaurantList?.length === 0 ? (
                                    <Shimmer />
                                ) : (
                                    filteredRestaurantList?.map((restaurant) => (
                                        <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id} >
                                         {(restaurant?.info?.aggregatedDiscountInfoV3?.header.includes("ITEMS")) ?
                                         (<RestaurantCardsListWithOffer resData={restaurant}/> ) :
                                         (<RestaurantCardsList resData={restaurant}/> )
                                         }   
                                        </Link>
                                        
                                    ))
                                )}
                            </div>                           
                        </div>
                    </div>
                    )

};

export default Body;