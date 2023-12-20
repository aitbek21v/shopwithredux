import axios from "axios";
import React, { useState } from "react";
import { API } from "../../Api";

const Admin = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handlePostProduct = () => {
    axios.post(API, {
      name: name,
      title: title,
      price: price,
      image: image,
    });
  };

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="admin--box">
            <div className="input-box">
              <input
                type="text"
                placeholder="name product..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="title product..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="price product..."
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="image product..."
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <button className="create" onClick={handlePostProduct}>
              create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
