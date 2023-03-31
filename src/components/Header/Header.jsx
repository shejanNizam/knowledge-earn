import React from "react";
import author from "../../assets/author/author.png";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-3xl font-bold">
            Knowledge Cafe
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="font-semibold">
            <a className="ps-4" href="/about">
              About
            </a>
            <a className="ps-4" href="/blogs">
              Blogs
            </a>
            <a className="ps-4" href="/login">
              Login
            </a>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={author} />
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
