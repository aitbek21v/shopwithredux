import React from "react";
import { CiCircleRemove } from "react-icons/ci";

const BasketCard = ({ el }) => {
  const removeProduct = (id) => {
    let database = JSON.parse(localStorage.getItem("product")) || [];
    const newData = database.filter((item) => item.id !== id);
    localStorage.setItem("product", JSON.stringify(newData));
  };

  return (
    <div className="main_basket">
      <img src={el.image} alt="" />
      <div className="main_basket--titles">
        <h1>{el.name}</h1>
        <div className="main_basket--titles__btn">
          <h3>{el.price}</h3>
          <button onClick={() => removeProduct(el.id)}>
            <CiCircleRemove />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
