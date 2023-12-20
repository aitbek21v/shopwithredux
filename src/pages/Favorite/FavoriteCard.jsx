import React from "react";

const FavoriteCard = ({ el }) => {
  return (
    <div className="saved">
      <img src={el.image} alt="" />
      <div className="saved--titles">
        <h2>{el.name}</h2>
        <h4>{el.price}</h4>
      </div>
      <p>{el.title}</p>
    </div>
  );
};

export default FavoriteCard;
