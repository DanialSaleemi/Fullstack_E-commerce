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
  // const MyComponent = ({ images }: any) => {
  //   const [imageUrls, setImageUrl] = useState<any | null>(null);
  //   useEffect(() => {
  //     if (images) {
  //       const fetchImageUrls = async () => {
  //         const urls = await Promise.all(
  //           images.altimages.map((items: IProduct) =>
  //             urlFor(items.altimages[1]).url()
  //           )
  //         );
  //         setImageUrl(urls);
  //       };
  //       fetchImageUrls();
  //     }
  //   });
  //   if (!images) {
  //     return <div>Loading left side...</div>;
  //   }

  //   return (
  //     <div>
  //       {imageUrls.map((imageUrl: any, index: Key | null | undefined) => {
  //         <div key={index}>
  //           <NextImage
  //             src={imageUrl}
  //             alt={`Image ${index}`}
  //             width={300}
  //             height={300}
  //             loading="lazy"
  //           />
  //         </div>;
  //       })}
  //     </div>
  //   );
  // };
  // const [productID,  setProductID] = useState('');
  // useEffect( () =>  {
  //   (async() => {

  const data = await getProductData(params.id);
  //     data.map((items : IProduct) => {
  //       console.log(items._id);
  //       setProductID(items._id);
  //     })
  //   })();
  // })

  return (
    <>
      <div className="grid">
        {data &&
          data.map((items: IProduct) => (
            <div key={items._id} className="flex gap-x-6">
              <div className="flex">
                <div className="flex justify-between gap-8 order-last ">
                  <NextImage
                    src={urlFor(items.image).width(500).height(500).url()}
                    alt={items.title}
                    height={850}
                    width={600}
                    loading="lazy"
                  />
                  <div>
                    {/* <Checkout id={items._id} imageUrl={items.image} /> */}
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
                        {sizes.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="w-6 h-6 mt-2 rounded-full duration-300 border hover:shadow-xl hover:scale-150 flex justify-center items-center"
                            >
                              <span
                                className="text-sm font-semibold text-center text-gray-600 hover:text-gray-800"
                                >
                                {item}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <Quantity />
                    <div className="flex items-center space-x-10 mt-6">
                      <AddtoCart
                        productdata={[items._id, items.title, items.price]}
                      />
                      <h2 className="text-3xl font-bold tracking-widest">
                        ${items.price}
                      </h2>
                    </div>
                  </div>
                </div>
                <div></div>
                <div className="col-span-4 end-12">
                  {items.altimages.map((index: any) => (
                    <div key={index.asset?._key} className="gap-y-5 px-10">
                      <div className="mb-6">
                        <NextImage
                          src={urlFor(index).url()}
                          alt={items.title}
                          height={150}
                          width={100}
                          loading="lazy"
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
