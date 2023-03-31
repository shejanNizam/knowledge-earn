import React from "react";

const SideCart = ({ cart }) => {
  let quantity = 0;
  const watchTime = localStorage.getItem("watchTime");

  for (const product of cart) {
    quantity = quantity + product.quantity;
  }

  return (
    <div className=" my-8 sticky top-0 px-4">
      <h4 className="text-center text-2xl text-primary font-semibold border-collapse ">
        Spent time on read : <span className="font-bold ">{watchTime}</span> min
      </h4>
      <h3 className="mt-16 text-2xl font-bold">
        Bookmarked Blogs : {quantity}{" "}
      </h3>
      <ul>
        {cart.map((cartItem) => (
          <li className="text-center mx-4 my-4 border-solid border-2 border-indigo-200 rounded-lg h-20 px-4 py-4 bg-indigo-200 font-bold">
            {" "}
            {cartItem.title}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideCart;
