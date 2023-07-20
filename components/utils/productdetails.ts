import { typeProduct } from "./types";
import P1 from "@/sanity/pcard2.png";
import P2 from "@/sanity/pcard1.png";
import P3 from "@/sanity/pcard3.png";

import { getProductData } from "../Products/SanityProducts";
import { Image as IImage } from "sanity";





   

export const Products : typeProduct[] = [
{
        
    id: 1,
        name: "Cameryn Sash Tie Dress",
        tagline: "Dress",
        category: "female",
        price: 545,
        image: [P1, P2, P3, P1]
},
{id: 2,
    name: 'Product 1',
    tagline: 'Dress',
    category: 'female',
    price: 20,
    image: [P1, P1, P1, P1, P1]
},
    {id: 3,
        name: 'Product 1',
        tagline: 'Dress',
        category: 'female',
        price: 20,
        image: [P1, P1, P1, P1, P1]
},
{id: 4,
    name: 'Product 1',
    tagline: 'Dress',
    category: 'female',
    price: 20,
    image: [P1, P1, P1, P1, P1]
},

]

