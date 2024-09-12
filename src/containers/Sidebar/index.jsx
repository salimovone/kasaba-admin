import React from 'react';
import routes from '../../routers/routes';
import NavItem from '../../components/NavItem';
import { useSignOut } from 'react-auth-kit';

const Sidebar = () => {
    const signOut = useSignOut();
    return (
        <div className='px-4 pt-8 pb-4'>
            {routes.map(e => (
                <React.Fragment key={e.id}>
                    {!e.hideSidebar && <NavItem {...e} />}
                </React.Fragment>
            ))}
            <button
                onClick={signOut}
                className='bg-red-500 border  border-red-700 text-white font-bold py-2 px-4 rounded float-right mt-8 mr-4'
            >
                SIGN OUT
            </button>
        </div>
    );
};

export default Sidebar;
