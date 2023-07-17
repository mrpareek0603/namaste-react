import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { CARD_IMAGE } from "../utils/constants";

const RestaurantPage = () => {
  const { id } = useParams();
  const [resMenu, setResMenu] = useState(null);

  // executes after 1st render
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  // fetching data from API
  const fetchRestaurantData = async () => {
    const resData = await fetch(RESTAURANT_URL + id);
    const jsonResData = await resData.json();
    setResMenu(jsonResData.data);
  };

  // renderig shimmer for better UI
  if (resMenu === null) return <Shimmer />;

  // destructuring
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
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
