import {API_URL,CORS_PROXY,RESTAURANT_URL_PREFIX} from "../../utils/constants";

export const getRestaurantData = async () => {
    const data = await fetch(CORS_PROXY + API_URL);

    const json_data = await data.json();
    return  json_data;

}

 export const getRestaurantDetails = async (id) => {
        
        
        const data = await fetch(CORS_PROXY + RESTAURANT_URL_PREFIX +id);
    
        const json_data = await data.json();
        console.log("/////",json_data)
        //json_data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
        return  json_data;
    
    }