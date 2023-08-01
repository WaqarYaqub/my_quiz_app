import React from "react";
import ProgressBar from "../ProgressBar";
import TOPICS_PERFORMANCE from "@/data/topicsPerformance";
import TOPICS from "@/data/topics";
import Topic from "./topic";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-[70px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[23px] p-[15px] md:p-[0px] mx-auto max-w-screen-sm md:max-w-screen-lg">
        <div className="relative bg-white md:col-span-2 px-[28px] py-[28px]">
          <span className="absolute right-[10px] top-[50px] md:right-[40px] md:top-[40px]">
            <img src="/images/handRais.svg" />
          </span>
          <p className="m-0 p-0 font-rubik text-[36px] font-normal leading-140 tracking-tighter text-[#16191F]">
            Welcome to Quiz,
          </p>
          <p className="m-0 p-0 font-rubik text-[36px] font-bold leading-140 tracking-tighter text-[#16191F]">
            Johann!
          </p>
          <p className="font-rubik text-[18px] font-normal leading-140 tracking-tighter text-[#62666E]">
            You're still <strong>ON TARGET</strong>. Your progress is currently
            at 90% for completing the entire quiz.
          </p>
          <div className="my-[51px] mx-auto flex justify-center items-center grid grid-cols-1 md:grid-cols-3">
            {TOPICS?.map((item, index) => {
              return <Topic item={item} key={index} />;
            })}
          </div>

          <div class="flex border border-1 border-[#E4E5E8] items-center justify-between px-[28px] py-[24px] rounded-lg">
            <div class="flex flex-col">
              <p className="font-rubik text-[24px] font-bold leading-140 tracking-tighter text-[#16191F]">
                Final Exam
              </p>
              <p className="font-rubik text-[14px] font-normal leading-140 tracking-tighter text-[#62666E]">
                Complete all quizzes to unlock the final exam
              </p>
            </div>

            <button
              disabled
              class="blur flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              <img
                src="/images/password.svg"
                class="w-6 h-6 mr-2"
                alt="Image Alt Text"
              />
              <span className="font-rubik text-[18px] font-normal leading-140 tracking-tighter text-white">
                Click Me
              </span>
            </button>
          </div>
        </div>

        <div className="bg-white px-[18px] py-[28px]">
          <div className="mb-[20px]">
            <div className="flex justify-between">
              <p className="text-[16px] text-[#16191F] font-bold font-rubik">
                Your Performance
              </p>
              <u className="text-[16px] text-[#16191F] font-bold font-rubik">
                See All
              </u>
            </div>
            <p className="text-[14px] text-[#62666E] font-normal font-rubik">
              See which topics you are doing the <br /> best in below.
            </p>
          </div>
          <div>
            {TOPICS_PERFORMANCE?.map((item, index) => {
              return (
                <div key={index}>
                  <p className="mb-[12px] text-[16px] text-[#16191F] font-normal font-rubik">
                    {item?.title}
                  </p>
                  <ProgressBar percentage={item?.percentage} />
                  <hr
                    className={`${
                      item?.title === "Weight & Balance" && "hidden"
                    } border-gray-300 mt-[12px]`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
