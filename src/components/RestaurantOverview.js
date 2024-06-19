import { useParams } from "react-router-dom";
import OverviewShimmer from "./OverviewShimmer";
import { RESTAURANT_MENU_URL } from "../../utils/Constants";
import useRestaurantMenuCard from "../../src/custom-hooks/useRestaurantMenuCard";

const RestaurantOverview = () => {
  let { id } = useParams();
  const menuDetails = useRestaurantMenuCard(id);
  const restaurantMenuList = menuDetails.menuList;
  const restaurantName = menuDetails.restaurantName;

  return restaurantMenuList.length ? (
    <div className="main-cont">
      <h1>{restaurantName}</h1>
      {restaurantMenuList.map((restMenu) => {
        const price = restMenu.card.info.price
          ? restMenu.card.info.price
          : restMenu.card.info.defaultPrice;
        const rating = restMenu.card.info.ratings.aggregatedRating.rating
          ? restMenu.card.info.ratings.aggregatedRating.rating
          : "NO Rating";
        const ratingCountV2 = restMenu.card.info.ratings.aggregatedRating
          .ratingCountV2
          ? restMenu.card.info.ratings.aggregatedRating.ratingCountV2
          : "NO Rating";
        return (
          <div className="rest-menu-list-cont">
            <div>
              <img
                src={`${RESTAURANT_MENU_URL}${restMenu.card.info.imageId}`}
                width="100"
                height="100"
              />
            </div>
            <h3>{restMenu.card.info.name}</h3>
            <div>{`$ ${price / 100}`}</div>
            <div>{`${rating} (${ratingCountV2})`}</div>
            <div>{restMenu.card.info.description}</div>
          </div>
        );
      })}
    </div>
  ) : (
    <OverviewShimmer />
  );
};

export default RestaurantOverview;
