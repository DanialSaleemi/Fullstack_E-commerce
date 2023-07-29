import { client } from "@/sanity/lib/client";
import ImageUrlBuilder from "@sanity/image-url";
import { Image as IImage } from "sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import { IProduct } from "@/components/utils/types";
import Image from "next/image";

// interface IProduct {
//   title: string;
//   _id: string;
//   description: string;
//   price: string;
//   image: IImage | SanityImageSource;
//   category: {
//     name: string;
//   };
// }

const builder = ImageUrlBuilder(client);
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
const getProductData = async (item: IProduct) => {
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

export default async function AllProductscard(item: IProduct) {
  const data = await getProductData(item);

  return (
    <>
      <div className="container my-10 text-center space-y-8">
        <p className="font-semibold text-blue-600">ALL PRODUCTS</p>
      </div>
      <div className="flex flex-cols-3 gap-10 flex-wrap justify-center">
        {data.map((item: IProduct) => (
          <div
            key={item._id}
            className="transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <Link href={`/productpage/${item._id}`}>
              {item.image && (
                <Image
                src={urlFor(item.image).width(250).height(300).maxHeight(300).maxWidth(250).url()}
                  alt={"product_image"}
                  height={250}
                  width={300}
                  loading="lazy"
                  className=" object-cover object-top"
                />
              )}
            </Link>
            <h1 className="text-xl font-extrabold tracking-tight">
              {item.title}
            </h1>
            <h2 className="font-bold">${item.price}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
