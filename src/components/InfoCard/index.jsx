import { BsInfoCircle } from 'react-icons/bs';
import React from 'react';

const InfoCard = props => {
    return (
        <div className='bg-white px-4 py-4 rounded-lg card-neu flex justify-between'>
            <div className=''>
                <p className=' text-slate-500'>{props.title}</p>
                <p className='text-slate-800 font-bold'>
                    {props.value}{' '}
                    <span className='text-xs text-lime-400'>
                        {props?.compare}
                    </span>
                </p>
            </div>
            <div className='bg-active p-2 h-10 w-10 rounded-lg text-2xl text-white flex justify-center items-center'>
                <BsInfoCircle />
            </div>
        </div>
    );
};

export default InfoCard;
