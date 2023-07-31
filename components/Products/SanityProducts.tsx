"use client";

import { client } from "@/sanity/lib/client"
import ImageUrlBuilder from "@sanity/image-url";
import { Image as IImage } from "sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import React, { Component } from "react";
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

const Productcard = async (item: IProduct) => {
  const data = await getProductData(item);

  return (
    <>
      <div className="container my-10 text-center space-y-8">
        <p className="font-semibold text-blue-600">PRODUCTS</p>
        <h1 className="text-xl font-extrabold tracking-tight lg:text-4xl">
          Check What We Have
        </h1>
      </div>
      <div
        className="lg:flex lg:flex-row  grid lg:gap-10 justify-center py-10 ">
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
          </div>
        ))}
      </div>
    </>
  );
};
export { Productcard };
