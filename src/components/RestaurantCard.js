import { CARD_IMAGE } from "../utils/constants";
import { useEffect, useState } from "react";
const RestaurantCard = ({ resData }) => {
  const [counter, setCounter] = useState(0);

  // will go to infinte rendering
  // useEffect(() => {
  //   setCounter(counter + 1);
  //   console.log("Counter value: ", counter);
  // }, [counter]);

  return (
    <div className="res-card">
      <img alt="res1" src={CARD_IMAGE + resData.data.data.cloudinaryImageId} />
      <h2>{resData.data.data.name}</h2>
      <h3>{resData.data.data.cuisines.join(", ")}</h3>
      <p>{resData.data.data.avgRating}</p>
    </div>
  );
};

export default RestaurantCard;
