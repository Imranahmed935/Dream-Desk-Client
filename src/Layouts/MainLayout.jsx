import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;