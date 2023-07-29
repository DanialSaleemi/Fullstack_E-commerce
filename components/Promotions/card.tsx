import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";

export default function PromotionCards() {
  return (
    <>
      <div className="grid grid-flow-col grid-cols-2 gap-8">
        <div className=" grid grid-flow-row w-full h-full justify-start gap-2">
          <Card className="grid w-full h-full bg-slate-400 bg-opacity-50 grid-cols-2">
            <CardContent className="space-y-2 mt-16 justify-normal">
              <h1 className=" text-3xl font-bold">GET UP TO 60%</h1>
              <p className="font-medium text-gray-700 text-lg">
                For the summer season
              </p>
            </CardContent>
            <CardContent className="relative h-auto w-auto">
              <div className="h-auto w-auto  absolute bottom-0 right-0">
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
          <Card className="w-full h-full bg-slate-900 justify-center text-center">
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
          <div className=" grid grid-flow-col justify-center space-x-6 ">
            <div>
              <Card className="grid w-full h-full grid-flow-row-dense bg-orange-300 bg-opacity-70">
                <CardContent>
                  <p className="font-semibold text-sm text-black  opacity-80 pt-2">
                    Flex Sweatshirt
                  </p>
                  <span className=" text-black text-md line-through opacity-80">
                    $100.00{" "}
                  </span>
                  <span className="inline text-black text-lg font-bold">
                    $75.00
                  </span>
                </CardContent>

                <div className=" bottom-0">
                  <Image
                    src={"/event2.webp"}
                    alt="promotion_card_image"
                    width={300}
                    height={600}
                    loading="lazy"
                  />
                </div>
              </Card>
            </div>
            <div>
              <Card className="grid w-full h-full bg-slate-400 bg-opacity-50">
                <CardContent>
                  <p className="font-semibold text-black text-sm pt-2 opacity-80">
                    Flex Push Button Bomber
                  </p>
                  <span className=" text-black text-md line-through opacity-80">
                    $225.00{" "}
                  </span>
                  <span className="inline text-black text-lg font-bold">
                    $190.00
                  </span>
                </CardContent>
                <Image
                  src={"/event3.webp"}
                  alt="promotion_card_image"
                  width={280}
                  height={280}
                  loading="lazy"
                  className=" h-auto w-auto pt-4"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
