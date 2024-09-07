import React, { useEffect, useState } from "react";
import Axios from "../../services/Axios";
import LastNews from "../../components/LastNews";
import AddNews from "../../components/AddNews";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../services/helper";
import Loading from "../../components/Loading";

const News = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      setLoading(true)
      await Axios("/news/news/", {headers: {Authorization: `Basic ${getCookie("_auth")}`}}).then((res) => {
        setData(res.data);  
      });
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-full relative pt-8">
      <div className="grid grid-cols-3 h-full pb-12 grid-rows-5 w-full border gap-x-4 gap-y-8 overflow-y-auto max-2xl:grid-rows-3">
        <AddNews />
        <Loading loading={loading} />
        <React.Fragment>
          {data.slice(-8, data.length).map((itm) => (
            <LastNews className="2xl:hidden" key={itm.id} {...itm} />
          ))}
        </React.Fragment>
        <React.Fragment>
          {data.slice(-14, data.length).map((itm) => (
            <LastNews className="max-2xl:hidden" key={itm.id} {...itm} />
          ))}
        </React.Fragment>
      </div>
      <div onClick={()=>navigate("/edit-news")} className="absolute bottom-1 hover:bg-sky-500 hover:text-white w-full flex h-min items-center justify-center border border-sky-600 rounded cursor-pointer">
        <span className="uppercase">tahrirlash</span>
      </div>
    </div>
  );
};

export default News;
