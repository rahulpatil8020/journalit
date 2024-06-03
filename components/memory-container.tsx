import React from "react";
import { FaPenNib } from "react-icons/fa";

type MemoryType = {
  title: string;
  date: string;
  memory: string;
};

const MemoryContainer = ({ title, date, memory }: MemoryType) => {
  return (
    <div className="shadow-sm w-full max-h-52 rounded-lg bg-white flex flex-col py-3 px-3 text-ellipsis">
      <div className="flex justify-between items-center py-3">
        <div className="flex space-x-3 items-center justify-center">
          <FaPenNib className="h-5 w-5" />
          <span className="font-bold text-base">{title}</span>
        </div>
        <span className="text-gray-400 font-bold mr-3">{date}</span>
      </div>
      <p className="line-clamp-4">{memory}</p>
      <div className="flex space-x-3 mt-2 self-end mr-4">
        <button>See More</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default MemoryContainer;
