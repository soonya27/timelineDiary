import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import FloatingMenu from '../components/FloatingMenu';



export default function Main() {
    let { pathname } = useLocation();

    return (
        <div className='flex flex-col md:flex-row h-screen'>
            {pathname !== '/new' && <Navbar />}
            <div className='flex-grow-[1] flex-shrink-[1] basis-auto overflow-y-auto p-3'>
                <Outlet />
            </div>
            {/* <Footer /> */}
            {pathname !== '/new' && <FloatingMenu />}

        </div>
    );
}

