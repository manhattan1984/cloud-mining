import Image from "next/image";
import React from "react";
import Divider from "../(components)/Divider";
import Footer from "../(components)/Footer";
import DataCenter from "../../public/datacenter.jpeg";
import Power from "../../public/power.jpeg";
import Security from "../../public/security.jpeg";
import Team from "../../public/team.jpeg";
// import Cool from "../../public/cooling.mp4";
// import Server from "../../public/server.mp4";
import { BiBuilding, BiPowerOff } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";
import { WiSnowflakeCold } from "react-icons/wi";
import { GoServer } from "react-icons/go";

const dataItems = [
  {
    icon: <BiBuilding className="text-green-700" />,
    name: "Data Center Location",
    body: "Our Mining Data Centers are located in Kazakhstan",
    image: <Image className="w-full" alt="data center" src={DataCenter} />,
  },
  {
    icon: <BiPowerOff className="text-green-700" />,
    name: "Power System",
    body: "We use Hydropower & Wind power,  0.05 $/kWh",
    image: <Image className="w-full" alt="data center" src={Power} />,
  },
  {
    icon: <GoServer className="text-green-700" />,
    name: "Data Center Hardware",
    body: "The newest ASIC miner, GPU rigs are Ready to mine.",
    image: (
      <video className="w-full" autoPlay={true} controls>
        <source src="/cooling.mp4" />
      </video>
    ),
  },
  {
    icon: <WiSnowflakeCold className="text-green-700 text-2xl" />,
    name: "Cooling System",
    body: "Air cooling system and Water cooling system keeping temperature: 20-24°C.",
    image: (
      <video className="w-full" autoPlay={true} controls={true}>
        <source src="/server.mp4" />
      </video>
    ),
  },
  {
    icon: <GoServer className="text-green-700" />,
    name: "Security/Fire Protection",
    body: "24/7 on-site guards, intrusion detection systems, IP-DVR cameras",
    image: <Image className="w-full" alt="data center" src={Security} />,
  },
  {
    icon: <AiOutlineTeam className="text-green-700" />,
    name: "Our Team",
    body: "Our mining team come from in blockchain industry and IT engineers.",
    image: <Image className="w-full" alt="data center" src={Team} />,
  },
];

// @ts-ignore
const DataCenterItem = ({ icon, name, body, image }) => {
  return (
    <div className="my-4 basis-1/4">
      <div className="w-11/12 mx-auto">
        <div className="flex gap-2 items-center text-xl">
          {icon}
          <p className="">{name}</p>
        </div>
        <p className="mb-2">{body}</p>
      </div>
      {image}
    </div>
  );
};

const page = () => {
  return (
    <div className="">
      <div className="w-11/12 mx-auto">
        <p className="text-3xl my-4">About Us</p>
        <Divider />

        <p className="my-2 font-light">
          WealthAid Mining was founded in 2018. <br /> We've developed the world's
          Top Cloud Mining Platform with the most advanced deployment
          technology, More new product and services are in our pipeline.
        </p>

        <p className="text-3xl my-4">Our Team</p>
        <Divider />
        <p className="my-2 font-light">
          Most of WealthAid Mining team are from top dotcom companies. Over half of
          our team are R&D division who possess rich technological prowess.
        </p>

        <p className="text-3xl my-4">Our Vision</p>
        <Divider />
        <p className="my-2 font-light">
          WealthAid Mining aims to extend our business to the entire cryptocurrency
          industry chain in the future and serve global users with technology
          innovations.
        </p>
      </div>
      <div className="">
        <div className="w-11/12 mx-auto">
          <p className="text-3xl my-2">Our Data Center</p>
          <Divider />
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:justify-center">
          {dataItems.map((item, index) => (
            <DataCenterItem {...item} key={index} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default page;
