import React from "react";
import { Link } from "react-router-dom";
import { LiaEyeDropperSolid } from "react-icons/lia";
import CardCount from "../CardCount";
import { useSelector } from "react-redux";
import SavedCard from "../SavedCount";
const Header = () => {
  const getCountBasket = useSelector((state) => state.basket.length);
  const getCountFavorite = useSelector((state) => state.favorite.length);
  return (
    <div id="navbar">
      <div className="container">
        <div className="navbar">
          <div className="navbar--logo">
            <h1>Headphone</h1>
            <h3>For the top band</h3>
          </div>
          <nav className="navbar--nav">
            <Link to="/">Home</Link>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Link to="/favorite">
                <SavedCard />
              </Link>
              <span
                style={{
                  color: "red",
                  position: "absolute",
                  left: "53px",
                  bottom: "10px",
                }}
              >
                {getCountFavorite ? getCountFavorite : ""}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Link to="/basket">
                <CardCount />
              </Link>
              <span
                style={{
                  position: "absolute",
                  left: "45px",
                  bottom: "10px",
                  color: "red",
                }}
              >
                {getCountBasket ? getCountBasket : ""}
              </span>
            </div>
            <input type="search" placeholder="Search..." />
          </nav>
          <Link to="/admin">
            <button className="add">
              <LiaEyeDropperSolid />
            </button>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
