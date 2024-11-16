import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    published_date,
    rating,
    total_view,
    thumbnail_url,
    details,
  } = news;

  return (
    <div className="border rounded-lg p-4 shadow-lg max-w- mx-auto">
      {/* Author Info */}
      <div className="flex items-center mb-4">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="text-sm font-medium">{author.name}</p>
          <p className="text-xs text-gray-500">{published_date}</p>
        </div>
        <div className="ml-auto text-gray-500">
          <FaShareAlt className="inline-block" />
        </div>
      </div>

      {/* News Title */}
      <h2 className="text-lg font-bold mb-2">{title}</h2>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt="News Thumbnail"
        className="w-full h-[600px] object-cover object-center rounded-md mb-3"
      />

      {/* News Details */}
      <p className="text-sm text-gray-600 mb-4">
        {details.substring(0, 120)}...{" "}
        <Link to={`/news/${news._id}`} className="text-blue-500">
          Read More
        </Link>
      </p>

      {/* Ratings and Views */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center">
          <AiFillStar className="text-yellow-500 mr-1" />
          <span className="font-medium">{rating.number}</span>
        </div>
        <div className="flex items-center">
          <BiShow className="mr-1" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
