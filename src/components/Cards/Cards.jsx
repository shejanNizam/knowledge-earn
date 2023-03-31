import axios from "axios";
import React, { useEffect, useState } from "react";
import SideCart from "../SideCart/SideCart";
import SingleCard from "../SingleCard/SingleCard";

const Cards = () => {
  const [blogs, setBlogs] = useState([]);
  //   console.log(blogs);

  useEffect(() => {
    axios.get("fakeDb.json").then((data) => setBlogs(data.data));
  }, []);

  return (
    <div className="grid grid-cols-6 gap-8">
      <div className="col-start-1 col-end-5 px-8 py-8">
        {blogs.map((blog) => (
          <SingleCard key={blog._id} blog={blog}></SingleCard>
        ))}
      </div>
      <div className="col-start-5 col-end-7 ">
        <SideCart />
      </div>
    </div>
  );
};

export default Cards;
