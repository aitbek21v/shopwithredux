import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Favorite from "./pages/Favorite";

const MyRoutes = () => {
  const PUBLIC = [
    { link: "/", element: <Home />, id: 1 },
    { link: "/admin", element: <Admin />, id: 2 },
    { link: "/basket", element: <Basket />, id: 3 },
    { link: "/favorite", element: <Favorite />, id: 4 },
  ];

  return (
    <div>
      <Routes>
        {PUBLIC.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </div>
  );
};

export default MyRoutes;
