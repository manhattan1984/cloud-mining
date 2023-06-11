import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
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
            <p>support@wealthaidmining.com</p>
          </div>
          <p className="py-1">
            Wealthaid is headquartered in Singapore with offices in Alabama and
            Thailand. For PR, media, sales, or any other queries, please contact
            us here. We will get back to you as soon as possible.
          </p>
          {/* <div className="flex gap-2 items-center my-1">
            <TiLocation className="text-xl  text-white" />
            <div className="">
              <p className="">#11-09, Raffles Quay, SINGAPORE (048580)</p>
              <p>1900 Fifth Avenue North Birmingham, Alabama, USA</p>
            </div>
          </div> */}
          <Link href="https://t.me/WEALTHAIDADMIN">
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center border border-white p-2 rounded-full">
                <p className="">Contact Us</p>
                <BsTelegram className="text-white text-lg" />
              </div>
              <p>
                Search <br /> @wealthaidadmin <br /> On Telegram
              </p>
            </div>
          </Link>
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
        </div>
      </div>
      <div className="">
        <p className="text-xl">Help Center</p>
        <Divider />
        <div className="flex flex-col gap-3 py-2 md:flex-row">
          <Link className="text-sm text-gray-100" href="/faqs">
            FAQs
          </Link>
          <Link className="text-sm text-gray-100" href="/guidelines">
            Guidelines
          </Link>
          <Link className="text-sm text-gray-100" href="/contact">
            Contact Us
          </Link>
          <Link
            className="text-sm text-gray-100"
            href="/WEALTHAID-TERM-AND-CONDITION.pdf"
          >
            Terms and Conditions
          </Link>
          <Link
            className="text-sm text-gray-100"
            href="https://www.wealthaidmax.com/"
          >
            Wealthaid Max
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
