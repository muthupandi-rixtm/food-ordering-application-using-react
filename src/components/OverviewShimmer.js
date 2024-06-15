const OverviewShimmer = () => {
  const empty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="overviewShimmer-main">
        <h1>Restaurant Name</h1>
      <div className="overviewShimmer-cont">
        {empty.map(() => {
          return (
            <div className="rest-menu-list-cont">
              <h3></h3>
              <div></div>
              <div></div>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverviewShimmer;
