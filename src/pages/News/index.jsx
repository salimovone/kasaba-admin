import React, { useEffect, useState } from "react";
import Axios from "../../services/Axios";
import LastNews from "../../components/LastNews";
import AddNews from "../../components/AddNews";

const News = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      Axios("/news/news/").then((res) => {
        setData(res.data);
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-full relative pt-8">
      <div className="grid grid-cols-3 h-full pb-12 grid-rows-5 w-full border gap-x-4 gap-y-8 overflow-y-auto max-2xl:grid-rows-3">
        <AddNews />
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
      <div className="absolute bottom-0 w-full flex h-min items-center justify-center bg-red-500">
        <span>salom</span>
      </div>
    </div>
  );
};

export default News;
