import { useState, useEffect } from "react";

import { RESTAURANT_LIST_URL } from "../../utils/Constants";

const useRestaurantCard = () => {
  useEffect(() => {
    fetchRestaurantList();
  }, []);

  const [restaurantList, setRestaurantList] = useState([]);

  const fetchRestaurantList = async () => {
    const data = await fetch(RESTAURANT_LIST_URL);
    const restaurantJSON = await data.json();
    let restaurantData =
      restaurantJSON.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants;
    setRestaurantList(restaurantData);
  };

  return restaurantList;
};

export default useRestaurantCard;
