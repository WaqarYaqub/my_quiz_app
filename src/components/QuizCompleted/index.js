import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import TASKS from "@/data/task";
import QuizHeader from "@/components/Quiz/QuizHeader";

const QuizCompleted = ({ result, taskId }) => {
  const [report, setReport] = useState({ total: 0, correct: 0, wrong: 0 });
  const [currentTask, setCurrentTask] = useState({});

  useEffect(() => {
    setReport({
      total: result?.length,
      correct: result?.filter((item) => item?.point)?.length,
      wrong: result?.filter((item) => !item?.point)?.length,
    });
    setCurrentTask(TASKS?.find((item) => item?.id === taskId));
  }, [result]);
  const percentage = (report?.correct / report?.total) * 100;

  return (
    <>
      <QuizHeader topic={currentTask?.topic?.title} task={currentTask?.name} />
      <div className="h-[100vh] md:h-[90vh] mx-auto max-w-screen-sm md:max-w-screen-lg">
        <div className="h-full grid-cols-1 flex flex-col justify-center items-center">
          <div className="mb-[60px]">
            <p className="text-[#16191F] text-center text-[24px] font-rubik font-bold">
              {`${currentTask?.topic?.title} ${currentTask?.name} Completed!` ||
                ""}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mb-[60px]">
            <div className="relative">
              <div className="absolute top-14 -right-5">
                <img src="/icons/emoji.svg" />
              </div>
              <img src="/chart.png" />

              <div class="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4">
                <p className="text-[#16191F] text-center text-[40px] font-rubik font-bold">
                  {`${percentage} %`}
                </p>
              </div>
            </div>
            <p className="text-[#484C54] text-center px-4 text-[16px] font-rubik font-normal">
              {`Congratulation! You become an ${
                percentage <= 40
                  ? "Beginner"
                  : percentage <= 80
                  ? "Intermediate"
                  : "Expert"
              }`}
            </p>
          </div>
          <div className="mx-[20px] w-full md:w-auto p-[10px] md:p-[20px] rounded-[20px] border-[1px] border-[#E4E5E8] gap-[20px] grid grid-cols-1 md:grid-cols-3 flex items-center justify-between">
            <div className="flex md:flex-col gap-2 justify-between md:justify-center items-center">
              <p className="text-[#62666E] text-center px-4 text-[14px] font-rubik font-normal">
                Total Question
              </p>
              <p className="text-[#16191F] text-center px-4 text-[24px] font-rubik font-normal">
                {report?.total}
              </p>
            </div>
            <div className="py-[10px] md:px-[20px] md:py-[0px] border-b-2 border-t-2 md:border-b-0 md:border-t-0 border-l-0 md:border-l-2 border-r-0 md:border-r-2 border-[##E4E5E8] flex md:flex-col gap-2 justify-between md:justify-center items-center">
              <p className="flex gap-1 text-[#62666E] text-center px-4 text-[14px] font-rubik font-normal">
                <img
                  className="w-[20px] h-[20px]"
                  src="/icons/check-circle.svg"
                />
                Correct
              </p>
              <p className="text-[#16191F] text-center px-4 text-[24px] font-rubik font-normal">
                {report?.correct}
              </p>
            </div>
            <div className="flex md:flex-col gap-2 justify-between md:justify-center items-center">
              <p className="flex gap-1 text-[#62666E] text-center px-4 text-[14px] font-rubik font-normal">
                <img
                  className="w-[20px] h-[20px]"
                  src="/icons/close-circle.svg"
                />
                Wrong
              </p>
              <p className="text-[#16191F] text-center px-4 text-[24px] font-rubik font-normal">
                {report?.wrong}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuizCompleted;
