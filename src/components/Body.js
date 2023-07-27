import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

import Shimmer from "./Shimmer";
// import { RESTAURANT_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchedResults, setSearchedResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);
  // side effect(after render)
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  // API call
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json?.data?.cards);
    setSearchedResults(json?.data?.cards);
  };

  // provide Restaurant Card to higher order component
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // get online status
  const onlineStatus = useOnlineStatus();

  // check online status
  if (!onlineStatus)
    return (
      <h1>Looks like you are offline! Please check yur internet connection</h1>
    );

  // Shimmer UI
  if (listOfRestaurants.length === 0) return <Shimmer />;

  //
  return (
    <div className="body">
      <div className="filter flex">
        {/* Search Feature */}
        <div className="search m-4 p-4">
          {/* SEARCH FEATURE */}
          <input
            className="border border-solid border-black"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              if (e.target.value === "") setSearchedResults(listOfRestaurants);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const searchResult = listOfRestaurants.filter((res) => {
                  return res.data.data.name
                    .toLowerCase()
                    .startsWith(searchInput.toLowerCase());
                });
                setSearchedResults(searchResult);
              }
            }}
          ></input>
          <button
            className="px-3 py-1 m-2 bg-green-100 rounded-lg"
            onClick={() => {
              const searchResult = listOfRestaurants.filter((res) => {
                return res.data.data.name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase());
              });
              setSearchedResults(searchResult);
            }}
          >
            Search Retaurant
          </button>
        </div>
        {/* TOP RATED FEATURE */}
        <div className="search flex items-center ">
          <button
            className="topRated-btn px-3 py-1 bg-gray-200 rounded-lg"
            onClick={() => {
              const filteredResList = listOfRestaurants.filter(
                (res) => res.data.data.avgRating > 4
              );
              setSearchedResults(filteredResList);
            }}
          >
            Top Rated
          </button>
        </div>
        {/* Set Name through input box */}
        <div className="pt-7 m-4 p-4">
          <label>UserName: </label>
          <input
            className="border border-solid border-black"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      {/* restaurant contaier */}
      <div className="res-container flex flex-wrap">
        {/* using{} because we will write Javascript inside jsx hence '{}' are required to do so */}
        {searchedResults.map((restaurant) => (
          <Link
            key={restaurant.data.data.id}
            to={"/restaurant/" + restaurant.data.data.id}
          >
            {/* if promoted then pass HOC */}
            {restaurant.data.data.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
