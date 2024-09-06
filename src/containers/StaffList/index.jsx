import React, { useEffect, useState } from "react";
import StaffElement from "../../components/StaffElement";
import Axios from "../../services/Axios";
import { useSelector } from "react-redux";

const StaffList = () => {
  const [data, setData] = useState([]);
  const professions = useSelector(state => state.data.professions)

  const fetchData = async () => {
    try {
      await Axios("/employe/").then((res) => {
        setData(res.data);
      });
    } catch (eror) {
      console.error(eror);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full overflow-y-auto">
      {data.map((itm) => (
        <StaffElement key={itm.user} {...itm} />
      ))}
    </div>
  );
};

export default StaffList;
