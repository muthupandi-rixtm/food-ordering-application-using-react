import BannerImage from "./BannerImage";

import * as ImagesData from "../../assets/data/bannerData.json";

const imgData = ImagesData.data.cards[0].card.card.imageGridCards.info;

const Banner = () => {
  return (
    <div>
      <div className="btn-main flex justify-between mx-10 my-3 mr-44 ml-44 ">
        <div className="btn-title font-sans text-xl font-bold">
          What's on your mind?
        </div>
        <div className="btn-container">
          <button
            className="  font-bold text-2xl w-10 h-10 text-white bg-black mr-2 rounded-md "
            onClick={() => {
              document.getElementById("container").scrollLeft -= 160 * 4;
            }}
          >
            &lt;
          </button>
          <button  className=" font-bold text-2xl w-10 h-10 text-white bg-black rounded-md "
            onClick={() => {
              document.getElementById("container").scrollLeft += 160 * 4;
            }}
          >
            &gt;
          </button>
        </div>
      </div>
      <div
        className="img-container flex ml-36 mr-36 overflow-hidden"
        id="container"
      >
        {imgData.map((banner) => {
          return <BannerImage key={banner.id} bannerContent={banner} />;
        })}
      </div>
    </div>
  );
};

export default Banner;
