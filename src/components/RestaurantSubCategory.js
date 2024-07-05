import RestaurantMenuListItem from "./RestaurantMenuListItem";

const RestaurantSubCategory = (props) => {
  const subCategory = props.subCategory;
  const expandSubCategoryParameter = props.expandSubCategoryParameter;
  const expandFunction = props.expandFunction;

  const showHideSubCategory = () => {
    expandFunction();
  };

  return (
    <div className='mx-7 my-4' key={subCategory.title}>
      <div
        className='px-2 py-2 flex justify-between  bg-gray-200 cursor-pointer'
        onClick={showHideSubCategory}>
        <p className='font-semibold text-lg '>{subCategory.title}</p>
        <p>⏬</p>
      </div>
      {expandSubCategoryParameter ? (
        <div>
          {subCategory.itemCards.map((categoryItem) => {
            return (
              <RestaurantMenuListItem
                key={categoryItem.card.info.id}
                cardItems={categoryItem}
              />
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default RestaurantSubCategory;
