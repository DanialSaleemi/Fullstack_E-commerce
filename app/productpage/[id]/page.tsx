import Image from "next/image";
import { Products } from "@/components/utils/productdetails";
import { Quantity } from "@/components/Products/Quantity";
import AddtoCart from "@/components/ui/AddToCart";

const getProductDetails = (id: number | string) => {
  return Products.filter((product) => product.id == id);
};

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductDetails(params.id);
  const sizes = ["XS", "S", "M", "L", "XL"];
  return (
    <>
      <div className="grid grid-cols-4 gap-x-12">
        <div className="grid grid-rows-4 mt-16 bg-red-600 mx-14">
            <Image src={"/event2.webp"} alt={"alternate images"} width={100} height={120}
            className="object-cover relative border"/>            
            <Image src={"/event1.webp"} alt={"alternate images"} width={100} height={120}
            className="object-cover relative border"/>
            <Image src={"/event2.webp"} alt={"alternate images"} width={100} height={120}
            className="object-cover relative border "/>
            <Image src={"/event3.webp"} alt={"alternate images"} width={100} height={120}
            className="object-cover relative border"/>

        </div>
        <div className="flex mt-16 flex-wrap col-span-3">
          {result.map((product) => (
            <div key={product.id} className="flex justify-between gap-6">
              <div>
                <Image
                  src={product.image}
                  alt={product.name}
                  height={650}
                  width={500}
                />
              </div>
              <div>
                <h1 className="text-bold text-3xl">{product.name}</h1>
                <h2 className="text-base font-semibold text-gray-400">
                  {product.tagline}
                </h2>

                <div>
                  <h2 className="text-md font-semibold pt-8">SELECT SIZE</h2>
                  {/*Size variants*/}
                  <div className="flex gap-x-4 my-2">
                    {sizes.map((item) => {
                      return (
                        <div key={item} className="w-6 h-6 mt-2 rounded-full duration-300 border hover:shadow-xl hover:scale-150 flex justify-center items-center">
                          <span className="text-sm font-semibold text-center text-gray-600 hover:text-gray-800">
                            {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <Quantity />
                <div className="center space-x-4">
                  <AddtoCart />
                  <h2 className="text-3xl font-bold">
                    ${product.price.toFixed(2)}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
