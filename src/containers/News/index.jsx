import React from 'react';
import { useGetNewsQuery } from '../../services/redux'; // RTK Query'dan foydalanish
import { useNavigate } from 'react-router-dom';
import { AboutOrg } from '../../components';

const News = () => {
    const { data, error, isLoading } = useGetNewsQuery(); // RTK Query hook'ini chaqirish
    const navigate = useNavigate();

    if (isLoading) return <div>Yuklanmoqda...</div>; // Yuklanayotgan paytda ko'rsatish
    if (error) return <div>Xatolik: {error.message}</div>; // Xatolik yuz bersa ko'rsatish

    const latestNews = data.slice(-1).reverse(); // Eng so'nggi yangiliklarni olish

    return (
        <div className='w-full grid grid-cols-2 pr-4 gap-3'>
            <div>
                <AboutOrg />
            </div>
            {latestNews.map((item, ind) => (
                <div key={ind + 1} className='bg-white break-all rounded-lg p-5 card-neu'>
                    <div className='flex gap-4'>
                        <div className='w-[25%]'>
                            <img
                                src={item.image}
                                className='w-[100%] object-cover h-[80px] rounded-md card-neu'
                                alt=''
                            />
                        </div>
                        <div className='w-[75%]'>
                            <p className='text-xl font-medium line-clamp-1'>
                                {item.title}
                            </p>
                            <p className='text-[14px] text-gray-400 line-clamp-3'>
                                {item.text}
                            </p>
                        </div>
                    </div>
                    <hr className='mt-3' />
                    <div className='mt-3 flex justify-end'>
                        <button
                            onClick={() => navigate(`/news/${item.id}`)} // Yo'nalishni yangilash
                            className='border border-gray-400 rounded py-1 px-4'
                        >
                            Batafsil
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default News;
