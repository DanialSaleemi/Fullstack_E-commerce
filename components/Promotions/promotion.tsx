import React from 'react'
import PromotionCards from './card'

export default function Promotion() {
  return (
    <>

    <div className='container my-10 text-center space-y-8'>    

    <p className='font-semibold text-blue-600'>
        PROMOTIONS
    </p>
    <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
        Our Promotions Events    
    </h1>
    </div>
    <PromotionCards/>
    </>
  )
}
