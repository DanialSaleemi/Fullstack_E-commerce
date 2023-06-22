import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import { SearchBar } from "./searchbar"
  
  export function Menu() {
    return (
        <>

        <nav className="flex m-10 justify-evenly items-center h-auto w-auto" >                            

        <Image src={"/Logo.webp"} alt='Website logo' width={150} height={150}/>                
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Female</MenubarTrigger>
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
      <SearchBar/>
      <ShoppingCart/>
      


      </nav>

      </>
    )
  }
  