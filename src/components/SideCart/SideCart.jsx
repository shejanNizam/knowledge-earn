import React from "react";

const SideCart = ({ watchTime }) => {
  return (
    <div className=" my-8 sticky top-0">
      <h4 className="text-center text-2xl text-primary font-semibold border-collapse ">
        Spent time on read : <span className="font-bold ">{watchTime}</span> min
      </h4>
      <h3 className="my-16 text-2xl font-bold">Bookmarked Blogs : 8</h3>
    </div>
  );
};

export default SideCart;
