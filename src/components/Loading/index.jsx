import React from "react";

const Loading = ({loading}) => {
  return loading?(
    <div className="absolute right-0 bottom-0 w-full h-full bg-ground z-50 flex-center">
      <div className="transform translate-x-1/2 translate-y-1/2 mb-20">
        <div className="p-4 bg-gradient-to-tr animate-spin from-green-500 to-blue-500 via-purple-500 rounded-full">
          <div className="bg-white rounded-full">
            <div className="w-24 h-24 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  ):null
};

export default Loading;
