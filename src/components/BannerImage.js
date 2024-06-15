import { BANNER_LIST_URL } from "../../utils/Constants";

const BannerImage = (props) => {
  const { imageId } = props.bannerContent;
  return (
    <div className="banner-img">
      <img
        src={`${BANNER_LIST_URL}${imageId}`}
        width="144"
        height="180"
        alt="Image"
      />
    </div>
  );
};

export default BannerImage;
