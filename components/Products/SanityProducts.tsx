"use client";

import { client } from "@/sanity/lib/client"
import ImageUrlBuilder from "@sanity/image-url";
import { Image as IImage } from "sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import AddtoCart from "./AddToCart";
import Link from "next/link";
//import { handleOnClick } from "@/app/productpage/[id]/page";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { Component } from "react";
import Slider from "react-slick";
import ProductIdPage from "@/app/productpage/[id]/page";
import Image from "next/image";


export interface IProduct {       // should be imported from '../utils/types'
  title: string;
  _id: string;
  description: string;
  price: string;
  image: IImage;
  altimages: IImage[];
  category: {
    name: string;
  };
}




export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}

const builder = ImageUrlBuilder(client);
export function urlFor(source: IImage | SanityImageSource) {
  return builder.image(source);
}

export const getProductData = async (item: IProduct) => {
  const res = await client.fetch(`*[_type=="product"][0..2] {
      price,
      _id,
        title,
        image,
        category -> {
          name          
        }
    }`);
    console.log(res);
  return res;
};

// export const handleAddtoCart = async (_id: string) => {
//   const res = await fetch("/api/cart", {
//     method: "POST",
//     body: JSON.stringify({
//       product_id: _id,
//     }),
//   });
//   const result = await res.json();
//   console.log(result);
// };

const Productcard = async (item: IProduct) => {
  const data = await getProductData(item);

  return (
    <>
      <div className="container my-10 text-center space-y-8">
        <p className="font-semibold text-blue-600">PRODUCTS</p>
        <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
          Check What We Have
        </h1>
      </div>
      <div
        className="flex flex-row gap-10 justify-center py-10 ">
        {data && data.map((item: IProduct) => (
          <div key={item._id}
          className="hover:scale-110 transition-transform duration-300 shadow-lg">              

              <Link href={`/productpage/${item._id}`}>
                <Image
                  src={urlFor(item.image).width(380).height(400).url()}
                  alt={"product_image"}
                  width={380}
                  height={400}
                  className=" object-cover object-top "
                />

                <h1 className="text-xl font-extrabold tracking-tight">
                  {item.title}
                </h1>
                <h2 className="font-bold">${item.price}</h2>
              </Link>
            {/* <button
              onClick={() => {handleAddtoCart(item._id)}}
              className="rounded py-2 px-6 border bg-blue-600 text-white"
            >
              Add to Cart
            </button> */}
          </div>
        ))}
      </div>
    </>
  );
};
export { Productcard };
