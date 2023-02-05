import React from "react";
import Divider from "../(components)/Divider";
import Footer from "../(components)/Footer";
import Header from "../(components)/Header";

const page = () => {
  return (
    <div className="">
      <Header />
      <div className="w-11/12 mx-auto">
        <p className="text-3xl my-4">About Us</p>
        <Divider />

        <p className="my-2 font-light">
          Zipoaidmining was founded in 2018. <br /> We've developed the world's
          Top Cloud Mining Platform with the most advanced deployment
          technology, More new product and services are in our pipeline.
        </p>

        <p className="text-3xl my-4">Our Team</p>
        <Divider />
        <p className="my-2 font-light">
          Most of Zipoaidmining team are from top dotcom companies. Over half of
          our team are R&D division who possess rich technological prowess.
        </p>

        <p className="text-3xl my-4">Our Vision</p>
        <Divider />
        <p className="my-2 font-light">
          Zipoaidmining aims to extend our business to the entire cryptocurrency
          industry chain in the future and serve global users with technology
          innovations.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default page;
