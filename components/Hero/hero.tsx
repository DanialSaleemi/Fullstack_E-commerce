import React from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import ImageTag from "./imagetag";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="space-y-12">
          <div className="flex h-12 w-28 justify-evenly items-center rounded-sm bg-blue-100 mt-20 mb-10">
            <p className=" font-semibold text-blue-600 ">Sale 70%</p>
          </div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            An Industrial Take on Streetwear
          </h1>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>

          <Button asChild className="ref">
            <Link href={"/categories/All"}>
              <ShoppingCart className="mr-2 h-4 w-4" /> Start Shopping
            </Link>
          </Button>
          <ImageTag />
        </div>

        <div>
          <div className="flex my-12 rounded-full items-center bg-orange-100 h-[600px] w-[600px]">
            <Image
              className="absolute w-auto h-auto"
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
