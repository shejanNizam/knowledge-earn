import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import author from "../../assets/author/author-1.png";

const SingleCard = ({ blog, handleTime, handleAddToCart }) => {
  // console.log(blog._id);
  const { _id, img, author_img, author_name, time, title } = blog;

  return (
    <div>
      <div className="card card-compact w-full my-8 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="cover_image" />
        </figure>
        <div className="card-body">
          <div className="flex items-center space-x-96">
            <div className="flex items-center ">
              <img className="w-12 h-12 me-4" src={author} alt="author_image" />
              <div>
                <h4 className="font-bold text-xl"> {author_name} </h4>
                <p>14 May(4 Days ago)</p>
              </div>
            </div>
            <div className="flex items-center ">
              <div> {time} min read </div>
              <button onClick={() => handleAddToCart(blog)} className="ms-2 ">
                <FontAwesomeIcon icon={faBookmark} />
              </button>
            </div>
          </div>
          <h2 className="card-title text-3xl">{title}</h2>
          <div className="card-actions justify-start">
            <button onClick={() => handleTime(time)} className="btn btn-link">
              Mark as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
