import React, { useEffect, useState } from 'react';
import Axios from '../../services/Axios';
import LastNews from '../../components/LastNews';
import AddNews from '../../components/AddNews';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../services/helper';
import Loading from '../../components/Loading';

const News = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            setLoading(true);
            await Axios('/news/news/', {
                headers: { Authorization: `Basic ${getCookie('_auth')}` },
            }).then(res => {
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
    }, []);

    return (
        <>
            <div className='w-full h-full relative overflow-y-scroll overflow-x-hidden p-1 pt-6 '>
                <div className='pl-4 flex justify-between items-center pr-9'>
                    <h1 className='text-[28px] font-medium'>Yangiliklar</h1>
                    <button
                        onClick={() => navigate('/edit-news')}
                        className='transition-all bg-white py-2 w-[200px]  border border-blue-500 hover:bg-blue-500 hover:text-white text-lg rounded-md'
                    >
                        Tahrirlash
                    </button>
                </div>
                <div className='absolute mt-4 grid grid-cols-3  pb-12 grid-rows-5 w-full  gap-x-4 gap-y-8  max-2xl:grid-rows-3 pt-3 pl-4 pr-9'>
                    <AddNews />
                    <Loading loading={loading} />
                    <React.Fragment>
                        {data.slice(-8, data.length).map(itm => (
                            <LastNews
                                className='2xl:hidden'
                                key={itm.id}
                                {...itm}
                            />
                        ))}
                    </React.Fragment>
                </div>
            </div>
        </>
    );
};

export default News;
