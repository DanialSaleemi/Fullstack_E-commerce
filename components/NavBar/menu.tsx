"use client";

import { ShoppingCart, Menu as BurgerMenu } from "lucide-react";
import Image from "next/image";
import { SearchBar } from "./searchbar";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import Link from "next/link";
import React, { useState } from "react";

export function Menu() {
  const CartValue = useSelector((state: RootState) => state.cart.totalQuantity);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex mt-2 lg:mt-10  justify-between lg:justify-center items-center h-auto w-full space-x-2">
        <div className="lg:hidden">
          <div
            className="h-7 w-10 p-1 flex flex-col justify-between"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div
              className={`h-1 w-6 bg-black rounded-sm transform ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`h-1 w-6 bg-black rounded-sm ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`h-1 w-6 bg-black rounded-sm transform ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </div>
        </div>
        
        <Link href="/">
          <Image
            src={"/Logo.webp"}
            alt="Website logo"
            width={150}
            height={150}
            className="flex flex-grow flex-shrink"
          />
        </Link>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } text-left  md:text-xl bg-blue-100 md:bg-inherit rounded-md lg:rounded-none opacity-90 md:opacity-100 w-11/12 h-44 md:w-full md:h-full font-semibold lg:font-normal grid grid-flow-row absolute items-center justify-start lg:justify-evenly mt-44 md:mt-0 lg:relative lg:flex lg:space-x-6`}
        >
          <Link href="/categories/Female">
            <button>Female</button>
          </Link>
          <Link href="/categories/Male">
            <button>Male</button>
          </Link>
          <Link href="/categories/Kids">
            <button>Kids</button>
          </Link>
          <Link href="/categories/All">
            <button>All Products</button>
          </Link>
        </div>

        <div className="hidden lg:block">
          <SearchBar />
        </div>

        <Link href={"/Checkout"}>
          <div className="h-10 w-10 rounded-full bg-gray-200 center relative">
            <span className="absolute right-1 top-0 rounded-full bg-red-500 h-4 w-4 text-white text-xs text-center">
              {CartValue}
            </span>
            <ShoppingCart className="h-6 w-6" />
          </div>
        </Link>
      </nav>
      <div className="block  lg:hidden py-4">
        <SearchBar />
      </div>
    </>
  );
}
