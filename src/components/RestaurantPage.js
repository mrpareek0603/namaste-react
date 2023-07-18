import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CARD_IMAGE } from "../utils/constants";
import useRestaurantPage from "../utils/useRestaurantPage";

const RestaurantPage = () => {
  const { id } = useParams();
  // 
  // using customHook for data retrieval
  const resMenu = useRestaurantPage(id);

  // renderig shimmer for better UI
  if (resMenu === null) return <Shimmer />;

  // destructuring the data
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // rendering the JSX
  return (
    <div className="res-page">
      <div className="res-page-img">
        <img
          alt="res1"
          src={CARD_IMAGE + cloudinaryImageId}
          className="res-page-img"
        />
      </div>
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - Rs {costForTwoMessage}
      </h3>
      <div className="res-page-items">
        {itemCards.map((item) => (
          <div key={item.card.info.id}>{item.card.info.name}</div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
