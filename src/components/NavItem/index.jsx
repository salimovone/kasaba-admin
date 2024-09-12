import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ icon, name, path }) => {
    const { pathname } = useLocation();
    return (
        <div>
            <Link to={path}>
                <div
                    className={`${
                        pathname === path
                            ? 'bg-white'
                            : 'bg-transparent text-sky-800'
                    } flex py-[6px] items-center justify-start gap-4 card-neu px-4 rounded-md mb-6  cursor-pointer`}
                >
                    <div className='flex items-center gap-2 my-2'>
                        <span
                            className={`${
                                pathname === path &&
                                'flex justify-center items-center p-1 rounded card-neu bg-active text-white'
                            } flex justify-center items-center p-1 rounded`}
                        >
                            {icon}
                        </span>
                        <span>{name}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default NavItem;
