import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useDispatch } from "react-redux";
import Hero from ".";

const HeroCard = ({ el }) => {
  const dispatch = useDispatch();
  const addToFavorite = () => {
    let dateHeart = JSON.parse(localStorage.getItem("favorite")) || [];
    dateHeart.push(el);
    localStorage.setItem("favorite", JSON.stringify(dateHeart));
    dispatch({ type: "ADD_TO_FAVORITE", payload: el });
  };

  const addToBasket = () => {
    let database = JSON.parse(localStorage.getItem("product")) || [];
    database.push(el);
    localStorage.setItem("product", JSON.stringify(database));
    dispatch({ type: "ADD_TO_BASKET", payload: el });
  };

  return (
    <div className="main">
      <div className="main--block">
        <img src={el.image} alt="" />
        <div className="main--block__titles">
          <h1>{el.name}</h1>
          <p>{el.title}</p>
          <h4>Price:{el.price}</h4>
          <div className="main--block__titles--btns">
            <button className="btn1" onClick={() => addToFavorite(el)}>
              <FaRegHeart />
            </button>
            <button className="btn2" onClick={() => addToBasket(el)}>
              Add to Card
            </button>
            <button className="btn3">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;

{
  /* <img src={el.image} alt="" />
<div className="main--title">
    <h4>{el.name}</h4>
    <h5>{el.price}</h5>
</div>
<div className="main--btns">
    <button><FaRegHeart/></button>
    <button><SlBasket/></button>
</div> */
}
