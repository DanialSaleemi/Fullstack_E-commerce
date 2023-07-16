import { typeProduct } from "./types";
import P1 from "@/sanity/pcard2.png";
import { getProductData } from "../Products/SanityProducts";
import { Image as IImage } from "sanity";





   

export const Products : typeProduct[] = [
{
        
    id: 1,
        name: "Cameryn Sash Tie",
        tagline: "Dress",
        category: "female",
        price: 545,
        image: P1,
},
{id: 2,
    name: 'Product 1',
    tagline: 'Dress',
    category: 'female',
    price: 20,
    image: P1
},
    {id: 3,
        name: 'Product 1',
        tagline: 'Dress',
        category: 'female',
        price: 20,
        image: P1
},
{id: 4,
    name: 'Product 1',
    tagline: 'Dress',
    category: 'female',
    price: 20,
    image: P1
},

]

