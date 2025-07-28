import React from "react";
import { FaAngleRight } from "react-icons/fa";

const StoreNext = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-iconC border border-white flex justify-center items-center text-[20px] cursor-pointer absolute top-1/2 -right-2 -translate-y-1/2 z-10">
      <FaAngleRight className="text-white" />
    </div>
  );
};

export default StoreNext;
