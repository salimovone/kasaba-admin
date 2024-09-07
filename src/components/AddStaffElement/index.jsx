import { AiOutlinePlusCircle } from "react-icons/ai"; 
import React from 'react'

const AddStaffElement = () => {
  return (
    <div className="border border-sky-300 w-full px-4 py-2 rounded-lg mb-2 flex-center text-slate-700 text-6xl cursor-pointer hover:bg-white transition-all">
      <AiOutlinePlusCircle />
    </div>
  )
}

export default AddStaffElement