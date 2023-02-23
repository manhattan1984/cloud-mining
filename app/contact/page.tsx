"use client";
import React from "react";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { Toaster, toast } from "react-hot-toast";

const page = () => {
  return (
    <>
      <Toaster />
      <div className="p-4 md:h-[52vh]">
        <p className="text-2xl mt-8 mb-4">Contact Us</p>

        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-full shadow p-2 text-center">
            <HiLocationMarker className="w-full text-4xl" />
            <p>Location</p>
            <p>Address: 1900 Fifth Avenue North Birmingham, Alabama, USA</p>
          </div>
          <div className="w-full shadow p-2 text-center">
            <HiMail className="w-full text-4xl" />
            <p>Mail Us</p>
            <p
              onClick={() => {
                navigator.clipboard.writeText("wealthaid@outlook.com");
                toast.success("Copied To Clipboard");
              }}
              className="text-green-600 cursor-pointer"
            >
              wealthaid@outlook.com
            </p>
          </div>
          <div className="w-full shadow p-2 text-center">
            <BiSupport className="w-full text-4xl" />
            <p>Location</p>
            <p>Chat With Us 24/7 </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
