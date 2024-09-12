import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsVerifiedList } from '../../redux/staff';

const StaffNotVerified = () => {
    const isVerifiedList = useSelector(state => state.staff.isVerifiedList);
    const dispatch = useDispatch();
    return (
        <button
            onClick={() => dispatch(setIsVerifiedList())}
            className='border border-sky-300  py-2 px-8  rounded-lg mb-2 flex-center text-slate-700 cursor-pointer hover:bg-white transition-all'
        >
            {isVerifiedList
                ? "Tasdiqlangan xodimlar ro'yxati"
                : "Tasdiqlanmagan xodimlar ro'yxati "}
        </button>
    );
};

export default StaffNotVerified;
