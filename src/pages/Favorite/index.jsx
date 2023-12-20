import React from "react";
import { useSelector } from "react-redux";
import FavoriteCard from "./FavoriteCard";

const Favorite = () => {
  let dateHeart = JSON.parse(localStorage.getItem("favorite")) || [];
  return (
    <div id="favorite">
      <div className="container">
        <div className="favorite">
          {dateHeart.map((el) => (
            <FavoriteCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
