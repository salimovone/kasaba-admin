import { RxExit } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import Background from '../../pages/Login/Background';
import Axios from '../../services/Axios';
import StaffElement from '../StaffElement';

const StaffSearch = () => {
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        await Axios('/employe/').then(res => {
            setData(res.data);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return clicked ? (
        <div
            className='w-screen h-screen fixed top-0 left-0 bg-[#fff4] flex-center'
            style={{ backdropFilter: 'blur(3px)' }}
        >
            <Background />
            <button
                onClick={() => setClicked(prev => !prev)}
                className='fixed border border-sky-300 w-6 h-6 px-[4px] py-[2px] rounded-lg mb-2 flex-center text-slate-700 cursor-pointer hover:bg-white right-2 top-2'
            >
                <RxExit />
            </button>
            <div className='w-3/4 border bg-white border-sky-300 rounded-xl py-8 -mt-44 px-4 relative z-50'>
                <div className='w-full flex-center'>
                    <input className='border border-sky-400 rounded-md py-1 px-3 outline-sky-500 bg-transparent focus:bg-white' />
                </div>
                <div className='w-full grid grid-cols-1 mt-5 gap-y-1 transition-all duration-150'>
                    {data.map((itm, ind) => (
                        <StaffElement nonLoader={true} {...itm} key={ind + 1} />
                    ))}
                </div>
            </div>
        </div>
    ) : (
        <button
            onClick={() => setClicked(prev => !prev)}
            className='border border-sky-300  px-4 py-[10px] rounded-lg mb-2 flex-center text-slate-700 cursor-pointer hover:bg-white'
        >
            <AiOutlineSearch />
        </button>
    );
};

export default StaffSearch;
