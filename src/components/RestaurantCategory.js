import { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({ data,showItems, setShowIndex }) => {
  // console.log("data inside restaurant category.js", data);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div
        className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-2  cursor-pointer"
        
      >
        {/* Header */}
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Accordion  Body*/}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
