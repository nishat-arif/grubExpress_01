 export const RestaurantCard = () => {

    const resNameStyle ={margin: "5px"}

    return (
        <div className="restaurant-card">
            <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/2fae81f6-2b42-40db-9bf4-69d86c79137d_631826.JPG"
                alt="Restaurant Image"
                className="restaurant-image"
            />
            <div className="restaurant-details">
                <h4 style={resNameStyle}>Pizza Hut Foods</h4>
                <p className="restaurant-details-font">4.4 stars 23 minutes</p>
                <p className="restaurant-details-font">Pizzas</p>              
                <p className="restaurant-details-font"> Hinjewadi</p>
            </div>
            
        </div>
    );
};