import React, { FC } from "react";
import { IProduct } from "../utils/types";
//import ProductCarousel from "../ProductCarousel/productcarousel";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client"
import ImageUrlBuilder from "@sanity/image-url";
import { Image as IImage } from "sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = ImageUrlBuilder(client);
export function urlFor(source: IImage | SanityImageSource) {
  return builder.image(source);
}

const Cards: FC<{ singleProductData: IProduct }> = ({ singleProductData }) => {
  return (
    <div className="border-4 max-w-sm">
      <div className="w-full">
        <Link href={`/productpage/${singleProductData._id}`}>
          <Image
            width={500}
            height={500}
            src={urlFor(singleProductData.image).url()}
            alt="product-image"
          />
          <h1 className="text-xl font-extrabold tracking-tight">
            {singleProductData.title}
          </h1>
          <h2 className="font-bold">{singleProductData.price}</h2>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
