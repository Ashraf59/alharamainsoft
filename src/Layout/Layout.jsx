import React from 'react';
import Navbar from '../Page/Home/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Home/Shared/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;