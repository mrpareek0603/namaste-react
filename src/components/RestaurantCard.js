import { CARD_IMAGE } from "../utils/constants";
import { useState } from "react";

const RestaurantCard = ({ resData }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="res-card m-4 p-4 w-[200px] bg-gray-100 hover:bg-gray-200 rounded-lg">
      <img
        className="rounded-lg"
        alt="res-image"
        src={CARD_IMAGE + resData.data.data.cloudinaryImageId}
      />
      <h2 className="font-bold py-3 text-lg">{resData.data.data.name}</h2>
      <h3 className="font-bold mb-4">{resData.data.data.cuisines.join(", ")}</h3>
      <p><b>Average Rating:</b> {resData?.data?.data?.avgRating}</p>
    </div>
  );
};

//  Higher Order Component

// input - RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-4 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
