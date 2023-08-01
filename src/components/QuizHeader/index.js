import React from "react";
import { useRouter } from "next/navigation";

const QuizHeader = ({ topic, task }) => {
  const router = useRouter();

  return (
    <>
      <header className="h-[78px] text-center flex justify-between items-center mx-auto max-w-screen-sm md:max-w-screen-xl">
        <div>
          <img
            onClick={() => router.back()}
            src="/icons/close.svg"
            className="cursor-pointer"
          />
        </div>

        <p className="font-rubik text-[20px] font-bold leading-140 tracking-less text-[#16191F]">
          {topic}
          <span className="font-rubik text-[12px] ml-[8px] py-[2px] px-[8px] font-bold leading-140 tracking-less  bg-[#007DEE] rounded-[50px] text-white text-[14px]">
            {task}
          </span>
        </p>
        <p></p>
      </header>
      <hr className="bg-[#E4E5E8]" />
    </>
  );
};

export default QuizHeader;
