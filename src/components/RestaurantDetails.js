import { RESTAURANT_LIST_IMAGE_URL } from "../../utils/Constants";
import { Link } from "react-router-dom";

const RestaurantDetails = (props) => {
  const {
    name,
    id,
    avgRating,
    sla,
    cuisines,
    locality,
    areaName,
    cloudinaryImageId,
  } = props.restData.info;
  return (
    <div className="res-container">
      <div className="img-cont">
        <img
          className="img"
          src={`${RESTAURANT_LIST_IMAGE_URL}${cloudinaryImageId}`}
          alt="Image"
        />
      </div>
      <Link className="name" to={`/details/${id}`}>
        <h3>{name}</h3>
      </Link>
      <p>{avgRating}</p>
      <p>{sla.slaString}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{`${locality}, ${areaName}`}</p>
    </div>
  );
};

export default RestaurantDetails;
