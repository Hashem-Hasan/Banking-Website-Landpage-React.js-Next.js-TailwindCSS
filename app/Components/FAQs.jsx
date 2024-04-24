'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQs = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div id='FAQs' className='flex flex-col justify-center my-16 px-4 lg:px-96'>
            
            <h1 className='text-3xl text-center'>FAQs</h1>
            <div className='flex flex-col gap-y-4 mt-8'>
                <div className='flex flex-row justify-between gap-x-32 items-center text-white '>
                    <h2 className='text-2xl'>What credit score do I need to apply for a credit card?</h2>
                    <button onClick={handleToggle}>
                        {toggle ? <FiMinus className='h-8 w-8'/> : <FiPlus className='h-8 w-8 ' />}
                    </button>
                </div>
                <p className={`text-lg mb-4 ${toggle ? 'open' : 'closed'}`}>
                    The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.
                </p>
            </div>
            <div className='bg-white w-full border-t-2 ' />
            
        </div>
    );
};

export default FAQs;
