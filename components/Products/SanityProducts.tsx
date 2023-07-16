"use client";

import { client } from "@/lib/sanityClient";
import ImageUrlBuilder from "@sanity/image-url";
import { Image as IImage } from "sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import AddtoCart from "../ui/AddToCart";
import NextLink from 'next/link';

interface IProduct {
  title: string;
  _id: string;
  description: string;
  price: string;
  image: IImage;
  category: {
    name: string;
  };
}

const builder = ImageUrlBuilder(client);
export function urlFor(source: IImage | SanityImageSource) {
  return builder.image(source);
}
export const getProductData = async (item: IProduct) => {
  const res = await client.fetch(`*[_type=="product"] {
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

//export async function Productcard:FC<any> = (item) {
  const Productcard = async (item:IProduct) => {
  const data = await getProductData(item);


  const handleAddtoCart = async (_id:string) => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: _id
      }),
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <>
      <div className="container my-10 text-center space-y-8">
        <p className="font-semibold text-blue-600">PRODUCTS</p>
        <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
          Check What We Have
        </h1>
      </div>
      <div className="flex flex-cols-3 gap-12 ">
        {data.map((item:IProduct) => (
          <div key={item._id} className = "transition-transform duration-300 hover:scale-110 cursor-pointer">            
            <img
              src={urlFor(item.image).width(500).height(500).url()}
              alt={"product_image"}
              width={500}
              height={500}
              onClick={() => {<NextLink href="./productpage"></NextLink>}}
              className=" object-cover object-top"
            />
            <h1 className="text-xl font-extrabold tracking-tight">
              {item.title}
            </h1>
            <h2 className="font-bold">{item.price}</h2>
            <AddtoCart/>





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
}
export {Productcard};