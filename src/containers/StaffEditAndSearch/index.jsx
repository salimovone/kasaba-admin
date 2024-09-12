import React from 'react';
import AddStaffElement from '../../components/AddStaffElement';
import StaffSearch from '../../components/StaffSearch';
import StaffNotVerified from '../../components/StaffNotVrified';

const StaffEditAndSearch = () => {
    return (
        <div className='fixed top-0 right-0 flex-center mt-8 gap-2 pt-1 pr-6 text-sm max-w-fit'>
            <StaffNotVerified />
            <StaffSearch />
            <AddStaffElement />
        </div>
    );
};

export default StaffEditAndSearch;
