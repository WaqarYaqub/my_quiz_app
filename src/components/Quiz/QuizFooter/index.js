import React from "react";
import { useRouter } from "next/navigation";

const QuizFooter = ({
  handleSubmit,
  handleNext,
  userSelectedAns,
  isSubmitted,
  isAnswerCorrect,
  correctAnswer,
}) => {
  const router = useRouter();

  const handleClick = (isSubmit) => {
    if (isSubmit) {
      handleNext();
    } else {
      handleSubmit();
    }
  };

  return (
    <div
      className={`${
        isSubmitted && isAnswerCorrect
          ? "bg-[#DEF8E8]"
          : isSubmitted && !isAnswerCorrect
          ? "bg-[#F9E5E5]"
          : "bg-white"
      } backdrop-blur backdrop-blur-20 sticky bottom-0 left-0 right-0`}
    >
      <hr className="bg-[#E4E5E8]" />

      <header
        className={`${
          isSubmitted && isAnswerCorrect
            ? "bg-[#DEF8E8]"
            : isSubmitted && !isAnswerCorrect
            ? "bg-[#F9E5E5]"
            : "bg-white"
        } py-[20px] px-[30px] h-auto text-center flex justify-between items-center mx-auto max-w-screen-sm md:max-w-screen-xl`}
      >
        {isSubmitted ? (
          isAnswerCorrect ? (
            <div className="flex items-center gap-[8px]">
              <img src="/icons/check-circle.svg" />
              <p className="font-[20px] font-rubik font-bold text-[#09B24C] leading-150 tracking-loss">
                {"You’re Correct!"}
              </p>
            </div>
          ) : (
            <div className="flex items-center gap-[8px]">
              <img src="/icons/close-circle.svg" />
              <div className="flex flex-wrap flex-col items-start">
                <p className="font-[20px] font-rubik font-bold text-[#EC3D3C]">
                  {"Oops... You’re Wrong!"}
                </p>
                <p className="font-[14px] font-rubik font-normal text-[#484C54]">
                  {`Correct Answer:  ${correctAnswer}`}
                </p>
              </div>
            </div>
          )
        ) : (
          <button
            onClick={() => router.back()}
            className={`border-[1px] border-[#16191F] px-[16px] py-2 rounded-[16px] w-[128px] bg-white text-[#16191F] text-[14px]`}
          >
            Skip
          </button>
        )}

        <button
          className={`px-4 py-2 rounded-lg ${
            userSelectedAns
              ? isSubmitted && isAnswerCorrect
                ? "bg-[#09B24C] text-white px-[16px] py-2 rounded-[16px] w-[128px]"
                : isSubmitted && !isAnswerCorrect
                ? "bg-[#EC3D3C] text-white px-[16px] py-2 rounded-[16px] w-[128px]"
                : "bg-blue-500 text-white px-[16px] py-2 rounded-[16px] w-[128px]"
              : "px-[16px] py-2 rounded-[16px] w-[128px] bg-gray-300 text-gray-800 cursor-not-allowed"
          }`}
          disabled={!userSelectedAns}
          onClick={() => handleClick(isSubmitted)}
        >
          {isSubmitted ? "Continue" : "Submit"}
        </button>
      </header>
    </div>
  );
};

export default QuizFooter;
