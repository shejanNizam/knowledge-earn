import axios from "axios";
import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import SideCart from "../SideCart/SideCart";
import SingleCard from "../SingleCard/SingleCard";

const Cards = () => {
  const [watchTime, setWatchTime] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart);

  const handleAddToCart = (blog) => {
    let newCart = [];
    const exists = cart.find((bg) => bg._id === blog._id);
    if (!exists) {
      blog.quantity = 1;
      newCart = [...cart, blog];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd._id !== blog._id);
      newCart = [...remaining, exists];
    }
    setCart(newCart);
    addToDb(blog._id);
  };

  const handleTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousWatchTime) {
      const currentWatchTime = previousWatchTime + time;
      localStorage.setItem("watchTime", currentWatchTime);
      setWatchTime(currentWatchTime);
    } else {
      localStorage.setItem("watchTime", time);
      setWatchTime(time);
    }
  };

  useEffect(() => {
    axios.get("fakeDb.json").then((data) => setBlogs(data.data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    let savedCart = [];
    for (const id in storedCart) {
      const addedProduct = blogs.find((blog) => blog._id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        console.log(addedProduct);
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [blogs]);

  return (
    <div className="grid grid-cols-6 gap-8">
      <div className="col-start-1 col-end-5 px-8 py-8">
        {blogs.map((blog) => (
          <SingleCard
            key={blog._id}
            blog={blog}
            handleTime={handleTime}
            handleAddToCart={handleAddToCart}
          ></SingleCard>
        ))}
      </div>
      <div className="col-start-5 col-end-7 ">
        <SideCart watchTime={watchTime} cart={cart}></SideCart>
      </div>
    </div>
  );
};

export default Cards;
