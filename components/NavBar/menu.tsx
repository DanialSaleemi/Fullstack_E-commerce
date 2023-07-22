"use client"

import {
    Menubar,
    MenubarMenu,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import { SearchBar } from "./searchbar"
import { useSelector } from "react-redux"
import { RootState } from "@/app/store/store"
import Link from "next/link"


  
  export function Menu() {
    const CartValue = useSelector(
      (state:RootState) => state.cart.totalQuantity
    )

    return (
      <>
        

        <nav className="flex m-10 justify-between items-center h-auto w-auto" >                            
        <Link href="/">
          <Image src={"/Logo.webp"} alt='Website logo' width={150} height={150}
          className="h-auto w-auto"/>                
        </Link>

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

        <SearchBar/>
        <Link href={"/Checkout"}>
      <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative">
        <span className="absolute right-1 top-0 rounded-full bg-red-500 h-4 w-4 text-white text-xs text-center">{CartValue}</span>
      <ShoppingCart className="h-6 w-6"/>
      </div>
      </Link>

{/*
      <Menubar>
        <MenubarMenu>
          <MenubarSubTrigger ref={"@/categories/Female"}>Female</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Male</MenubarTrigger>        
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Kids</MenubarTrigger>        
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>All Products</MenubarTrigger>
        </MenubarMenu>
      </Menubar>

    */}

      </nav>
      </>
  
    )
  }
  