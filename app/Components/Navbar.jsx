'use client';
import React from 'react';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [showNav, setShowNav] = React.useState(false);

    const toggleNav = () => {
        setShowNav(prevShowNav => !prevShowNav);
    };

    const navitems = [{ name: 'Why Us', link: '#WhyUs' }, { name: 'Services', link: '#Wdwo' }, { name: 'Our Process', link: '#OurProcess' }, { name: 'Payments', link: '#Payments'}, { name: 'FAQs', link: '#FAQs' }]
    return (
        <div className='p-0 w-full'><nav style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(255, 255, 255, 0.1)", }} className='flex shadow-2xl flex-row p-6 space-x-6 w-full justify-between  z-50'>
            <div className='flex items-center'>
                <div className=' max-w-80 min-w-48'>
                    <Image src='/logo.png' alt='logo' layout='responsive' width={300} height={100} />
                </div>
            </div>
            <div className=' relative'>
                <button className='text-green-600 font-bold border-2 px-4 py-2 rounded-full border-green-500 hover:bg-green-500 hover:text-white transition-all mt-5 md:hidden' onClick={toggleNav}>
                    {showNav ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
                
                <div className="hidden md:flex flex-row space-x-6">
                    <ul className='flex flex-row space-x-6 justify-center py-10'>
                            {navitems.map((item, index) => (
                                <li key={index} className='text-white hover:text-gray-300 transition-all text-xs lg:text-lg xl:text-2xl'><a href={item.link}>{item.name}</a></li>
                            ))}

                    </ul>
                </div>
            </div>
            <div>
                <button className='text-green-600 font-bold border-2 px-4 py-2 rounded-full border-green-500 hover:bg-green-500 hover:text-white transition-all mt-5 text-md md:text-lg md:mt-7 lg:text-3xl'> Contact </button>
            </div>
        </nav>
        {showNav && (
                    <div className="  w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20 py-10" onClick={toggleNav}>
                        <ul className='flex flex-col space-y-6 text-center'>
                            {navitems.map((item, index) => (
                                <li key={index} className='text-white hover:text-gray-300 transition-all'><a href={item.link}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                )}
        </div>
    );
}

export default Navbar;


