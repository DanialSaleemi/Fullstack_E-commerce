import React from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import ImageTag from "./imagetag";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="space-y-6 lg:space-y-12">
          <div className="flex h-12 w-28 justify-evenly items-center rounded-sm bg-blue-100 mt-5 lg:mt-20 mb-5 lg:mb-10">
            <p className=" font-semibold text-blue-600 ">Sale 70%</p>
          </div>
          <h1 className="scroll-m-20 text-4xl lg:text-5xl font-bold lg:font-extrabold tracking-tight">
            An Industrial Take on Streetwear
          </h1>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>

          <Button asChild className="ref ">
            <Link href={"/categories/All"}>
              <ShoppingCart className="mr-2 h-4 w-4" /> Start Shopping
            </Link>
          </Button>
          <ImageTag />
        </div>

        <div className="relative center h-96 lg:h-auto lg:mt-8">
          <div className="absolute lg:my-12 my-6 rounded-full bg-orange-100 lg:h-[500px] h-[256px] lg:w-[500px] w-[256px]">
            <Image
              className="absolute w-[270px] lg:w-[520px] h-[270px] lg:h-[520px] bottom-0"
              src={"/header.webp"}
              alt="avatar"
              height={700}
              width={700}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
