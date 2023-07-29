import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { StaticImageData } from "next/image"
import { Image as IImage } from "sanity";

// export type typeProduct = {
//     id : number;
//     name: string;
//     tagline : string;
//     category : string;
//     price: number;
//     image: string[] | StaticImageData[];
// };

export interface IProduct {
    title: string;
    _id: string;
    description: string;
    price: string;
    image: SanityImageSource;
    altimages: SanityImageSource[];
    category: {
        name: string;
    };
    _type: string;
    _createdAt: string;
    _rev: string;
    _updatedAt: string;
  }

  export interface responseType {
    result: Array<IProduct>
}


export interface StripeProducts {
    product: number;
    name: string;
    price: number;
    quantity: number;
}