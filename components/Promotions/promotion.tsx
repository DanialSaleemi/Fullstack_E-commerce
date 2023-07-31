import React from 'react'
import PromotionCards from './card'
import Carousel from '../Carousel/carousel'

export default function Promotion() {
  return (
    <>

    <div className='container lg:my-10 text-center space-y-8'>    

    <p className='font-semibold text-blue-600'>
        PROMOTIONS
    </p>
    <h1 className="text-xl lg:text-4xl font-bold lg:font-extrabold text-left lg:text-center tracking-tight ">
        Our Promotion Events    
    </h1>
    </div>
    <div>
     
    </div>
    <PromotionCards/>
    </>
  )
}
