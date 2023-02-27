import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";
import { TiLocation } from "react-icons/ti";
import Divider from "./Divider";

const Footer = () => {
  return (
    <div className="bg-neutral-900 text-white h-full p-4 flex flex-col gap-4 md:flex-row md:flex-wrap">
      <div className="">
        <p className="text-xl mb-1">About WealthAid Mining</p>
        <Divider />
        <div className="">
          <div className="flex w-full">
            <Image alt="logo" src="/transparent.png" height={40} width={40} />
            <p className="text-600 font-light text-xl my-4">WealthAid Mining</p>
          </div>
          <p>
            Investment strategy is based on well researched Index Strategy and
            invests exclusively into top 20 underlying crypto assets with the
            highest market capitalization.
          </p>
        </div>
      </div>

      <div className="">
        <p className="text-xl mb-1">Contact & Location</p>
        <Divider />

        <div className="py-2">
          <div className="flex gap-2 items-center">
            <AiOutlineMail className="text-xl text-white" />
            <p>wealthaid@outlook.com</p>
          </div>
          <div className="flex gap-2 items-center my-1">
            <TiLocation className="text-xl text-white" />
            <p className="text-sm">
              1900 Fifth Avenue North Birmingham, Alabama, USA
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <SiWhatsapp className="text-white text-lg" />
            <Link
              passHref={true}
              href="https://wa.me/+18055394475"
              className="text-green-500 text-sm"
            >
              +1 805-539-4475
            </Link>
          </div>
        </div>
      </div>

      <div className="">
        <p className="text-xl">Useful Links</p>
        <Divider />
        <div className="flex flex-col gap-3 py-2 md:flex-row">
          <Link className="text-sm text-gray-100" href="/">
            Home
          </Link>
          <Link className="text-sm text-gray-100" href="/about">
            About
          </Link>
          <Link className="text-sm text-gray-100" href="/plans">
            Plans
          </Link>
          <Link className="text-sm text-gray-100" href="/contact#">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
