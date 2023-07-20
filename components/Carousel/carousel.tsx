// Not used so far 


"use client";
import React, { useEffect, useState, Component } from 'react';
import Slider from 'react-slick';
import { IProduct } from '@/app/categories/Female/page';
import { client } from "@/lib/sanityClient";


import ImageUrlBuilder from "@sanity/image-url";
import { Image as IImage } from "sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";


export const getProductData = async (item: IProduct) => {
    const res = await client.fetch(`*[_type=="product" && category->name=="Female"] {
        price,
        _id,
          title,
          image,
          category -> {
            name          
          }
      }`);
    return res;
  };



  const builder = ImageUrlBuilder(client);
  export function urlFor(source: IImage | SanityImageSource) {
    return builder.image(source);
  }

const  Carousel = (item : IProduct) => {
  const [carouselItems, setCarouselItems] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };


useEffect(() => {
    
    const fetchCarouseldata = async () => {
        try {
            const data = await getProductData(item);
            setCarouselItems(data); 
    
        } catch (error) {
            console.log("Error fetching carousel data from Sanity: ", error)
        }
    };
fetchCarouseldata();
},[]);

  return (
    <div>
    <Slider {...settings}>
  
    {carouselItems.map((card: IProduct) => {
      return(
        <div key={card._id} className = "px-20">
                <img
                  src={urlFor(card.image).width(250).height(300).url()}
                  alt={"product_image"}            
                  className=" object-cover object-top"
                />
                <h1 className="text-xl font-extrabold tracking-tight">
                  {card.title}
                </h1>
                <h2 className="font-bold">{card.price}</h2>
                </div>
                )})}
                
    </Slider>
    </div>
  );
};

export default Carousel;
