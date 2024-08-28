import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavItem = ({ icon, name, path }) => {
  const {pathname} = useLocation()
  return (
    <div className={`${pathname===path?"bg-white":"bg-transparent text-sky-800"} flex py-1 items-center justify-start gap-4 card-neu px-4 rounded-md mb-6  cursor-pointer`}>
      <Link className='flex items-center gap-2 my-2' to={path}>
        <span className={`${pathname===path&&"flex justify-center items-center p-1 rounded card-neu bg-active text-white"} flex justify-center items-center p-1 rounded`}>{icon}</span>
        <span>{name}</span>
      </Link>
    </div>
  )
}

export default NavItem