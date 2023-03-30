import React from 'react';
import Dashboard from './Dashboard';
import MainBody from './MainBody';

const Main = () => {
    return (
        <div className='flex'>
            <Dashboard></Dashboard>
            <MainBody></MainBody>
        </div>
    );
};

export default Main;