const RestaurantShimmerPage = () => {
  const emptyDetails = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="main-shimmer">
      <div className="main-cont-shimmer">
        <div className="rest-list-cont">
          {emptyDetails.map((value) => {
            return (
              <div key={value} className="res-container-shimmer">
                <div className="img-cont-shimmer">
                  <img className="img" />
                </div>

                <h3></h3>

                <div className="description">
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantShimmerPage;
