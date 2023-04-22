"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      alt="Avator"
      className="rounded-full"
      height={30}
      width={30}
      src={"/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
