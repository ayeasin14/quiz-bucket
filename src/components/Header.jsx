import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-orange-100 md:py-2 py-1 md:px-14 sm:px-10 px-3 flex justify-between items-center shadow-2xl'>
            <div className=''>
                <Link to='/' className='flex items-center my-3'>
                    <svg
                        class="w-8 text-teal-accent-400 mx-3"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                    >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                    </svg>

                    <p className='md:text-3xl sm:text-2xl text-light font-extrabold hover:text-lime-700 text-green-500 font-sans'>Quiz Bucket</p></Link>
            </div>
            <div className={`flex justify-end items-center md:gap-8 sm:gap-5 gap-2 absolute duration-500 md:static ${open ? 'sm:left-56 left-32' : 'left-[-300px]'}`}>
                <NavLink className={({ isActive }) => isActive ? 'bg-green-200 duration-300 text-black md:px-3 sm:px-2 px-1 md:py-2 py-0 rounded text-sm md:font-semibold sm:font-normal font-light font-sans' : 'bg-green-500 duration-300 hover:bg-lime-700 md:px-3 sm:px-2 px-1 md:py-2 py-0 rounded text-white text-sm md:font-semibold sm:font-normal font-light font-sans'} to='/home'>Home</NavLink>

                {/* <NavLink className={({ isActive }) => isActive ? 'bg-green-200 duration-300 text-black md:px-3 sm:px-2 px-1 md:py-2 py-0 rounded text-sm md:font-semibold sm:font-normal font-light font-sans' : 'bg-green-500 duration-300 hover:bg-red-700 md:px-3 sm:px-2 px-1 md:py-2 py-0 rounded text-white text-sm md:font-semibold sm:font-normal font-light font-sans'} to='/quiz'>Quiz</NavLink> */}

                <NavLink className={({ isActive }) => isActive ? 'bg-green-200 duration-300 text-black md:px-3 sm:px-2 px-1 md:py-2 py-0 rounded text-sm md:font-semibold sm:font-normal font-light font-sans' : 'bg-green-500 duration-300 hover:bg-lime-700 md:px-3 sm:px-2 px-1 md:py-2 py-0 rounded text-white text-sm md:font-semibold sm:font-normal font-light font-sans'} to='/statistics'>Statistics</NavLink>

                <NavLink className={({ isActive }) => isActive ? 'bg-green-200 duration-300 text-black md:px-3 sm:px-2 px-1 md:py-2 py-0 rounded text-sm md:font-semibold sm:font-normal font-light font-sans' : 'bg-green-500 duration-300 hover:bg-lime-700 md:px-3 sm:px-2 px-1 md:py-2 py-0 rounded text-white text-sm md:font-semibold sm:font-normal font-light font-sans'} to='/blog'>Blog</NavLink>

                <NavLink className={({ isActive }) => isActive ? 'bg-green-200 duration-300 text-black md:px-3 sm:px-2 px-1 md:py-2 py-0 rounded text-sm md:font-semibold sm:font-normal font-light font-sans' : 'bg-green-500 duration-300 hover:bg-lime-700 md:px-3 sm:px-2 px-1 md:py-2 py-0 rounded text-white text-sm md:font-semibold sm:font-normal font-light font-sans'} to='/about'>About Us</NavLink>

            </div>
            <div onClick={() => setOpen(!open)} className='lg:hidden md:hidden block'>
                {
                    open ? <XMarkIcon className='w-9 h-8 text-green-500 font-bold'></XMarkIcon> : <Bars3Icon className='w-9 h-8 text-green-500 font-bold'></Bars3Icon>
                }

            </div>
        </div>
    );
};

export default Header;