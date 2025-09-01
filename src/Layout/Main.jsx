import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div className="min-h-screen flex flex-col w-full">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
