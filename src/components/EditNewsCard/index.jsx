import { RiDeleteBin6Fill } from 'react-icons/ri';
import { TiDeleteOutline } from 'react-icons/ti';
import { RiEditCircleLine } from 'react-icons/ri';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from '../../services/Axios';

const EditNewsCard = props => {
    const [popup, setPopup] = useState('hidden');
    const [dlt, setDlt] = useState('h-6 w-6');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const popupStyle =
        'w-screen right-0 top-0 absolute flex justify-center items-center bg-[#000a] h-full cursor-pointer z-50';

    const handleDelete = async () => {
        if (dlt === 'h-6 w-6') {
            setDlt('h-8 w-8');
        } else {
            setLoading(true);
            await Axios(`/news/news/${props.id}/`, { method: 'delete' })
                .then(() => {
                    props.refresh(prev => ++prev);
                })
                .catch(err => console.log(err))
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    const handleEdit = () => {
        navigate('/news-mode', {
            state: {
                id: props.id,
                image: props.image,
                title: props.title,
                text: props.text,
            },
        });
    };

    return (
        <>
            <div className='w-full  flex justify-between overflow-y-auto rounded-md px-4 py-2   '>
                <div className='  gap-3 flex  '>
                    <img
                        src={props.image}
                        className='h-[45px] card-neu rounded-md transition-all cursor-pointer w-[70px] object-cover'
                        onClick={() => setPopup(popupStyle)}
                        alt=''
                    />
                    <div className=' text-lg font-medium'>
                        {props.title}
                        <p className='text-[14px] text-gray-400 mt-[-5px] font-normal'>
                            {props.text}
                        </p>
                    </div>
                </div>
                <div className='flex gap-2 items-center justify-end  mt-3'>
                    {dlt === 'h-6 w-6' && (
                        <div
                            onClick={handleEdit}
                            className='bg-yellow-300 text-white font-bold rounded-full h-6 w-6 flex-center cursor-pointer'
                        >
                            <RiEditCircleLine />
                        </div>
                    )}

                    <button
                        disabled={loading}
                        onClick={() => setDlt('h-6 w-6')}
                        className={dlt === 'h-8 w-8' ? 'flex' : 'hidden'}
                    >
                        <span className='bg-sky-500 w-6 h-6 flex-center rounded-full text-white'>
                            <TiDeleteOutline />
                        </span>
                    </button>
                    <button
                        disabled={loading}
                        onClick={handleDelete}
                        className={
                            'bg-red-500 text-white font-bold rounded-full transition-all flex-center cursor-pointer ' +
                            dlt
                        }
                    >
                        {dlt === 'h-6 w-6' ? (
                            <>
                                <TiDeleteOutline />
                            </>
                        ) : (
                            <RiDeleteBin6Fill />
                        )}
                    </button>
                </div>
                <div className={popup} onClick={() => setPopup('hidden')}>
                    <img
                        src={props.image}
                        className='max-w-[80%] cursor-default transition-all'
                        alt=''
                    />
                </div>
            </div>
            <hr />
        </>
    );
};

export default EditNewsCard;
