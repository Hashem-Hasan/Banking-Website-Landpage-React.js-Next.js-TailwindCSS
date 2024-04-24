import React from 'react'
import Image from 'next/image'

const Wdwo = () => {
  return (
    <div id='Wdwo' className='flex items-center flex-col gap-y-16 px-10'>
        <h1 className=' text-3xl md:text-6xl font-bold px-10'>What do we offer?</h1>
      <div className='flex flex-col gap-x-20 md:flex-row gap-y-20'>
        <div className='flex flex-row items-center gap-x-6'>
            <Image src='/f.png' alt='icon' width={70} height={100} />
            <div className='flex flex-col'>
                <h2 className='text-2xl md:text-4xl font-semibold'>Security Guarantee</h2>
                <p className='text-lg text-[#ADB2B1]'>Your data and funds will be securely protected.</p>
            </div>
        </div>
        <div className='flex flex-row items-center gap-x-6'>
            <Image src='/f (1).png' alt='icon' width={70} height={100} />
            <div className='flex flex-col'>
                <h2 className='text-2xl md:text-4xl font-semibold'>Investing</h2>
                <p className='text-lg text-[#ADB2B1]'>Your data and funds will be securely protected.</p>
            </div>
        </div>
        <div className='flex flex-row items-center gap-x-6'>
            <Image src='/f (2).png' alt='icon' width={70} height={100} />
            <div className='flex flex-col'>
                <h2 className='text-2xl md:text-4xl font-semibold'>Security Guarantee </h2>
                <p className='text-lg text-[#ADB2B1]'>Your data and funds will be securely protected.</p>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Wdwo
