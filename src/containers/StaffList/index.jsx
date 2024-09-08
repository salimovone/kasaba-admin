import React, { useEffect, useState } from "react";
import StaffElement from "../../components/StaffElement";
import Loading from "../../components/Loading";
import Axios from "../../services/Axios";
import { useSelector } from "react-redux";

const StaffList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const isVerifiedList = useSelector((state) => state.staff.isVerifiedList);

  const notVerifiedList = data.filter(item => item.is_verified)

  const fetchData = async () => {
    setLoading(true);
    try {
      await Axios("/employe/").then((res) => {
        setData(res.data);
      });
    } catch (eror) {
      console.error(eror);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);
  return (
    <div className="w-full overflow-y-auto h-screen pb-8">
      <Loading loading={loading} />
      {isVerifiedList ? (
        <>
          {data.map((itm) => (
            <StaffElement
              key={itm.user}
              {...itm}
              itm={itm}
              refresh={setRefresh}
            />
          ))}
        </>
      ) : (
        <>
          {notVerifiedList.map((itm) => (
            <StaffElement
              key={itm.user}
              {...itm}
              itm={itm}
              refresh={setRefresh}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default StaffList;
