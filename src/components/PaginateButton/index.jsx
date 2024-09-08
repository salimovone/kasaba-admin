import React from 'react'

//pagination button is disabled for now

const PaginateButton = ({title, onClick, className}) => {
  return (
    <button disabled onClick={onClick} className={`${className} opacity-50 border border-sky-800 bg-active text-white rounded-lg px-4 py-1`}>{title}</button>
  )
}

export default PaginateButton