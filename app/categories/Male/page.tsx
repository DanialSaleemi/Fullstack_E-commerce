import { client } from "@/sanity/lib/client"
import ImageUrlBuilder from "@sanity/image-url";
import { Image as IImage } from "sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from 'next/link';
import NextImage from "next/image";
import Image from "next/image";

export interface IProduct {
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
const getProductData = async (item: IProduct) => {
  const res = await client.fetch(`*[_type=="product" && category->name=="Male"] {
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

  export default async function MaleProductscard (item:IProduct) {
  const data = await getProductData(item);


  // const handleAddtoCart = async (_id:string) => {
  //   const res = await fetch("/api/cart", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       product_id: _id
  //     }),
  //   });
  //   const result = await res.json();
  //   console.log(result);
  // };

  return (
    <>
      <div className="container my-6 lg:my-10 text-center space-y-8">
        <p className="font-semibold text-blue-600">MALE</p>
      </div>
      <div className="flex flex-cols-3 gap-10 flex-wrap justify-center">
        {data && data.map((item:IProduct) => (
          <div key={item._id} className = "transition-transform duration-300 hover:scale-110 cursor-pointer shadow-lg">            
            <Link href={`/productpage/${item._id}`}>
            {item.image &&(
            <Image
              src={urlFor(item.image).height(300).width(250).maxHeight(300).maxWidth(250).url()}
              alt={"product_image"}
              width={250}
              height={300}           
              className=" object-cover object-top"
            />
            )}
            </Link>
            <h1 className="text-xl font-extrabold tracking-tight text-center md:text-left">
              {item.title}
            </h1>
            <h2 className="font-bold text-center md:text-left">${item.price}</h2>

          </div>
        ))}
      </div>
    </>
  );
}
//export default {Productcard};