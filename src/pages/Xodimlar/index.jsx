import React from 'react';
import Pagination from '../../components/Pagination';
import StaffList from '../../containers/StaffList';
import StaffEditAndSearch from '../../containers/StaffEditAndSearch';

const Xodimlar = () => {
    return (
        <div className='relative w-full h-full pb-10 pl-5 pt-8 pr-6'>
            <StaffEditAndSearch />
            <StaffList />
            <div className='w-full fixed bottom-2 m-auto'>
                <Pagination /> {/* disabled buttons */}
            </div>
        </div>
    );
};

export default Xodimlar;
