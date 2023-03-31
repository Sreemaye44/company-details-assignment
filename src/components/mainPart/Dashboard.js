import React, { useState } from 'react';
import pie from '../../assets/pie.svg';
import document from '../../assets/documentReport.svg'
import sidebar from '../../assets/sidebar.svg';
import users from '../../assets/users.svg';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [selected, setSelected] = useState(false);
    const handleSelected = (id) => {
        setSelected(id);
    }
    return (
        <div className='w-2/12 min-h-screen bg-[#494F58] border-t-[1px] border-gray-500  text-white p-5 font-semibold text-base space-y-6'>
            
            <div className={`flex ${ selected===1 ? 'bg-[#2E384A] rounded p-1.5': ''}`} onClick={()=>handleSelected(1)}>
               <img src={pie} alt="" srcset="" className='h-6 w-6' />
               <Link to='./reporting_cycle'>
                    <h2 className='ml-3.5'>Reporting Cycle </h2>
                    </Link>
           </div>
          
           
                <div className={`flex ${ selected===2 ? 'bg-[#2E384A] rounded p-1.5': ''}`} onClick={()=>handleSelected(2)}>
               <img src={document} alt="" srcset="" className='h-6 w-6'/>
               <Link to='/dashboard'>
                    <h2 className='ml-3.5'>Dashboard </h2>
                    </Link>
                </div>
           
          
                <div className={`flex ${ selected===3 ? 'bg-[#2E384A] rounded p-1.5': ''}`} onClick={()=>handleSelected(3)}>
               <img src={sidebar} alt="" srcset="" className='h-6 w-6' />
               <Link to='/'>
                    <h2 className='ml-3.5'>General provision </h2>
                    </Link>
                </div>
           
          <div className={`flex ${ selected===4 ? 'bg-[#2E384A] rounded p-1.5': ''}`} onClick={()=>handleSelected(4)}>
                <img src={users} alt="" srcset="" className='h-6 w-6' />
                <Link to ='/user_management'>
                    <h2 className='ml-3.5'>User Management </h2>
                    </Link>
           </div>
        
        </div>
    );
};

export default Dashboard;