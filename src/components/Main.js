import React from 'react';
import Navbar from './navbar/Navbar'
import Dashboard from './mainPart/Dashboard';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex'>
            <Dashboard></Dashboard>
            <Outlet></Outlet>
            </div>
           
        </div>
    );
};

export default Main;