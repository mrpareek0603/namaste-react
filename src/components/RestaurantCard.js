import { CARD_IMAGE } from "../utils/constants";

const RestaurantCard = ({resData}) => {
  console.log('----------inside restaurant card component',resData);
  return (
    <div className="res-card">
      <img alt="res1" src={CARD_IMAGE + resData.data.data.cloudinaryImageId} />
      <h3>{resData.data.data.name}</h3>
      <p>{resData.data.data.avgRating}</p>
    </div>
  );
};

export default RestaurantCard;
