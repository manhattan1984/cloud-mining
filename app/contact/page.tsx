"use client";
import React from "react";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { SiWhatsapp } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { Toaster, toast } from "react-hot-toast";
import Link from "next/link";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const page = () => {
  return (
    <>
      <Toaster />
      <div className="p-4">
        <p className="text-2xl mt-8 mb-4">Contact Us</p>

        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-full shadow p-2 text-center">
            <HiLocationMarker className="w-full text-4xl" />
            <p className="text-xl">Location</p>

            <p className="">#11-09, Raffles Quay, SINGAPORE (048580)</p>
            <p>1900 Fifth Avenue North Birmingham, Alabama, USA</p>
          </div>
          <div className="w-full shadow p-2 text-center">
            <AiOutlineClockCircle className="w-full text-4xl" />
            <p className="text-xl">Opening Hours</p>
            <p>Monday To Friday: 10am - 6pm</p>
            <p>Saturday: 8am - 6pm</p>
            <p>Sunday: 9am - 5pm</p>
          </div>
          <div className="w-full shadow p-2 text-center">
            <HiMail className="w-full text-4xl" />
            <p className="text-xl">Mail Us</p>
            <p
              onClick={() => {
                navigator.clipboard.writeText("support@wealthaidmining.com");
                toast.success("Copied To Clipboard");
              }}
              className="text-green-600 cursor-pointer"
            >
              support@wealthaidmining.com
            </p>
          </div>
          <div className="w-full shadow p-2 text-center">
            <BiSupport className="w-full text-4xl" />
            <p className="text-xl">Support</p>
            <p>Chat With Us 24/7 </p>
            <div className="flex flex-col gap-1 items-center justify-center pt-2 w-full">
              <BsTelegram className="" />
              <p>Search @workatwealthaid On Telegram</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
