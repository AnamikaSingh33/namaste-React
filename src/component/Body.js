import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import {LIST_API} from "../utils/constant";
import useConnectionStatus from "../utils/useConnectionStatus";
const Body = () => {
  //state variable - Super powerful variable
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const [filterdRestaurant, setfilterdRestaurant] = useState("");
  useEffect(() => {
    fetchData();   
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      LIST_API
    );
    const json = await data.json();
    //optional chaining
    setlistOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterdRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //normal js variable
  //let listOfRestaurant =[];

  const onlineStatus =useConnectionStatus();

  console.log(onlineStatus)

  if(onlineStatus === false){
    return <h1>Looks like you are offline please check your connection</h1>
  }

  return listOfRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="Search">
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchtext);
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setfilterdRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            //Filter logic
            console.log(listOfRestaurant);
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setlistOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterdRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
