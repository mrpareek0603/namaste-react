import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CARD_IMAGE } from "../utils/constants";
import useRestaurantPage from "../utils/useRestaurantPage";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantPage = () => {
  const { id } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  //
  // using customHook for data retrieval
  const resMenu = useRestaurantPage(id);

  // renderig shimmer for better UI
  if (resMenu === null) return <Shimmer />;

  // destructuring the data
  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resMenu?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || resMenu?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  // rendering the JSX
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((category, index) => (
        // Controlled Componenet --- controlled by it's parent(RestaurantPage)
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={index === showIndex && true}
          setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantPage;

{
  /* <div className="res-page-img">
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
      </div> */
}

// -------------------------------------------------

// {/* <div className="res-page text-center">
//       {/* Heading */}
//       <div className="font-bold text-center my-4 bg-gray-100 ">
//         <h2>{name}</h2>
//         <h3>
//           {cuisines.join(", ")} - {costForTwoMessage}
//         </h3>
//       </div>

//       {/* Item Cards Accordians */}
//       {/* <div id="item-cards-accordian-parent" className=" w-6/12 text-center"> */}
//       {/* iterate on itemCards */}
//       {categories?.map((category) => (
//         <div id="accordion-heading-parent" className="bg-gray-200 text-center m-4 p-4">
//           <div
//             id="item-cards-accordian-heading"
//             className="flex justify-between"
//             key={category.card.card.title}
//           >
//             <h2>{category.card.card.title}</h2>
//             <p>🔽</p>
//           </div>
//           <div id="accordiaon-child" className="flex-col flex-wrap m-2 p-2 text-center w-6/12">{category.card.card.itemCards.map((item)=>(

//             <div className="list-none">
//               {/* <img src=""></img> */}
//               <li>{item.card.info.name}</li>
//             </div>
//           ))}</div>
//         </div>
//       ))}
//       {/* </div> */}
//     </div> */}
