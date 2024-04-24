import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(255, 255, 255, 0.1)", }} className='w-full px-16 py-8 flex flex-col md:flex-row gap-y-8 justify-between '>
      <div className='flex flex-col'>
      <div className=' max-w-80 min-w-48'>
        <Image src='/logo.png' alt='logo' layout='responsive' width={300} height={100} />
      </div>
      <p className='mt-4 text-[#ADB2B1]'>Discover the power of our secure and rewarding credit cards</p>
      </div>
      <div className='flex flex-col gap-y-2 justify-end' >
        <p>copyright 2024 <a href='https://www.hashem.top/' target='_blank' className='border-b-2 hover:text-gray-400 transition-all'>Hashem.top</a> All Rights Reserved (Bank Al Etihad)</p>
        <p>copyright 2024 <a href='https://www.figma.com/file/SgKxpAPric8xadNtA0cxy1/GreenBank---Credit-Card-Banking-Landing-Page---FREEBIES-by-%40itsrehanraihan-(Community)?type=design&node-id=0-1&mode=design&t=qM3e3PKgmFHs2elB-0' target='_blank' className='border-b-2 hover:text-gray-400 transition-all'>Figma Design</a> By @itsrehanraihan.  All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
