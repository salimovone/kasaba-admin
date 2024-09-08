import React from 'react'
import AddStaffElement from '../../components/AddStaffElement'
import StaffSearch from '../../components/StaffSearch'
import StaffNotVerified from '../../components/StaffNotVrified'

const StaffEditAndSearch = () => {
  return (
    <div className='fixed top-0 right-0 flex-center gap-2 pt-1 pr-1 text-sm max-w-fit'>
        <StaffNotVerified />
        <StaffSearch /> 
        <AddStaffElement />
    </div>
  )
}

export default StaffEditAndSearch