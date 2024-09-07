import React, { useEffect, useState } from "react";
import { getCookie } from "../../services/helper";
import Axios from "../../services/Axios";
import EditNewsCard from "../../components/EditNewsCard";
import Loading from "../../components/Loading";

const EditNews = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      await Axios("/news/news/", {
        headers: { Authorization: `Basic ${getCookie("_auth")}` },
      }).then((res) => {
        setData(res.data);
      });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  return (
    <div className="pt-8">
      <Loading loading={loading} />
      {data.map((e) => (
        <EditNewsCard {...e} key={e.id} refresh={setRefresh} />
      ))}
    </div>
  );
};

export default EditNews;
