import { Twitter, Facebook, Linkedin } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="flex flex-row gap-14 border-y-2 p-6 mt-8">
        <div className="flex basis-1/3 ">
          <div className= "grid grid-flow-row">
            <Image
              src={"/Logo.webp"}
              alt="footer_logo"
              width={150}
              height={150}
              loading='lazy'
            />
            <p>
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </p>
            <div className="grid grid-flow-col grid-cols-8">
              <Twitter/>
              <Facebook/>
              <Linkedin/>
            </div>
          </div>
        </div>
        <div className="flex basis-2/3 gap-32">
          <div className=" leading-relaxed ">
            <h3 className="font-semibold pb-4 opacity-80">Company</h3>
            <h4>About</h4>
            <h4>Terms of Use</h4>
            <h4>Privacy Policy</h4>
            <h4>How it Works</h4>
            <h4>Contact Us</h4>
          </div>
          <div className="leading-relaxed">
            <h3 className="font-semibold pb-4 opacity-80">Support</h3>
            <h4>Support Center</h4>
            <h4>24h Service</h4>
            <h4>Quick Chat</h4>
          </div>
          <div className="leading-relaxed">
            <h3 className="font-semibold pb-4 opacity-80">Contact</h3>
            <h4>Whatsapp</h4>
            <h4>Support 24h</h4>
          </div>
        </div>
      </div>
      <div className='flex justify-between p-4'>
        <a>Copyright &copy; 2023 Dine Market</a>
        <a>Design by <span className='font-bold'>Weird Design Studio</span></a>
        <Link href={"https://github.com/DanialSaleemi/Fullstack_E-commerce/tree/master"}>Code by DanialSaleemi on Github</Link>
      </div>
    </>
  );
};
