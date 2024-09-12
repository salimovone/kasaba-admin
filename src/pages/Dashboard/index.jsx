import React from 'react';
import InfoCards from '../../containers/InfoCards';
import News from '../../containers/News';
import DashboardArizaTable from '../../components/DashboardArizaTable';

const Dashboard = () => {
    return (
        <div className='w-full p-[20px] pb-4 h-screen overflow-auto'>
            <InfoCards />
            <News />
            <div className='mt-10'>
                <DashboardArizaTable />
            </div>
        </div>
    );
};

export default Dashboard;
