import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-[#494F58] font-semibold text-sm py-3 px-6 text-white flex justify-end'>
            <h3 className='mr-8 py-2'>User Name</h3>
            <button className='outline outline-offset-0 rounded p-2'>Logout</button>
        </div>
    );
};

export default Navbar;