import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='text-white flex flex-col md:flex-row justify-between mt-0 lg:mt-24 w-full '>
      <div className='flex flex-col w-fit py-16 pl-0 md:pl-8 lg:pl-16 min-w-64 items-center md:items-start'>
        <h1 className='text-lg lg:text-3xl xl:text-6xl font-bold'>Discover the Perfect Credit Card for You</h1>
        <p className='mt-4 text-xs md:text-sm lg:text-lg xl:text-3xl text-center md:text-start'>Discover the power of our secure and rewarding credit cards. Explore our range of credit cards and take control of your finances today.</p>
        <button className='text-white text-xs md:text-md lg:text-lg bg-[#2BB32A] px-4 py-3 rounded-full mt-6 w-1/2 flex items-center justify-center max-w-72'>
          Get Started
          <FiArrowRight className="ml-2" />
        </button>
        <div className='flex flex-row md:flex-col mt-6 gap-x-2'>
           <h1>350K+</h1>
           <p>Active users around Jordan</p>
            </div>
      </div>
      <div className=' flex justify-end w-full h-full'>
        <Image src='/Frame.png' alt='credit card' width={800} height={400} />
      </div>
    </div>
  );
}

export default Header;
