import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
import { carditems } from "./carddata"

export default function PromotionCards() {
  return (
    <>
      <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-2 lg:gap-8 gap-4 ">
        <div className=" grid grid-flow-row lg:w-full lg:h-full justify-start lg:gap-2">
          <Card className="grid bg-slate-400 bg-opacity-50 h-36 lg:h-auto grid-cols-2 rounded-none lg:rounded-md ">
            <CardContent className="space-y-1 lg:space-y-2 lg:mt-16 justify-normal">
              <h1 className=" text-lg lg:text-3xl font-bold">GET UP TO 60%</h1>
              <p className="font-medium text-gray-700 text-sm lg:text-lg">
                For the summer season
              </p>
            </CardContent>
            <CardContent className="relative">
              <div className="h-auto w-auto absolute bottom-0 right-0">
                <Image
                  src={"/event1.webp"}
                  alt="promotion_card_image"
                  width={200}
                  height={230}
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>
          <Card className="lg:w-full lg:h-full bg-slate-900 justify-center text-center rounded-none lg:rounded-md ">
            <CardContent className="space-y-2">
              <h1 className=" text-4xl font-extrabold text-white mt-10 ">
                GET 30% OFF
              </h1>
              <p className="font-medium tracking-wide  text-white text-md pb-2">
                USE PROMO CODE
              </p>
              <p className="font-semibold tracking-widest1  text-white bg-slate-700 text-lg bg-clip-border rounded-lg ">
                DINEWEEKENDSALE
              </p>
            </CardContent>
          </Card>
        </div>
        <div>
          <div className=" grid grid-flow-row lg:grid-flow-col lg:space-x-6 ">
            {carditems.map((items) => {
              return (

            <div key={items.index}>
              <Card className="grid lg:w-full lg:h-full grid-flow-row-dense bg-orange-300 bg-opacity-70 rounded-none lg:rounded-md ">
                <CardContent>
                  <p className="font-semibold text-sm text-black  opacity-80 pt-2">
                    {items.title}
                  </p>
                  <span className=" text-black text-md line-through opacity-80">
                    {items.pricethrough}{" "}
                  </span>
                  <span className="inline text-black text-lg font-bold">
                    {items.price}
                  </span>
                </CardContent>

                <div className=" bottom-0">
                  <Image 
                    src={items.image.src}
                    alt={items.image.alt}
                    width={items.image.width}
                    height={items.image.height}
                    loading="lazy"
                  />
                </div>
              </Card>
            </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}
