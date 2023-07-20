
import { client } from "@/lib/sanityClient";
import ImageUrlBuilder from "@sanity/image-url";
import { Image as IImage } from "sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";

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
  const res = await client.fetch(`*[_type=="product" && category->name=="Female"] {
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

  export default async function FemaleProductscard (item:IProduct) {
  const data = await getProductData(item);


  return (
    <>
      <div className="container my-10 text-center space-y-8">
        <p className="font-semibold text-blue-600">FEMALE</p>
      </div>
      <div className="flex flex-cols-3 gap-10 flex-wrap justify-center">
        {data.map((item:IProduct) => (
          <div key={item._id} className = "transition-transform duration-300 hover:scale-110 cursor-pointer">            
          <Link href={`/productpage/${item._id}`}>
            <img
              src={urlFor(item.image).width(250).height(300).url()}
              alt={"product_image"}            
              className=" object-cover object-top"
              loading="lazy"
            />
            </Link>
            <h1 className="text-xl font-extrabold tracking-tight">
              {item.title}
            </h1>
            <h2 className="font-bold">{item.price}</h2>
{ /*             <AddtoCart/>
*/ }




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
//export default {Productcard};