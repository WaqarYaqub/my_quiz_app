import React from "react";
import Link from "next/link";

const CircleProgressBar = ({ item }) => {
  return (
    <div className="cursor-pointer flex flex-col justify-center items-center mb-[30px] md:mb-[10px]">
      <Link href={`/topic/${item?.id}`}>
        <img className="w-[96px] h-[96px]" src={item?.imageUrl} />
        <p className="text-center font-rubik text-[16px] font-normal leading-140 tracking-tighter text-[#16191F] mt-[16px]">
          {item?.title}
        </p>
      </Link>
    </div>
  );
};

export default CircleProgressBar;
