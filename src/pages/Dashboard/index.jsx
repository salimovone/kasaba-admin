import React from 'react';
import { DashboardArizaTAble } from '../../components';
import { InfoCards, News } from '../../containers';

const Dashboard = () => {
    return (
        <div className='w-full p-[20px] pb-4 h-screen overflow-auto'>
            <InfoCards />
            <News />
            <div className='mt-10'>
                <DashboardArizaTAble />
            </div>
        </div>
    );
};

export default Dashboard;
