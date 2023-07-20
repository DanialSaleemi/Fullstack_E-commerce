"use client";
import { Quantity } from "@/components/Products/Quantity";
import { IProduct, getProductData } from "@/components/Products/SanityProducts";
import AddtoCart from "@/components/ui/AddToCart";
import ImageUrlBuilder from "@sanity/image-url";
import { client } from "@/lib/sanityClient";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Image as IImage } from "sanity";
import Image, { StaticImageData } from "next/image";

const builder = ImageUrlBuilder(client);
export function urlFor(source: IImage | SanityImageSource) {
  return builder.image(source);
}

const sizes = ["XS", "S", "M", "L", "XL"];

export default async function Productcard(
  { params }: { params: { id: string } },
  item: IProduct
) {
  const data = await getProductData(item);

  return (
    <>
      <div className="grid grid-cols-5 gap-x-4">
        {data.map((items: IProduct) => (
          <div key={items._id} className="ml-24">
            {items.altimages ? (
              items.altimages.map((elm) => {
                return (
                  <div className="mt-2">
                    <Image
                      src={urlFor(elm).height(500).width(500).bg("blue").url()}
                      alt="more product images"
                      loading="lazy"
                    />
                  </div>
                );
              })
            ) : (
              <div />
            )}
          </div>
        ))}

        <div className="flex col-span-4 flex-wrap">
          {data.map((items: IProduct) => (
            
            (items._id!=params.id)? (<div/>):(
            <div key={items._id} className="flex gap-x-6">
            
              <Image
                src={urlFor(items.image).width(500).height(500).url()}
                alt={items.title}
                height={850}
                width={600}
                loading="lazy"
              />
              <div>
                <h1 className="text-bold text-3xl tracking-wider">
                  {items.title}
                </h1>
                <h2 className="text-base font-semibold text-gray-400">
                  {items.description}
                </h2>

                <div>
                  <h2 className="text-md font-semibold pt-8 tracking-wider">
                    SELECT SIZE
                  </h2>
                  {/*Size variants*/}
                  <div className="flex space-x-6 my-2">
                    {sizes.map((item) => {
                      return (
                        <div
                          key={item}
                          className="w-6 h-6 mt-2 rounded-full duration-300 border hover:shadow-xl hover:scale-150 flex justify-center items-center"
                        >
                          <span className="text-sm font-semibold text-center text-gray-600 hover:text-gray-800">
                            {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <Quantity />
                <div className="flex items-center space-x-10 mt-6">
                  <AddtoCart />
                  <h2 className="text-3xl font-bold tracking-widest">
                    {items.price}
                  </h2>
                </div>
              </div>
              </div>
              )
          ))}
        </div>
      </div>
      <div className="my-10">
        <div className="relative">
          <h1 className="tracking-widest1 font-extrabold text-9xl opacity-10">
            Overview
          </h1>
          <div className="absolute inset-0 flex items-center">
            <h2 className="font-extrabold tracking-wider text-2xl">
              Product Information
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <h1 className=" cols-span-1 text-xl font-semibold opacity-70">
            PRODUCT DETAILS
          </h1>
          <p className=" tracking-wide col-span-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="grid grid-cols-3 mt-8">
          <h1 className=" cols-span-1 text-xl font-semibold opacity-70">
            PRODUCT CARE
          </h1>
          <div className="col-span-2 tracking-wide">
            <li> Hand wash using cold water</li>
            <li> Do not use bleach</li>
            <li> Hang it to dry</li>
            <li> Iron on low temperature</li>
          </div>
        </div>
      </div>
    </>
  );
}
