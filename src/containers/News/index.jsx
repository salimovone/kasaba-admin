import React, { useEffect, useState } from 'react'
import AboutOrg from '../../components/AboutOrg'
import LastNews from '../../components/LastNews'
import Axios from '../../services/Axios';

const News = () => {
  const [data, setData] = useState({});
  const fetchData = async () => {
    try {
      Axios("/news/news/").then((res) => {
        setData(res.data[res.data.length-1]);
      });
    } catch (error) {
      throw new Error("error: " + error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className='w-full grid grid-cols-7 pr-4 gap-3'>
        <div className='col-span-4'>
            <AboutOrg />
        </div>
        <div className='col-span-3'>
          <LastNews {...data} />
        </div>
    </div>
  )
}

export default News