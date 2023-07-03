'use client'

import Link from 'next/link';
import { BsMenuButton, BsFillCartPlusFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/logo/161920267_177138040882972_1821638672231312027_n-removebg-preview.png'
import Button from './Button';

const NavBar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 px-3 bg-black/50'>
            <div className='flex items-center gap-2'>
                <Image className='bg-transparent bg-red-500 w-14 h-14' src={logo} alt=''></Image>
                <h1 className='text-xl font-semibold text-white md:text-2xl'>H.R.Automobile</h1>
            </div>
            <span className='text-white md:hidden'>
                {toggle ? <AiOutlineClose onClick={() => setToggle(false)} /> : <BsMenuButton onClick={() => setToggle(true)} />}
            </span>
            <ul className={`font-semibold flex items-center duration-300 flex-col py-5 px-5 md:p-0 text-white bg-opacity-90 top-[100%] bg-black md:bg-transparent w-full md:w-auto md:flex-row  gap-8 absolute md:static z-50 cursor-pointer ${toggle ? "top-0 left-0" : "-left-full duration-300"}`}>
                <li>
                    <Link onClick={() => setToggle(false)} href='/'>Home</Link>
                </li>
                <li>
                    <Link onClick={() => setToggle(false)} href='/about'>About</Link>
                </li>
                <li>
                    <Link onClick={() => setToggle(false)} href='/dashBoard'>DashBoard</Link>
                </li>
                <li>
                    <Link onClick={() => setToggle(false)} href='/faq'>FAQ</Link>
                </li>
                {/* <li>
                    <Link onClick={() => setToggle(false)} href='/login'>Login</Link>
                </li> */}
                <li>
                    <Link onClick={() => setToggle(false)} href='/login'>
                        <Button props="Login" />
                    </Link>
                </li>
                <li>
                    <span> <BsFillCartPlusFill className='text-2xl' /> </span>
                </li>
            </ul>

        </nav>
    );
};

export default NavBar;