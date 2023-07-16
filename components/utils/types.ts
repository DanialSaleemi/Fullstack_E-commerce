import { StaticImageData } from "next/image"

export type typeProduct = {
    id : number,
    name: string,
    tagline : string,
    category : string,
    price: number,
    image: string | StaticImageData
};