import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import QuizHeader from "../QuizHeader";
import TOPICS from "@/data/topics";

const Quiz = ({ task }) => {
  const router = useRouter();
  const [currentTopic, setCurrentTop] = useState();
  useEffect(() => {
    setCurrentTop(TOPICS?.find((item) => item?.taskIds?.includes(task?.id)));
  }, []);
  console.log(currentTopic, "currentTopic");

  return (
    <>
      <QuizHeader topic={currentTopic?.title} task={task?.name} />
      {/* <div className="mx-auto max-w-screen-sm md:max-w-screen-md">
        <div className="rounded-[12px] grid-cols-1 md:grid-cols-2 flex justify-between items-center bg-white h-[148px] px-[26px] py-[36px]">
          <div className="flex gap-[28px] items-center">
            <img
              onClick={() => router.back()}
              src="/images/back.svg"
              className="cursor-pointer"
            />
            <p>{`${currentTopic?.title} ${task?.name}`}</p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Quiz;
