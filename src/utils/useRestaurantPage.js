import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../utils/constants";

const useRestaurantPage = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const restaurantData = await fetch(RESTAURANT_URL + resId);
    const restaurantDataJson = await restaurantData.json();
    setResInfo(restaurantDataJson.data);
  };
  return resInfo;
};

export default useRestaurantPage;
