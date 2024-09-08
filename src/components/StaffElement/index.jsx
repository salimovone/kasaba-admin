import { useState } from "react";
import Axios from "../../services/Axios";
import { RiDeleteBin6Fill, RiEditCircleLine } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";

const StaffElement = ({
  profile_image,
  name,
  last_name,
  profession,
  user,
  refresh,
  nonLoader,
}) => {
  const [dlt, setDlt] = useState("h-6 w-6");
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (dlt === "h-6 w-6") {
      setDlt("h-8 w-8");
    } else {
      setLoading(true);
      await Axios(`/employe/${user}/`, { method: "delete" })
        .then(() => {
          if (!nonLoader) {
            refresh((prev) => ++prev);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleEdit = () => {};

  return (
    <div className="border border-sky-300 w-full px-4 py-1 rounded-lg mb-1   flex items-center justify-between hover:bg-white">
      <div className="flex-center gap-4 text-slate-800">
        <div
          className="w-8 h-8 rounded-full bg-cover bg-center"
          style={{
            backgroundImage: `url(https://afu1.pythonanywhere.com${profile_image})`,
          }}
        ></div>
        <div className="text-sm leading-4">
          <span>
            {name} {last_name}
          </span>{" "}
          <br />
          <span className="text-xs text-slate-600">{profession.name}</span>
        </div>
      </div>
      <div className="flex-center gap-2">
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
    </div>
  );
};

export default StaffElement;
