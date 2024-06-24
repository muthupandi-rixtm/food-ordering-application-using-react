const RestaurantMenuListItem = (props) => {
  const { id, imageId, ratings, defaultPrice, name, price, description } =
    props.cardItems.card.info;
  return (
    <div className="mx-10 py-5 border-b-2">
      <p className="font-semibold text-lg">{name}</p>
      <p className="font-semibold text-lg">
        ₹{(price ? price : defaultPrice) / 100}
      </p>
      <div className="flex">
        <p className="mt-[3.8]">
          <img
            className="w-4 h-4"
            src={require("../../assets/images/rating.png")}
          />
        </p>
        <p>{ratings.aggregatedRating.rating}</p>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default RestaurantMenuListItem;
