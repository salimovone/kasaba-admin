import React, { useEffect, useState } from 'react';
// import StaffElement from '../../components/StaffElement';
import Loading from '../../components/Loading';
import Axios from '../../services/Axios';
import { useSelector } from 'react-redux';
import xodimlar from '../../services/xodimlar';

const StaffList = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    // const [refresh, setRefresh] = useState(0);
    const isVerifiedList = useSelector(state => state.staff.isVerifiedList);

    // const notVerifiedList = data.filter(item => !item.is_verified);

    const fetchData = async () => {
        setLoading(true);
        try {
            await Axios('/employe/').then(res => {
                setData(res.data);
            });
        } catch (eror) {
            console.error(eror);
        } finally {
            setLoading(false);
        }
    };
    // console.log(data);

    const handleDelete = async item => {
        await xodimlar
            .employeDelete(item.user)
            .then(() => fetchData())
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='w-full overflow-y-auto h-screen pb-8  mt-16'>
            <Loading loading={loading} />

            {isVerifiedList ? (
                <>
                    {/* {data.map(itm => (
                        <StaffElement
                            key={itm.user}
                            {...itm}
                            itm={itm}
                            refresh={setRefresh}
                        />
                    ))} */}
                    <div className='bg-white rounded-xl p-5 '>
                        <div className='flex justify-between'>
                            <div className='text-[20px] font-bold'>
                                Xodimlar
                            </div>
                        </div>
                        <table className=' w-full mt-3'>
                            <thead>
                                <tr>
                                    <th className='w-[20px]'>№</th>
                                    <th className='text-left w-[20%]'>Xodim</th>
                                    <th className='text-left '>Kasbi</th>
                                    <th className='text-center '>
                                        Tug'ilgan yili{' '}
                                    </th>
                                    <th className='text-center '>Raqami </th>
                                    <th className=' w-[130px] text-center'>
                                        Holati
                                    </th>
                                    <th className=' w-[130px] text-center'>
                                        Amallar
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data
                                    .filter(item => item.is_verified === true)
                                    .map((item, ind) => {
                                        return (
                                            <tr
                                                className='border-t'
                                                key={ind + 1}
                                            >
                                                <td>{ind + 1}.</td>
                                                <td className='text-left'>
                                                    {item.name} {item.last_name}
                                                </td>
                                                <td>{item.profession.name}</td>
                                                <td className='text-center'>
                                                    {item.born_in}
                                                </td>
                                                <td className='text-center'>
                                                    {item.tel_number}
                                                </td>
                                                <td className='text-center'>
                                                    {item.is_verified ===
                                                    true ? (
                                                        <div className='text-[12px] bg-green-200 text-center rounded font-bold py-[3px] px-[4px] border border-green-500'>
                                                            Tasdiqlangan
                                                        </div>
                                                    ) : (
                                                        ''
                                                    )}
                                                </td>
                                                <td className='flex justify-center'>
                                                    <div className='flex gap-3'>
                                                        <button className='py-[1px] rounded-md px-2 text-white bg-yellow-400'>
                                                            edit
                                                        </button>
                                                        <button
                                                            onClick={() =>
                                                                handleDelete(
                                                                    item
                                                                )
                                                            }
                                                            className='py-[1px] rounded-md px-2 text-white bg-red-500'
                                                        >
                                                            del
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <>
                    {/* {notVerifiedList.map(itm => (
                        <StaffElement
                            key={itm.user}
                            {...itm}
                            itm={itm}
                            refresh={setRefresh}
                        />
                    ))} */}
                    <div className='bg-white rounded-xl p-5 '>
                        <div className='flex justify-between'>
                            <div className='text-[20px] font-bold'>
                                Xodimlar
                            </div>
                        </div>
                        <table className=' w-full mt-3'>
                            <thead>
                                <tr>
                                    <th className='w-[20px]'>№</th>
                                    <th className='text-left w-[20%]'>Xodim</th>
                                    <th className='text-left '>Kasbi</th>
                                    <th className='text-center '>
                                        Tug'ilgan yili{' '}
                                    </th>
                                    <th className='text-center '>Raqami </th>
                                    <th className=' w-[130px] text-center'>
                                        Holati
                                    </th>
                                    <th className=' w-[130px] text-center'>
                                        Amallar
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data
                                    .filter(item => item.is_verified === false)
                                    .map((item, ind) => {
                                        return (
                                            <tr
                                                className='border-t'
                                                key={ind + 1}
                                            >
                                                <td>{ind + 1}.</td>
                                                <td className='text-left'>
                                                    {item.name} {item.last_name}
                                                </td>
                                                <td>{item.profession.name}</td>
                                                <td className='text-center'>
                                                    {item.born_in}
                                                </td>
                                                <td className='text-center'>
                                                    {item.tel_number}
                                                </td>
                                                <td className='text-center'>
                                                    {item.is_verified ===
                                                    false ? (
                                                        <div className='text-[12px] bg-red-200 text-center rounded font-bold py-[3px] px-[4px] border border-red-500'>
                                                            Tasdiqlanmagan
                                                        </div>
                                                    ) : (
                                                        ''
                                                    )}
                                                </td>
                                                <td className='flex justify-center'>
                                                    <div className='flex gap-3'>
                                                        <button className='py-[1px] rounded-md px-2 text-white bg-yellow-400'>
                                                            edit
                                                        </button>
                                                        <button
                                                            onClick={() =>
                                                                handleDelete(
                                                                    item
                                                                )
                                                            }
                                                            className='py-[1px] rounded-md px-2 text-white bg-red-500'
                                                        >
                                                            del
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

export default StaffList;
