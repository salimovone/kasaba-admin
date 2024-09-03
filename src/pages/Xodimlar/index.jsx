import React from 'react'
import Pagination from '../../components/Pagination'
import StaffList from '../../containers/StaffList'

const Xodimlar = () => {
  return (
    <div className='relative w-full h-full pb-10 pt-8 pr-4'>
      <StaffList />

      <div className="w-full absolute bottom-2">
        <Pagination /> {/* disabled buttons */}
      </div>
    </div>
  )
}

export default Xodimlar