import React from "react";
import Divider from "../(components)/Divider";
import Footer from "../(components)/Footer";
import Header from "../(components)/Header";
import Plan from "../(components)/Plan";

const page = () => {
  return (
    <div>
      <Header />
      <div className="w-11/12 mx-auto">
        <p className="text-3xl my-2">Our Plans</p>
        <Divider />
        <div className="flex flex-col gap-4 my-4">
          {[1, 2, 3, 4].map((index) => (
            <Plan key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
