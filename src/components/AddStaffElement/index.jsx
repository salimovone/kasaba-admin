import { AiOutlinePlusCircle } from "react-icons/ai";
import React from "react";

const AddStaffElement = () => {
  return (
    <div className="border border-sky-300 px-[4px] w-6 h-6 py-[2px] rounded-lg mb-2 flex-center text-slate-700 cursor-pointer hover:bg-white transition-all">
      <AiOutlinePlusCircle />
    </div>
  );
};

export default AddStaffElement;
