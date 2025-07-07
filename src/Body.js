
import { RestaurantCard } from "./RestaurantCard";

const Body= () => {

    return (
    <div>
        <div className="search"></div>
        <div className="restaurant-list">
            <h1 className="restaurant-list-title">Restaurants in your area</h1>
            <div className="restaurant-cards">
                <RestaurantCard  resName="Pizza Hut" cuisine="Pizzas"/>
                <RestaurantCard resName="MacD" cuisine="Burgers"/>
              

            </div>
            
        </div>

    </div>
    )};

    export default Body;