import React from "react";
import Link from "next/link";

const CircleProgressBar = ({ item }) => {
  return (
    <div className="vcursor-pointer flex flex-col justify-center items-center mb-[30px] md:mb-[10px]">
      <Link href={`/topic/${item?.id}`}>
        <img className="w-[90px] h-[90px]" src={item?.imageUrl} />
      </Link>

      <p className="text-center font-rubik text-[16px] font-normal leading-140 tracking-tighter text-[#16191F] mt-[16px]">
        {item?.title}
      </p>
    </div>
  );
};

export default CircleProgressBar;
