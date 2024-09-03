import React from 'react'
import PaginateButton from '../PaginateButton'

const Pagination = () => {
  return (
    <div className='w-full mt-5 flex-center'>
        <div className="flex-center gap-4">
            <PaginateButton title={1} />
        </div>
    </div>
  )
}

export default Pagination