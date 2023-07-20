import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";

export default function PromotionCards() {
  return (
    <>
      <div className="grid grid-flow-col grid-cols-2 gap-8">
        <div className=" grid col-span-2 justify-start">
          <Card className="grid w-6/8 h-52 min-w-min  mb-5 bg-slate-400 bg-opacity-50 grid-cols-2">
            <CardContent>
              <h1 className=" text-3xl font-bold mt-16">GET UP TO 60%</h1>
              <p className="font-medium text-gray-700 text-lg">
                For the summer season
              </p>
            </CardContent>
            <CardContent>
              <Image
                src={"/event1.webp"}
                alt="promotion_card_image"
                width={600}
                height={600}
                loading="lazy"
                className=" justify-items-end h-auto w-auto"
              />
            </CardContent>
          </Card>
          <Card className="w-5/8 h-52 bg-slate-900 justify-center text-center">
            <CardContent>
              <h1 className=" text-4xl font-extrabold text-white my-10  ">
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
          <div className=" grid grid-flow-col justify-end space-x-4">
            <div>
              <Card className="grid w-auto h-auto bg-orange-300 bg-opacity-70 ">
                <CardContent>
                  <p className="font-medium text-sm text-black  opacity-80">
                    Flex Sweatshirt
                  </p>
                  <span className=" text-black text-md line-through opacity-80">
                    $100.00{" "}
                  </span>
                  <span className="inline text-black text-lg font-bold">
                    $75.00
                  </span>
                </CardContent>
                <Image
                  src={"/event2.webp"}
                  alt="promotion_card_image"
                  width={285}
                  height={280}
                  loading="lazy"
                  className=" object-cover object-bottom"
                />
              </Card>
            </div>
            <div>
              <Card className="grid w-auto h-auto bg-slate-400 bg-opacity-50">
                <CardContent>
                  <p className="font-medium text-black text-sm opacity-80">
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
                  className=" h-auto w-auto "
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
