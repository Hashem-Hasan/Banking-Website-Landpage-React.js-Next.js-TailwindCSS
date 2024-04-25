import React from 'react'

const Cards = () => {
    const cards = [
        {
            dis: '"Great session! Ahmed was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."',
            name: 'Ahmad Jaber',
            role: 'CEO, Jaber Corp',
            photo: '/ahmad.jpg'
        },
        {
            dis: '"Its is both attractive and highly adaptable. Its exactly what Ive been looking forefinitely wo lorem ipsum dolorth the investment."',
            name: 'Abd Alruhman Boubes',
            role: 'Security Analyst, Boubes Corp',
            photo: '/abood.jpg'
        },
        {
            dis: '"I am really satisfied with it. Im good to go. It really saves me time and effort. Its is exactly what our business has been lacking. "',
            name: 'Ahmad Al-Saeed',
            role: 'CEO, Al-Saeed Corp',
            photo: '/ahmad1.jpg'
        },

]
  return (
    <div  className='my-16 '>
      <div className='flex flex-col lg:flex-row items-center gap-y-4 gap-x-10 px-4 md:px-20'>
        {
            cards.map((card, index) => {
                return (
                    <div id='WhyUs' key={index} style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(255, 255, 255, 0.1)", }} className='rounded-3xl flex flex-col gap-y-4 md:gap-y-16 p-4 md:p-16 items-start'>
                        <img src='/Frame (2).png' alt='photo' className='w-16 h-16 md:w-24 md:h-24 rounded-full' />
                        <p className='text-white text-lg md:text-2xl lg:text-3xl text-start '>{card.dis}</p>
                        <div className='flex flex-row items-center gap-x-4'>
                            <img src={card.photo} alt='photo' className='w-16 h-16 md:w-24 md:h-24 rounded-full' />
                            <div className='flex flex-col'>
                                <h1 className='text-white text-lg md:text-2xl xl:text-3xl font-bold'>{card.name}</h1>
                                <p className='text-[#2BB32A] text-sm md:text-lg lg:text-xl'>{card.role}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Cards
