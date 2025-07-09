  
    export const filterByDeliveryTime =(data) =>{

        const filteredByTimeList = data.filter((restaurant) => {
            return restaurant.info.sla.deliveryTime < 30;
        });

        const myCustomEvent = new CustomEvent('filterByDelTimeEvent', {
        detail: filteredByTimeList
        });

        window.dispatchEvent(myCustomEvent);

    }

    export const filterByVegType =(data) =>{

        const filteredByVeg = data.filter((restaurant) => {
            return restaurant.info?.veg  == true
        });

        const myCustomEvent = new CustomEvent('filterByVegEvent', {
        detail: filteredByVeg
        });

        window.dispatchEvent(myCustomEvent);

    }

