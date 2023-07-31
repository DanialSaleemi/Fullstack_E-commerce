import { Twitter, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-14 border-y-2 p-6 md:p-10 mt-8">
        <div className="flex md:flex-none md:basis-1/3">
          <div className="grid grid-flow-row items-start">
            <Image
              src={"/Logo.webp"}
              alt="footer_logo"
              width={150}
              height={150}
              loading="lazy"
              className="w-auto h-auto mb-2 lg:mb-0"
            />
            <p>
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </p>
            <div className="grid grid-flow-col grid-cols-3 mt-2 md:mt-0 md:grid-cols-8">
              <Twitter />
              <Facebook />
              <Linkedin />
            </div>
          </div>
        </div>
        <div className="flex md:flex-1 gap-8 md:gap-32 text-sm md:text-lg">
          <div className="leading-relaxed ">
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
          <div className="leading-relaxed hidden md:block">
            <h3 className="font-semibold pb-4 opacity-80">Contact</h3>
            <h4>Whatsapp</h4>
            <h4>Support 24h</h4>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly py-4 md:p-6 text-sm md:text-lg">
        <div className="text-center md:text-left mb-4 md:mb-0 hidden lg:block">
          <a>Copyright &copy; 2023 Dine Market</a>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <a>
            Design by <br/><span className="font-bold">Weird Design Studio</span>
          </a>
        </div>
        <div className="md:text-right text-center">
          <Link
            href={
              "https://github.com/DanialSaleemi/Fullstack_E-commerce/tree/master"
            }
          >
            Cody by <br/><span className="font-bold">Danial Saleemi</span>
          </Link>
        </div>
      </div>
    </>
  );
};
