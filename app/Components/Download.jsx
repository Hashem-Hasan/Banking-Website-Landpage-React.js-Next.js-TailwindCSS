import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';


const Download = () => {
  return (
    <div id='Payments' className='text-white flex flex-col md:flex-row mt-24 w-full px-0 lg:px-20 items-center'>
    <div className='flex flex-col w-fit p-8 min-w-64 items-center md:items-start'>
      <h1 className='text-lg lg:text-3xl xl:text-6xl font-bold'>Easy Way to manage your finances</h1>
      <p className='mt-4 text-xs md:text-sm lg:text-lg xl:text-xl '>Easy to use mobile app that support on android and ios.</p>
      <div className='flex flex-row mt-6 gap-x-8'>
        <a href='https://apps.apple.com/jo/app/bank-al-etihad-%D8%A8%D9%86%D9%83-%D8%A7%D9%84%D8%A5%D8%AA%D8%AD%D8%A7%D8%AF/id1060048474' target='_blank'><button className='text-white text-xs md:text-md lg:text-lg bg-[#2BB32A] px-4 py-3 rounded-full w-fit flex items-center justify-center max-w-72 hover:bg-white hover:text-[#2BB32A] transition-all'>
          App Store
          <FiArrowRight className="ml-2" />
        </button>
        </a>
        <a href='https://play.google.com/store/apps/details?id=com.ofss.fcdb.mobile.android.phone.BAE.launcher&pcampaignid=web_share' target='_blank'><button className='text-white text-xs md:text-md lg:text-lg bg-[#2BB32A] px-4 py-3 rounded-full w-fit flex items-center justify-center max-w-72 hover:bg-white hover:text-[#2BB32A] transition-all'>
          Play Store
          <FiArrowRight className="ml-2" />
        </button>
        </a>

      </div>
    </div>
    <div className=' flex justify-end'>
      <Image src='/image 108.png' alt='credit card' width={600} height={400} />
    </div>
  </div>
  )
}

export default Download
