"use client";
import React, { useState } from "react";
import { MdDone } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const NewMemory = () => {
  const [textareaRows, setTextareaRows] = useState(1);

  const handleTextareaChange = (e: any) => {
    const lines = e.target.value.split("\n").length;
    setTextareaRows(lines);
  };
  return (
    <>
      <div className="flex flex-col space-y-4">
        <span className="font-bold text-lg pl-5">{`What's on your mind??`}</span>
        <textarea
          autoFocus
          className="bg-transparent p-5 border-none outline-none focus:outline-none"
          rows={textareaRows}
          placeholder="Start writing here....."
          onChange={handleTextareaChange}
        ></textarea>
        <button className="rounded-full h-14 w-14 bg-black text-white fixed bottom-20 right-10 flex justify-center items-center hover:bg-white hover:text-black">
          <FaCheck className="h-5 w-5" />
        </button>
      </div>
    </>
  );
};

export default NewMemory;
