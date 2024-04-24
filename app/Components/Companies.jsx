import React from 'react'
import Image from 'next/image'

const Companies = () => {
  return (
    <div className='py-20 min-w-72 mb-16' style={{maxWidth: 1200}}>
      <Image src='/logo slider.png' alt='companies' width={1920} height={1080} />
    </div>
  )
}

export default Companies
