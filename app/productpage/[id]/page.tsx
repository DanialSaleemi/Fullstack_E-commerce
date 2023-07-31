import { Quantity } from "@/components/Products/Quantity";
import { IProduct } from "@/components/Products/SanityProducts";
import AddtoCart from "@/components/Products/AddToCart";
import ImageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Image as IImage } from "sanity";
import NextImage from "next/image";
import Checkout from "@/app/Checkout/page";

const builder = ImageUrlBuilder(client);
export function urlFor(source: IImage | SanityImageSource) {
  return builder.image(source);
}

const sizes = ["XS", "S", "M", "L", "XL"];

const getProductData = async (params: string) => {
  const res = await client.fetch(`*[_type=="product" && _id=="${params}"] {
      price,
      _id,
        title,
        image,
        "altimages":altimages[].asset->url,
        category -> {
          name          
        }
    }`);
  console.log(res);
  return res;
};

export default async function ProductIdPage(
  { params }: { params: { id: string } },
  items: IProduct
) {
  const data = await getProductData(params.id);

  return (
    <>
      <div className="grid-cols-3 gap-4 lg:gap-8 lg:mt-16 mt-8">
        {data &&
          data.map((items: IProduct) => (
            <div key={items._id} className="gap-x-1 lg:gap-x-6">
              <div className="flex lg:gap-10 gap-2">
                <div className="grid grid-flow-row col-span-2 lg:flex lg:justify-between gap-2 lg:gap-8 order-1 lg:order-last ">
                  <NextImage
                    src={urlFor(items.image).width(180).height(200).url()}
                    alt={items.title}
                    width={180}
                    height={200}
                    loading="lazy"
                    className="block lg:hidden"
                  />
                  <NextImage
                    src={urlFor(items.image).width(500).height(500).url()}
                    alt={items.title}
                    height={850}
                    width={600}
                    loading="lazy"
                    className="hidden lg:block"
                  />
                  <div>
                    {/* <Checkout id={items._id} imageUrl={items.image} /> */}
                    <h1 className="text-bold text-xl lg:text-3xl tracking-wider">
                      {items.title}
                    </h1>
                    <h2 className="text-base font-semibold text-gray-400">
                      {items.description}
                    </h2>

                    <div>
                      <h2 className="text-md font-semibold lg:pt-8 pt-6 tracking-wider">
                        SELECT SIZE
                      </h2>
                      {/*Size variants*/}
                      <div className="flex space-x-4 lg:space-x-6 my-1 lg:my-2">
                        {sizes.map((item, index) => {
                          return (
                            <div
                              key={index}
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
                    <div className="flex items-center lg:space-x-10 space-x-5 lg:mt-6 mt-3">
                      <AddtoCart
                        productdata={[items._id, items.title, items.price]}
                      />
                      <h2 className="text-xl lg:text-3xl font-bold tracking-widest">
                        ${items.price}
                      </h2>
                    </div>
                  </div>
                </div>
                <div
                  className="lg:col-span-4 lg:end-12 col-span-1"
                >
                  {items.altimages.map((index: any) => (
                    <div key={index.asset?._key} className="lg:gap-y-5 lg:px-10 ">
                      <div className="mb-4 lg:mb-6">
                        <NextImage
                          src={urlFor(index).url()}
                          alt={items.title}
                          height={70}
                          width={50}
                          loading="lazy"
                          className="block lg:hidden"
                        />
                        <NextImage
                          src={urlFor(index).url()}
                          alt={items.title}
                          height={150}
                          width={100}
                          loading="lazy"
                          className="hidden lg:block"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="my-10">
        <div className="relative">
          <h1 className="tracking-wider lg:tracking-widest1 font-extrabold text-5xl lg:text-9xl opacity-10">
            Overview
          </h1>
          <div className="absolute inset-0 flex items-center">
            <h2 className="font-semibold md:font-extrabold opacity-90 md:opacity-100 md:tracking-widest1 text-lg md:text-4xl">
              Product Information
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-3 pt-2 md:pt-1">
          <h1 className=" cols-span-1 text-md md:text-lg lg:text-2xl font-normal md:font-semibold opacity-70">
            PRODUCT DETAILS
          </h1>
          <p className=" text-sm md:text-lg text-justify md:text-left pr-3 md:pr-0 lg:tracking-wide col-span-2 hidden lg:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className=" text-sm text-justify pr-3 col-span-2 block lg:hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore ...
          </p>
        </div>
        <div className="grid grid-cols-3 mt-4 lg:mt-8">
          <h1 className="cols-span-1 text-md md:text-lg lg:text-2xl font-normal md:font-semibold opacity-70">
            PRODUCT CARE
          </h1>
          <div className="text-sm md:text-lg pr-2 md:pr-0 lg:tracking-wide col-span-2">
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
