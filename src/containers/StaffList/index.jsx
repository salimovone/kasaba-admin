import React, { useEffect, useState } from "react";
import StaffElement from "../../components/StaffElement";
import Loading from "../../components/Loading"
import Axios from "../../services/Axios";
import AddStaffElement from "../../components/AddStaffElement";

const StaffList = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true)
    try {
      await Axios("/employe/").then((res) => {
        setData(res.data);
      });
    } catch (eror) {
      console.error(eror);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full overflow-y-auto">
      <Loading loading={loading} />
      <AddStaffElement />
      {data.map((itm) => (
        <StaffElement key={itm.user} {...itm} itm={itm} />
      ))}
    </div>
  );
};

export default StaffList;
