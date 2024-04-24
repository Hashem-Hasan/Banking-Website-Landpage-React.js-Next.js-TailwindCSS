import React from 'react'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi';

const Header3 = () => {
  return (
    <div className='text-white flex flex-row justify-between mt-24 w-full '>
        <div className=' flex justify-center md:justify-start pl-0 md:pl-16 h-full'>
      <Image src='/Group 16 (2).png' alt='credit card' width={700} height={100} />
    </div>
    <div className='flex flex-col w-fit p-8 min-w-64 items-center md:items-start'>
      <h1 className='text-lg lg:text-3xl xl:text-5xl font-bold'>Design your personalized credit card.</h1>
      <p className='mt-4 text-xs md:text-sm lg:text-lg '>You have the freedom to personalize the design of your credit card, ensuring a truly unique experience that makes you feel extraordinary</p>
      <button className='text-white text-xs md:text-md lg:text-lg bg-[#2BB32A] px-4 py-3 rounded-full mt-6 w-1/2 flex items-center justify-center max-w-72'>
        Get Started
        <FiArrowRight className="ml-2" />
      </button>
    </div>
    
  </div>
  )
}

export default Header3
