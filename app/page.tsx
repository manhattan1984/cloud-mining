"use client";
import Calculator from "@/app/(components)/Calculator";
import Image from "next/image";
import Header from "./(components)/Header";
import Android from "../public/android.png";
import Apple from "../public/apple.png";
import { IoMdCreate } from "react-icons/io";
import { TbHandFinger } from "react-icons/tb";
import { BsCashCoin, BsSafe2 } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiBuyCard } from "react-icons/gi";
import { TypeAnimation } from "react-type-animation";
import Notification from "./(components)/Notification";
import Footer from "./(components)/Footer";
import Plan from "./(components)/Plan";

export default function Home() {
  const router = useRouter();
  const signUp = () => {
    router.push("/signup");
  };
  return (
    <main>
      <Header />
      <Notification />
      <div className="bg-neutral-900 text-white flex flex-col gap-2 p-4">
        <div className="flex justify-between">
          <p className="text-xl">Trusted Site</p>
        </div>
        <div className="">
          <p className="text-3xl">Earn your visitors' trust</p>
          <p className="text-gray-300">
            Address the security and trust concerns that cost you sales and
            convert more customers at every stage of the buyer's journey with
            TrustedSite's earned certification program.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <button className="p-2 w-full bg-green-600">Get Certified</button>
          <button className="p-2 w-full bg-neutral-700">watch the video</button>
        </div>
      </div>

      <div className="bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1641580529558-a96cf6efbc72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] text-white">
        <div className="backdrop-brightness-50 p-4">
          <p className="text-5xl uppercase">
            start mining
            <span>
              <TypeAnimation
                sequence={[
                  "bitcoin",
                  2000,
                  "ethereum",
                  2000,
                  "Doge",
                  2000,
                  "Litecoin",
                  2000,
                  "Zcash",
                  2000,
                  "ETC",
                  2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "3rem" }}
              />
            </span>
            today!
          </p>
          <p className="text-3xl my-4">
            The faster, safer platform to mining bitcoin!
          </p>
          <p className="text-md">
            Zipoaidmining aims to extend business to the entire cryptocurrency
            industry chain in the future and serve global users with technology
            innovations
          </p>
          <button
            onClick={signUp}
            className="rounded bg-green-600 p-3 uppercase my-4"
          >
            start mining
          </button>
          <div className="text-center my-4 flex gap-4 justify-center">
            <Image alt="android" height={120} src={Android} width={120} />
            <Image alt="apple" height={120} src={Apple} width={120} />
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-2 text-center">
        <div className="">
          <p className="text-2xl tracking-widest w-1/3 mx-auto text-gray-400 font-light">
            Three steps to getting started
          </p>
          <p className="text-3xl uppercase my-4">how it works</p>
          <div className="h-[1px] bg-green-400 w-1/12 mx-auto"></div>
          <p className="my-4 text-gray-400 text-sm">
            Getting started with Zipoaidmining is as simple as A B C! Simple
            steps to earning maximum profits
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="p-4 rounded bg-white w-2/3 mx-auto">
            <IoMdCreate className="text-4xl text-green-700 mb-4 w-full" />
            <p className="text-xl capitalize">register account</p>
          </div>
          <div className="p-4 rounded bg-white w-2/3">
            <TbHandFinger className="text-4xl text-green-700 mb-4 w-full" />
            <p className="text-xl capitalize">choose your plan</p>
          </div>
          <div className="p-4 rounded bg-white w-2/3">
            <BsCashCoin className="text-4xl text-green-700 mb-4 w-full" />
            <p className="text-xl capitalize">receive payout everyday</p>
          </div>
        </div>
      </div>
      <Calculator />
      <div className="text-center w-full my-8 bg-neutral-900 text-white py-8">
        <p className="mb-8 text-xl">Why choose us?</p>
        <div className="flex flex-col gap-4 w-4/5 mx-auto justify-center">
          <div className="py-8 text-center p-4 bg-gradient-to-b rounded to-gray-800 from-black border border-neutral-700">
            <FaMoneyBillAlt className="w-full text-3xl" />
            <p className="my-4 text-lg uppercase">Instant Trading</p>
            <button onClick={signUp} className="text-xs w-full underline">
              Open Account
            </button>
          </div>
          <div className="py-8 text-center p-4 bg-gradient-to-b rounded to-gray-800 from-black border border-neutral-700">
            <GiBuyCard className="w-full text-3xl" />
            <p className="my-4 text-lg uppercase">Recurring Buying</p>
            <button onClick={signUp} className="text-xs w-full underline">
              Open Account
            </button>
          </div>
          <div className="py-8 text-center p-4 bg-gradient-to-b rounded to-gray-800 from-black border border-neutral-700">
            <BsSafe2 className="w-full text-3xl" />
            <p className="my-4 text-lg uppercase">Safe and Secure</p>
            <button onClick={signUp} className="text-xs w-full underline">
              Open Account
            </button>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="my-4">
        <div className="text-center">
          <p className="font-medium text-2xl my-2">choose mining plan</p>
          <p className="text-sm mb-4 w-4/5 mx-auto">
            your hardware is already running, find a plan that's right for you
            (Hashrate Converter)
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {[1, 2, 3].map((index) => (
            <Plan key={index} />
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-neutral-800">
        <div className="w-11/12 mx-auto">
          <p className="text-white text-3xl py-4">Let's talk about your idea</p>

          <div className="flex flex-col gap-2">
            <input
              className="border rounded p-4"
              type="text"
              placeholder="Name"
            />
            <input
              className="border rounded p-4"
              type="text"
              placeholder="Email"
            />
            <textarea className="border rounded p-4" placeholder="Message" />
          </div>
          <button className="bg-green-400 p-4 text-white uppercase rounded my-4">
            send message
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
