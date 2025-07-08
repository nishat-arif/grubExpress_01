import {API_URL,CORS_PROXY} from "../../utils/constants";

export const getRestaurantData = async () => {
    const data = await fetch(CORS_PROXY + API_URL);

    const json_data = await data.json();

    return await json_data;

}