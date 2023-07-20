import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const description = [
  {
    id: 0,
    title: "Using Good Quality Materials",
    desc: "Lorem ipsum dolor sit amt, consectetur adipiscing elit",
  },
  {
    id: 1,
    title: "Modern Fashion Design",
    desc: "Lorem ipsum dolor sit amt, consectetur adipiscing elit",
  },
  {
    id: 2,
    title: "100% Handmade Products",
    desc: "Lorem ipsum dolor sit amt, consectetur adipiscing elit",
  },
  {
    id: 3,
    title: "Discount for Bulk Orders",
    desc: "Lorem ipsum dolor sit amt, consectetur adipiscing elit",
  },
];

export const Jewellery = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex basis-1/2"></div>

        <div className="flex basis-1/2 text-start h-auto">
          <h1 className="font-extrabold leading-tight text-5xl mr-10">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex basis-1/2 text-start h-auto">
      <div className="relative max-w-lg">
        <a className="tracking-wider font-extrabold text-9xl opacity-10">Different from others</a>
        <div className="absolute inset-0 flex items-center">
          <div className=" grid grid-cols-2 gap-4">
            {description.map((item) => {
              return (
                <div key={item.id} className="p-4">
                  <h2 className=" text-xl font-bold ">{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
          </div>
          </div>
        </div>
        <div className="flex basis-1/2 text-start h-auto gap-6">
          <Image
            src={"/jewel.webp"}
            alt="jewellery image"
            width={300}
            height={380}
            loading="lazy"
            
          />
          <p className="gap-10 leading-loose tracking-wide mr-12 text-justify">
            This piece is ethically crafted in our small family-owned workshop
            in Peru with unmatched attention to detail and care. The Natural
            color is the actual natural color of the fiber, undyed and 100%
            traceable.
            <br/>
            <Button asChild>
              <Link href={"/categories/All"}>See All Products</Link>
            </Button>
          </p>
        </div>
      </div>
    </>
  );
};
