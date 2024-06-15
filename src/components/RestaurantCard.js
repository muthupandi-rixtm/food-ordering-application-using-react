import RestaurantDetails from "./RestaurantDetails";
import RestaurantShimmerPage from "./RestaurantShimmerPage";
import { useState, useEffect } from "react";
// import * as RestaurantJSONdata from "../../assets/data/resObj.json";
import { RESTAURANT_LIST_URL } from "../../utils/Constants";

const RestaurantCard = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("use effect called");
    fetchRestaurantList();
  }, []);

  const fetchRestaurantList = async () => {
    const data = await fetch(RESTAURANT_LIST_URL);
    const restaurantJSON = await data.json();
    let restaurantData =
      restaurantJSON.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants;
    setRestaurantList(restaurantData);
    setFilteredRestaurantList(restaurantData);
  };

  return filteredRestaurantList.length ? (
    <div className="main-cont">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredOutput = restaurantList.filter(
              (rest) => rest.info.avgRating > 4.2
            );
            setFilteredRestaurantList(filteredOutput);
          }}
        >
          Top Rated Restaurant
        </button>

        <div className="search-cont">
          <input
            className="input-btn"
            type="text"
            id="searchInput"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />

          <button
            className="search-btn"
            onClick={() => {
              const filteredOutput = restaurantList.filter((rest) => {
                return rest.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurantList(filteredOutput);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="reset-btn"
          onClick={() => {
            setFilteredRestaurantList(restaurantList);
            setSearchText("");
          }}
        >
          Reset
        </button>
      </div>
      <div className="rest-list-cont">
        {filteredRestaurantList.map((rest) => {
          return <RestaurantDetails key={rest?.info?.id} restData={rest} />;
        })}
      </div>
    </div>
  ) : (
    // <div className="loader-cont">
    //   <h1>Loading...</h1>
    // </div>
    <RestaurantShimmerPage />
  );
};

export default RestaurantCard;
