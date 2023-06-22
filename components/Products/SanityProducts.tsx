"use client"

import { client } from "@/lib/sanityClient";
import NextImage from "next/image";
import ImageUrlBuilder from "@sanity/image-url";
import { Image as IImage } from "sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { POST } from "@/app/api/cart/route";

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
export const getProductData = async () => {
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



export async function Productcard(item:IProduct) {
  const data: IProduct[] = await getProductData();
  const handleAddtoCart = async () => {
    const res = fetch("/api/cart", {
      method:"POST",
      body: JSON.stringify({
        product_id: item._id
      })
    })
    const result = (await res).json()
    console.log(result)
    
  }
  return (
    <>

      <div className="container my-10 text-center space-y-8">

        <p className="font-semibold text-blue-600">PRODUCTS</p>
        <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
          Check What We Have
        </h1>
      </div>
      <div className="flex flex-cols-3 gap-12">
        {data.map((item) => (
          <div key={item._id}>
            <NextImage 
            src={urlFor(item.image).width(500).height(500).url()} alt={'product_image'}          
            />
            <h1 className="text-xl font-extrabold tracking-tight">
              {item.title}
            </h1>
            <h2 className="font-bold">{item.price}</h2>
            <button onClick={() => handleAddtoCart} className="rounded py-2 px-6 border bg-blue-600 text-white">Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}
