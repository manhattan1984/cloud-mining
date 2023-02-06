import React from "react";
import Divider from "./Divider";
import Plan from "./Plan";

const Plans = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <p className="text-3xl my-2">Our Plans</p>
        <Divider />
        <div className="flex flex-col gap-4 my-4">
          {[1, 2, 3, 4].map((index) => (
            <Plan key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
