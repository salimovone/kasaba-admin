import React, { useEffect, useState } from "react";
import Axios from "../../services/Axios"
import LastNews from "../../components/LastNews"

const News = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      Axios("/news/news/").then(res=>{
        setData(res.data)
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <div className="w-full h-full relative pt-8">
      <div className="grid grid-cols-3 pb-6 grid-rows-1 w-full border gap-x-2 gap-y-4 max-2xl:grid-rows-3 overflow-y-auto">
        {
          data.map(itm=>(
            <LastNews key={itm.id} {...itm} />
          ))
        }
      </div>
      <div className="absolute bottom-0 w-full flex h-min items-center justify-center bg-red-500">
        <span>salom</span>
      </div>
    </div>
  );
};

export default News;
