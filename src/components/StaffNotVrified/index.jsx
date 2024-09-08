import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsVerifiedList } from '../../redux/staff'

const StaffNotVerified = () => {
    const isVerifiedList = useSelector(state=>state.staff.isVerifiedList)
    const dispatch = useDispatch()
  return (
    <button onClick={()=>dispatch(setIsVerifiedList())} className="border border-sky-300 h-6 px-2 py-[2px] rounded-lg mb-2 flex-center text-slate-700 cursor-pointer hover:bg-white transition-all">
        {isVerifiedList?"Tasdiqlanmagan xodimlar ro'yxati":"Tasdiqlangan xodimlar ro'yxati"}
    </button>
  )
}

export default StaffNotVerified