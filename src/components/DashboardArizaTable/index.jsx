import { useGetArizaQuery } from '../../services/redux';

const DashboardArizaTable = () => {
    const { data = [], error, isLoading } = useGetArizaQuery(); // RTK Query hook'ini chaqirish

    if (isLoading) return <div>Yuklanmoqda...</div>; // Yuklanayotgan paytda ko'rsatish
    if (error) return <div>Xatolik: {error.message}</div>; // Xatolik yuz bersa ko'rsatish

    const recentData = data.slice(-5).reverse(); // Eng so'nggi 5 arizani olish

    return (
        <div className='bg-white rounded-xl p-5'>
            <div className='flex justify-between'>
                <div className='text-[20px] font-bold'>Arizalar</div>
                <button className='bg-blue-500 rounded-md py-2 px-4 text-white'>
                    Barchasi ko'rish
                </button>
            </div>
            <table className='w-full mt-3'>
                <thead>
                    <tr>
                        <th className='w-[20px]'>№</th>
                        <th className='text-left w-[20%]'>Sarlavha</th>
                        <th className='text-left w-[40%]'>Matni</th>
                        <th className='text-center'>Yaratilgan sana</th>
                        <th className='w-[130px] text-center'>Holati</th>
                    </tr>
                </thead>
                <tbody>
                    {recentData.map((item, ind) => {
                        const backendDate = item.created;
                        const date = new Date(backendDate);
                        const day = String(date.getDate()).padStart(2, '0');
                        const month = String(date.getMonth() + 1).padStart(2, '0');
                        const year = date.getFullYear();
                        const formattedDate = `${day}.${month}.${year}`;

                        return (
                            <tr className='border-t' key={ind + 1}>
                                <td>{ind + 1}.</td>
                                <td className='text-left'>{item.title}</td>
                                <td>{item.body}</td>
                                <td className='text-center'>{formattedDate}</td>
                                <td>
                                    {item.status === 'sd' && (
                                        <div className='text-[12px] bg-green-200 text-center rounded font-bold py-[3px] px-[4px] border border-green-500'>
                                            Yuborildi
                                        </div>
                                    )}
                                    {item.status === 'rd' && (
                                        <div className='text-[12px] bg-gray-200 text-center rounded font-bold py-[3px] px-[4px] border border-gray-500'>
                                            Ko'rildi
                                        </div>
                                    )}
                                    {item.status === 'ad' && (
                                        <div className='text-[12px] bg-blue-200 text-center rounded font-bold py-[3px] px-[4px] border border-blue-500'>
                                            Qabul qilindi
                                        </div>
                                    )}
                                    {item.status === 'rj' && (
                                        <div className='text-[12px] bg-red-200 text-center rounded font-bold py-[3px] px-[4px] border border-red-500'>
                                            Rad etildi
                                        </div>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardArizaTable;
