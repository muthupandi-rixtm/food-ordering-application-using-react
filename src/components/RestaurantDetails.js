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
    <div className="res-container w-[250] mx-10">
      <div className="img-cont ">
        <img
          className="img"
          src={`${RESTAURANT_LIST_IMAGE_URL}${cloudinaryImageId}`}
          alt="Image"
          width="200"
          height="auto"
        />
      </div>

      <Link className="name" to={`/details/${id}`}>
        <h3>{name}</h3>
      </Link>
      <div className="description">
        <p>{avgRating}</p>
        <p>{sla.slaString}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{`${locality}, ${areaName}`}</p>
      </div>
    </div>
  );
};

export default RestaurantDetails;
