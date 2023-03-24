import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Image
        src="/wealthaidcertification.png"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100%"
      />
    </div>
  );
};

export default page;
