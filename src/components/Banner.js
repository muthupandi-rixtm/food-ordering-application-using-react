import BannerImage from "./BannerImage";

import * as ImagesData from "../../assets/data/bannerData.json";

const imgData = ImagesData.data.cards[0].card.card.imageGridCards.info;


const Banner = () => {
    return (
      <div className="img-container">
        {imgData.map((banner) => {
          return <BannerImage key={banner.id} bannerContent={banner} />;
        })}
      </div>
    );
  };

  export default Banner;