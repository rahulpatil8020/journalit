import React from "react";
import { FaNewspaper } from "react-icons/fa";

type BlogType = {
  title: string;
  date: string;
  author: string;
  description: string;
};
const BlogContainer = ({ title, date, author, description }: BlogType) => {
  return (
    <div className="shadow-sm w-full max-h-72 rounded-lg bg-white flex flex-col py-3 px-3 text-ellipsis">
      <div className="flex justify-between items-center py-3">
        <div className="flex space-x-3 items-center justify-center">
          <FaNewspaper className="h-5 w-5" />
          <span className="font-bold text-base">{title}</span>
        </div>
        <span className="text-gray-400 md:font-bold  mr-3">{date}</span>
      </div>
      <p className="line-clamp-6">{description}</p>
    </div>
  );
};

export default BlogContainer;
