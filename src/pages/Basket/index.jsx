import React from "react";
import { useSelector } from "react-redux";
import BasketCard from "./BasketCard";

const Basket = () => {
  const { basket } = useSelector((state) => state);
  const getCountBasket = useSelector((state) => state.basket.length);
  // console.log(getCountBasket);
  let database = JSON.parse(localStorage.getItem("product")) || [];

  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          {database.map((el) => (
            <BasketCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Basket;
