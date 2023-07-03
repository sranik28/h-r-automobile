'use client'

import { SlArrowUp } from 'react-icons/sl';

const MyIcon = () => {
    return (
        <div className='flex items-center justify-center w-full h-full bg-black cursor-pointer'>
            <span><SlArrowUp className='w-5 h-5 font-bold  text-white hover:text-[#cf253f]  ' /></span>
        </div>
    );
};

export default MyIcon;