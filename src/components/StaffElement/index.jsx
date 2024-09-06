import React, { useEffect, useState } from "react";
import Axios from "../../services/Axios";

const StaffElement = ({ profile_image, name, last_name, profession }) => {
  return (
    <div className="border border-sky-300 w-full px-4 py-2 rounded-lg mb-2 flex items-center justify-between">
      <div className="flex-center gap-4 text-slate-800">
        <div
          className="w-16 h-16 rounded-full bg-cover bg-center"
          style={{
            backgroundImage: `url(https://afu1.pythonanywhere.com${profile_image})`,
          }}
        ></div>
        <div className="">
        <span>{name} {last_name}</span> <br />
        <span className="text-xs text-slate-600">{profession.name}</span>
        </div>
      </div>
    </div>
  );
};

export default StaffElement;
