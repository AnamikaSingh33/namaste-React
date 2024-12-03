
import Shimmer from "./shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
 
  const {resId} = useParams();
  //console.log(params)
  const resInfo = useRestaurantMenu(resId)

console.log(resInfo);
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} -- {costForTwoMessage}
      </p>
      <h1>Menu</h1>
      <ul>
        {itemCards.map((item) => (
       
          <li key={item.card.info.id} >
            {item.card.info.name} -{"Rs"} {item.card.info.price/100 || item.card.info.defaultPrice/100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
