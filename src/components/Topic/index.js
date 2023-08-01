import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TASKS from "@/data/task";
import QUESTIONS from "@/data/questions";

const Topic = ({ topic }) => {
  const router = useRouter();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(TASKS?.filter((task) => task?.topicId === topic?.id));
  }, [topic?.id]);

  console.log(tasks, "tasks");

  return (
    <div className="mx-auto max-w-screen-sm md:max-w-screen-md">
      <div className="rounded-[12px] grid-cols-1 md:grid-cols-2 flex justify-between items-center bg-white h-[148px] px-[26px] py-[36px]">
        <div className="flex gap-[28px] items-center">
          <img
            onClick={() => router.back()}
            src="/images/back.svg"
            className="cursor-pointer"
          />
          <img className="w-[90px] h-[90px]" src={topic?.imageUrl} />
          <div>
            <p className="font-rubik text-[20px] font-bold leading-140 tracking-tighter text-[#16191F]">
              {topic?.title}
            </p>
            <p className="mt-1 font-rubik text-[14px] font-normal leading-140 tracking-tighter text-[#484C54]">
              {`${tasks?.length} quiz added`}
            </p>
          </div>
        </div>
        <div>
          <p
            className={`${
              !tasks?.some((item) => item?.taken)
                ? "bg-orange-500"
                : "bg-[#0AC655]"
            } py-[3px] px-[12px] rounded-2xl text-white text-[14px]`}
          >
            {tasks?.every((item) => item?.taken)
              ? "Completed"
              : tasks?.some((item) => item?.taken)
              ? "In Progress"
              : "Not Started"}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[16px] mt-[28px]">
        {tasks?.map((item) => {
          let questionCount = QUESTIONS?.filter(
            (ques) => ques?.taskId === item?.id
          )?.length;
          return (
            <div className="rounded-[12px] grid-cols-1 md:grid-cols-2 flex justify-between items-center bg-white h-[100px] w-full px-[26px] py-[36px]">
              <div className="flex gap-[28px] items-center">
                {item?.taken && (
                  <div
                    className={`${
                      !questionCount && "hidden"
                    } w-[50px] h-[50px] ${
                      item?.score < 33
                        ? "bg-[#DE0606]"
                        : item?.score < 66
                        ? "bg-[#FCC22E]"
                        : "bg-[#0AC655]"
                    } rounded-[50px] text-white text-[14px] flex justify-center items-center`}
                  >
                    <span className="font-rubik text-[20px] font-bold leading-140 tracking-tighter text-[#FFF]">
                      {item?.score}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-rubik text-[20px] font-bold leading-140 tracking-less text-[#16191F]">
                    {item?.name}
                  </p>
                  <p className="mt-1 font-rubik text-[14px] font-normal leading-140 tracking-tighter text-[#484C54]">
                    {`${questionCount}  questions`}
                  </p>
                </div>
              </div>
              <div>
                <Link href={`/quiz/${item?.id}`}>
                  <button
                    disabled={!questionCount}
                    className={`${
                      questionCount ? "" : "blur"
                    } h-[40px] w-[114px] bg-[#007DEE] py-[3px] px-[16px] rounded-[12px] text-bold text-[#FFF] text-[14px]`}
                  >
                    {item?.taken ? "Retake Quiz" : "Take Quiz"}
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Topic;
