import React from 'react';
import pie from '../../assets/pie.svg';
import document from '../../assets/documentReport.svg'
import sidebar from '../../assets/sidebar.svg';
import users from '../../assets/users.svg';

const Dashboard = () => {
    return (
        <div className='w-2/12 min-h-screen bg-[#494F58] text-white p-5 font-semibold text-sm space-y-6'>
           <div className='flex'>
               <img src={pie} alt="" srcset="" />
               <h2 className='ml-3.5'>Reporting Cycle </h2>
           </div>
           <div className='flex'>
               <img src={document} alt="" srcset="" />
               <h2 className='ml-3.5'>Dashboard </h2>
           </div>
           <div className='flex'>
               <img src={sidebar} alt="" srcset="" />
               <h2 className='ml-3.5'>About us </h2>
           </div>
           <div className='flex'>
               <img src={users} alt="" srcset="" />
               <h2 className='ml-3.5'>User Management </h2>
           </div>
        
        </div>
    );
};

export default Dashboard;