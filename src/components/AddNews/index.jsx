import React from "react";
import { useNavigate } from "react-router-dom";

const AddNews = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/news-mode");
  };
  return (
    <div className="w-full h-full bg-white  rounded-xl flex justify-center items-center">
      <button onClick={handleClick} className="flex justify-center items-center gap-2 w-full h-full cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#047857] hover:to-[#14b8a6]">
        <svg className="w-16 fill-white" viewBox="0 0 15 15">
          <svg
            className="w-36 h-36"
            stroke="currentColor"
            strokeWidth="1"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </svg>
      </button>
    </div>
  );
};

export default AddNews;
