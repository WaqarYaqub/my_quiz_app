import React from "react";
import { useRouter } from "next/navigation";

const QuizFooter = ({ handleNext, userSelectedAns }) => {
  const router = useRouter();

  return (
    <div className="backdrop-blur backdrop-blur-20 sticky bottom-0 left-0 right-0">
      <hr className="bg-[#E4E5E8]" />

      <header className="px-[30px] bg-white h-[78px] text-center flex justify-between items-center mx-auto max-w-screen-sm md:max-w-screen-xl">
        <button
          onClick={() => router.back()}
          className={`border-[1px] border-[#16191F] px-[16px] py-2 rounded-[16px] w-[128px] bg-white text-[#16191F] text-[14px]`}
        >
          Skip
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            userSelectedAns
              ? "bg-blue-500 text-white px-[16px] py-2 rounded-[16px] w-[128px]"
              : "px-[16px] py-2 rounded-[16px] w-[128px] bg-gray-300 text-gray-800 cursor-not-allowed"
          }`}
          disabled={!userSelectedAns}
          onClick={handleNext}
        >
          Submit
        </button>
      </header>
    </div>
  );
};

export default QuizFooter;
