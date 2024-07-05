import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenuList from "../custom-hooks/useRestaurantMenuList";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantOverview = () => {
  let { id } = useParams();
  const menuDetails = useRestaurantMenuList(id);
  // const restaurantMenuList = menuDetails.menuList;
  const restaurantName = menuDetails.restaurantName;
  const cardDetails = menuDetails.cardDetails;

  const [expandCategoryIndex, setExpandCategoryIndex] = useState(0);

  const categories = cardDetails.filter((category) => {
    return (
      category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  });

  // const loadIndex = (event) => {
  //   setExpandCategoryIndex(
  //     event.target.value ? Number(event.target.value) : null
  //   );
  // };

  return cardDetails.length ? (
    <div className='main-cont w-10/12 m-auto'>
      <h1 className='font-extrabold text-2xl my-5'>{restaurantName}</h1>
      {/* <input
        type='text'
        className='border border-black'
        onChange={loadIndex}
      /> */}
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category.card.card.title}
            category={category}
            expandHideCategoryParameter={
              expandCategoryIndex === index ? true : false
            }
            expandFunction={() =>
              setExpandCategoryIndex(
                expandCategoryIndex === index ? null : index
              )
            }
          />
        );
      })}
    </div>
  ) : (
    <h3>Loading...</h3>
  );
};

export default RestaurantOverview;
