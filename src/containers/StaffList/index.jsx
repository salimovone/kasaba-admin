import React, { useEffect, useState } from 'react'
import StaffElement from '../../components/StaffElement/idex'

const StaffList = () => {
    const [data, setData] = useState([])
    useEffect(()=>{},[])
    return (
        <div className=" w-full overflow-y-auto">
            <StaffElement />
        </div>
    )
}

export default StaffList