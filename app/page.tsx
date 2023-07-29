import Hero from "@/components/Hero/hero";
import { Jewellery } from "@/components/JewellerySection/jewellery";
// import ProductCarousel from "@/components/ProductCarousel/productcarousel";
import ProductCards from "@/components/Products/ProductCard";
import { Productcard } from "@/components/Products/SanityProducts";
import Promotion from "@/components/Promotions/promotion";
// import { IProduct, responseType } from "@/components/utils/types";
import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app"
import type { Session } from "next-auth"

// const getProductData = async () => {
//   const res = await client.fetch(`*[_type=="product"]`,
//     {
//       next: {
//         revalidate:60
//       }
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data from Sanity client");
//   }
//   console.log(res);
//   return res.json();
// };

export default async function Home()  {
 
  // let {result} : responseType = await getProductData();

  return (

     
      
      <div>
        <Hero />
        <Promotion />
        {/* <ProductCarousel productData={result} /> */}
        {/* @ts-expect-error Server Component */}
        <Productcard />
        <Jewellery />
      </div>

  );
}
