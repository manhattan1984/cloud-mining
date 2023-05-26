"use client";
import Image from "next/image";
import { IoMdCreate } from "react-icons/io";
import { TbHandFinger } from "react-icons/tb";
import {
  BsCashCoin,
  BsFillPieChartFill,
  BsCurrencyBitcoin,
  BsFillPlugFill,
  BsGraphUp,
  BsFillPhoneFill,
} from "react-icons/bs";
import { BiChip } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { AiTwotoneSecurityScan, AiOutlinePoweroff } from "react-icons/ai";

import { useRouter } from "next/navigation";
import { TypeAnimation } from "react-type-animation";
import Plans, { PlanType } from "./(components)/Plans";
import { toast, Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Reviews from "./(components)/Reviews";
import FAQ from "./(components)/FAQ";
import Link from "next/link";
import FeaturesBox from "@/components/FeaturesBox";
import { useSupabase } from "./(context)/supabase-provider";

const features = [
  {
    icon: <BsFillPieChartFill className="text-2xl" />,
    title: "Pool Allocation",
    body: "You can decide which pools you want to mine. This allows you to find the most profitable pools.",
  },
  {
    icon: <BsFillPlugFill className="text-2xl" />,
    title: "Low Maintenance Fee",
    body: "We got the lowest price on electricity(0.05 $/kWh) and purchasing costs in the Cryptocurrency mining industry.",
  },
  {
    icon: <BiChip className="text-2xl" />,
    title: "Newest Hardware",
    body: "We use The newest ASIC miner, GPU rigs. You get the most advanced technologies from HashShiny.io",
  },
  {
    icon: <FaUsers className="text-2xl" />,
    title: "Expert Team",
    body: "Our mining team come from in blockchain industry and IT engineers, we have you covered with the knowledge and skills of our team.",
  },
  {
    icon: <BsCurrencyBitcoin className="text-2xl" />,
    title: "Daily Payout",
    body: "The mining starts immediately after confirmed payment. First payouts within 24 hours. Afterward, the payouts continue daily.",
  },
  {
    icon: <AiTwotoneSecurityScan className="text-2xl" />,
    title: "Security",
    body: "The overwhelming majority of funds are stored in offline, cold wallets. McAfee® SECURE protection. Cloudflare® SECURE protection.",
  },
  {
    icon: <AiOutlinePoweroff className="text-2xl" />,
    title: "Mining Switch",
    body: "You can control the Mining process by setting up Switch on or Switch off. You have full control permissions on Mining.",
  },
  {
    icon: <BsGraphUp className="text-2xl" />,
    title: "Hashrate Graphs",
    body: "Our graphs give you up to the hourly hashrates, It is a Live Hashrate graph that gives you live data within seconds.",
  },
  {
    icon: <BsFillPhoneFill className="text-2xl" />,
    title: "Mobile App",
    body: "Fully functioning Android and Apple Apps that's integrated with our system. Mobile APP currently have better usability than website.",
  },
];

// @ts-ignore
const Feature = ({ icon, title, body }) => (
  <div className="flex gap-2 basis-1/4">
    <div className="h-full">{icon}</div>
    <div className="">
      <p className="text-2xl">{title}</p>
      <p className="text-sm text-gray-100">{body}</p>
    </div>
  </div>
);

const coins = [
  "bitcoin",
  2000,
  "Doge",
  2000,
  "Litecoin",
  2000,
  "Zcash",
  2000,
  "ETC",
  2000,
];

const countries = [
  "Canada",
  "USA",
  "England",
  "Spain",
  "South Africa",
  "India",
  "Dubai",
  "Russia",
  "Persia",
  "Australia",
];

const min = 50;
const max = 10_000;

function randomAmount() {
  return Math.floor(Math.random() * (max - min) + min);
}

export default function Home({ plans }: { plans: PlanType[] }) {
  const router = useRouter();
  const signUp = () => {
    router.push("/signup");
  };

  const { supabase } = useSupabase();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event: string, session: any) => {
      if (event == "PASSWORD_RECOVERY") {
        const newPassword = prompt(
          "What would you like your new password to be?"
        );
        const { data, error } = await supabase.auth.updateUser({
          password: newPassword,
        });

        if (data) alert("Password updated successfully!");
        if (error) alert("There was an error updating your password.");
      }
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const country = countries[Math.floor(Math.random() * countries.length)];
      toast(`Someone from ${country} just invested $${randomAmount()}`);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <Toaster />
      <div className="bg-neutral-900 text-white flex flex-col gap-2 mt-2 p-4">
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
          <Link
            href="/certification"
            className="p-2 w-full bg-green-600 text-center"
          >
            Get Certified
          </Link>
          <button className="p-2 w-full bg-neutral-700">watch the video</button>
        </div>
      </div>

      <div className="bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1641580529558-a96cf6efbc72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] text-white">
        <div className="backdrop-brightness-50 p-4 flex flex-col lg:flex-row gap-2">
          <div className="">
            <p className="text-5xl uppercase">
              start mining
              <span>
                <TypeAnimation
                  sequence={coins}
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
              WealthAid Mining aims to extend business to the entire
              cryptocurrency industry chain in the future and serve global users
              with technology innovations
            </p>
            <button
              onClick={signUp}
              className="rounded bg-green-600 p-3 uppercase my-4"
            >
              start mining
            </button>
          </div>
          <div className="flex w-full">
            <Image
              height={0}
              width={0}
              sizes="100%"
              className="h-30 w-1/2"
              alt="android"
              src="/google.png"
            />

            <Image
              height={0}
              width={0}
              sizes="100%"
              className="h-30 w-1/2"
              alt="android"
              src="/apple.png"
            />
          </div>
        </div>
      </div>
      {/* How It Works */}
      <div className="bg-gray-50 p-4 py-8 text-center">
        <div className="">
          <p className="text-2xl tracking-widest w-2/3 mx-auto text-gray-400 font-light">
            Three steps to getting started
          </p>
          <p className="text-3xl uppercase my-4">how it works</p>
          <div className="h-[1px] bg-green-400 w-1/12 mx-auto"></div>
          <p className="my-4 text-gray-400 text-sm">
            Getting started with WealthAid Mining is as simple as A B C! Simple
            steps to earning maximum profits
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center md:justify-between">
          <div className="p-4 rounded bg-white w-full mx-auto">
            <IoMdCreate className="text-4xl text-green-700 mb-4 w-full" />
            <p className="text-xl capitalize">register account</p>
          </div>
          <div className="p-4 rounded bg-white w-full">
            <TbHandFinger className="text-4xl text-green-700 mb-4 w-full" />
            <p className="text-xl capitalize">choose your plan</p>
          </div>
          <div className="p-4 rounded bg-white w-full">
            <BsCashCoin className="text-4xl text-green-700 mb-4 w-full" />
            <p className="text-xl capitalize">receive payout everyday</p>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-6 flex flex-col gap-5">
        <FeaturesBox />
      </div>

      {/* Space Ship */}
      <div className="bg-neutral-900 h-[100vh] flex flex-col items-center justify-center w-ful gap-4 text-white p-2 py-4 text-center">
        <p className="text-2xl font-bold">WealthAid Mining</p>
        {/* <div className="flex justify-center items-center">
          <iframe
            className=""
            src="https://embed.lottiefiles.com/animation/79966"
          ></iframe>
        </div> */}
        <p className="text-4xl text-green-400 font-bold uppercase">
          Awesome Facts
        </p>
        <p className="text-neutral-100">
          We are not just the best, the numbers speak for us.
        </p>

        <div className="flex flex-col gap-4 md:flex-row items-center justify-center text-center">
          <div className="">
            <p className="text-4xl font-bold text-green-400 mb-1 mt-3">1,322</p>
            <p>Happy Clients</p>
          </div>
          <div className="">
            <p className="text-4xl font-bold text-green-400 mb-1 mt-3">
              513,532
            </p>
            <p>Payouts</p>
          </div>
          <div className="">
            <p className="text-4xl font-bold text-green-400 mb-1 mt-3">70+</p>
            <p>Countries</p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100 h-full">{/* <Calculator /> */}</div>
      <div className="w-full mb-8 bg-neutral-900 text-white py-8">
        <p className="mb-8 text-2xl uppercase text-center">Why choose us?</p>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 w-4/5 mx-auto justify-center">
          {/* Code Here */}
          {features.map((feature, index) => (
            <Feature {...feature} key={index} />
          ))}
        </div>
      </div>

      <FeaturesBox minerHosting={true} />

      {/* Plans */}
      <div className="my-4">
        <div className="text-center">
          <p className="font-medium text-2xl my-2 capitalize">
            choose mining plan
          </p>
          <p className="text-sm mb-4 w-4/5 mx-auto">
            Your hardware is already running, find a plan that's right for you
            (Hashrate Converter)
          </p>
        </div>

        <Plans plans={plans} />
      </div>

      <Reviews />

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
    </main>
  );
}
