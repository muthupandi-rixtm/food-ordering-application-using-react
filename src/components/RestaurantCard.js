import { useState, useEffect } from "react";
import RestaurantDetails from "./RestaurantDetails";
import RestaurantShimmerPage from "./RestaurantShimmerPage";
import useRestaurantCard from "../custom-hooks/useRestaurantCard";

const RestaurantCard = () => {
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const restaurantList = useRestaurantCard();

  useEffect(() => {
    setFilteredRestaurantList(restaurantList);
  }, [restaurantList]);

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
    <RestaurantShimmerPage />
  );
};

export default RestaurantCard;
