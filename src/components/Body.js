import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Shimmer from "./Shimmer";
import { RESTAURANT_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchedResults, setSearchedResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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

  // Shimmer UI
  if (listOfRestaurants.length === 0) return <Shimmer />;
  //
  return (
    <div className="body">
      <div className="filter">
        {/* Search Feature */}
        <div className="search">
          {/* SEARCH FEATURE */}
          <input
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
        <button
          className="topRated-btn"
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
      {/* restaurant contaier */}
      <div className="res-container">
        {/* using{} because we will write Javascript inside jsx hence '{}' are required to do so */}
        {searchedResults.map((restaurant) => (
          <Link
            key={restaurant.data.data.id}
            to={"/restaurant/" + restaurant.data.data.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
