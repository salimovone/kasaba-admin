import React, { useEffect, useState } from 'react';
import { getCookie } from '../../services/helper';
import Axios from '../../services/Axios';
import { EditNewsCard, Loading } from '../../components';

const EditNews = () => {
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
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
    // console.log(data);

    useEffect(() => {
        fetchData();
    }, [refresh]);

    return (
        <div className='pt-8 p-5'>
            <Loading loading={loading} />
            <div className='bg-white rounded-xl p-5 pb-8 card-neu'>
                <h1 className='text-[24px] font-bold '>
                    Yangiliklarni tahrirlash
                </h1>
                <div className='  w-full mt-2 '>
                    {data.map(e => (
                        <EditNewsCard {...e} key={e.id} refresh={setRefresh} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EditNews;
