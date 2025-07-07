
import { RestaurantCard } from "./RestaurantCard";

const Body= () => {

    return (
    <div>
        <div className="search"></div>
        <div className="restaurant-list">
            <h1 className="restaurant-list-title">Restaurants in your area</h1>

            <div className="restaurant-cards">
                <RestaurantCard /><RestaurantCard />
                <RestaurantCard /><RestaurantCard />
                <RestaurantCard /><RestaurantCard />
                <RestaurantCard /><RestaurantCard />
            </div>
            
        </div>

    </div>
    )};

    export default Body;