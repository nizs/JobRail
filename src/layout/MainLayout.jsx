import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div >
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;