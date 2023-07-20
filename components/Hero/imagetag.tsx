import React from "react";
import Image from "next/image";

type Props = {};

export default function ImageTag({}: Props) {
  return (
    <div className=" flex space-x-12">
      <Image
        src={"/Featured1.webp"}
        width={100}
        height={100}
        alt="featured1"
        loading="lazy"
      ></Image>
      <Image
        src={"/Featured2.webp"}
        width={100}
        height={100}
        alt="featured2"
        loading="lazy"
      ></Image>
      <Image
        src={"/Featured3.webp"}
        width={100}
        height={100}
        alt="featured4"
        loading="lazy"
      ></Image>
      <Image
        src={"/Featured4.webp"}
        width={100}
        height={100}
        alt="featured5"
        loading="lazy"
      ></Image>
    </div>
  );
}
