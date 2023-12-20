import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { API } from "../../Api";
import HeroCard from "./HeroCard";

const Hero = () => {
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    const res = await axios.get(API);
    setProduct(res.data);
  };
  useEffect(() => {
    getProduct();
  }, []);

  const dispatch = useDispatch();
  dispatch({ type: "GET_PRODUCT", payload: product });
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          {product.map((el) => (
            <HeroCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
