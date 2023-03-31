import axios from "axios";
import React, { useEffect, useState } from "react";
import SideCart from "../SideCart/SideCart";
import SingleCard from "../SingleCard/SingleCard";

const Cards = () => {
  const [watchTime, setWatchTime] = useState(0);
  const [blogs, setBlogs] = useState([]);

  const handleBookmark = () => {
    console.log("Bookmark added");
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

  return (
    <div className="grid grid-cols-6 gap-8">
      <div className="col-start-1 col-end-5 px-8 py-8">
        {blogs.map((blog) => (
          <SingleCard
            key={blog._id}
            blog={blog}
            handleTime={handleTime}
            handleBookmark={handleBookmark}
          ></SingleCard>
        ))}
      </div>
      <div className="col-start-5 col-end-7 ">
        <SideCart watchTime={watchTime}></SideCart>
      </div>
    </div>
  );
};

export default Cards;
