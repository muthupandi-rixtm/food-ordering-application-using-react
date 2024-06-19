import BannerImage from "./BannerImage";

import * as ImagesData from "../../assets/data/bannerData.json";

const imgData = ImagesData.data.cards[0].card.card.imageGridCards.info;

const Banner = () => {
  return (
    <div>
      <div className="btn-main">
      <div className="btn-title">What's on your mind?</div>
      <div className="btn-container">
        <button
          onClick={() => {
            document.getElementById("container").scrollLeft -= 160 * 4;
          }}
        >
          &lt;
        </button>
        <button
          onClick={() => {
            document.getElementById("container").scrollLeft += 160 * 4;
          }}
        >
          &gt;
        </button>
      </div>
      </div>
      <div className="img-container" id="container">
        {imgData.map((banner) => {
          return <BannerImage key={banner.id} bannerContent={banner} />;
        })}
      </div>
    </div>
  );
};

export default Banner;
