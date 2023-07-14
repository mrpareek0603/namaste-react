import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  console.log(resList);
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  console.log("-------------listOfRestaurants", listOfRestaurants);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResList = resList.filter(
              (res) => res.data.data.avgRating > 4
            );
            setListOfRestaurants(filteredResList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {/* using{} because we will write Javascript inside jsx hence '{}' are required to do so */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
