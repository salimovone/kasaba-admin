import { RiDeleteBin6Fill } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";
import { RiEditCircleLine } from "react-icons/ri";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../../services/Axios";

const EditNewsCard = (props) => {
  const [popup, setPopup] = useState("hidden");
  const [dlt, setDlt] = useState("h-6 w-6");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const popupStyle =
    "w-screen right-0 top-0 absolute flex justify-center items-center bg-[#000a] h-full cursor-pointer z-50";

  const handleDelete = async () => {
    if (dlt === "h-6 w-6") {
      setDlt("h-8 w-8");
    } else {
      setLoading(true);
      Axios(`/news/news/${props.id}/`, { method: "delete" })
        .then(() => {
          props.refresh((prev) => ++prev);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleEdit = () => {
    navigate("/news-mode", { state: { id: props.id, image: props.image, title: props.title, text: props.text } })
  }

  return (
    <div
      className="w-full border overflow-y-auto border-sky-400 rounded-md px-4 py-2 flex justify-between mb-2 items-center"
    >
      <div className=" flex justify-center items-center gap-2">
        <img
          src={props.image}
          className="h-8 transition-all cursor-pointer"
          onClick={() => setPopup(popupStyle)}
        />
        {props.title}
      </div>
      <div className="flex gap-2 items-center">
        {dlt === "h-6 w-6" && (
          <div
            onClick={handleEdit}
            className="bg-yellow-300 text-white font-bold rounded-full h-6 w-6 flex-center cursor-pointer"
          >
            <RiEditCircleLine />
          </div>
        )}

        <button
          disabled={loading}
          onClick={() => setDlt("h-6 w-6")}
          className={dlt === "h-8 w-8" ? "flex" : "hidden"}
        >
          <span className="bg-sky-500 w-6 h-6 flex-center rounded-full text-white">
            <TiDeleteOutline />
          </span>
        </button>
        <button
          disabled={loading}
          onClick={handleDelete}
          className={
            "bg-red-500 text-white font-bold rounded-full transition-all flex-center cursor-pointer " +
            dlt
          }
        >
          {dlt === "h-6 w-6" ? <TiDeleteOutline /> : <RiDeleteBin6Fill />}
        </button>
      </div>
      <div className={popup} onClick={() => setPopup("hidden")}>
        <img
          src={props.image}
          className="max-w-[80%] cursor-default transition-all"
          alt="image here"
        />
      </div>
    </div>
  );
};

export default EditNewsCard;
