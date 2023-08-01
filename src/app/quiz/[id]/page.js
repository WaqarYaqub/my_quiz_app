"use client";
import React from "react";
import Quiz from "@/components/Quiz";
import TASKS from "@/data/task";

const QuizPage = ({ params }) => {
  const { id } = params;
  const task = TASKS?.find((task) => task.id === Number(id));

  return <Quiz task={task} />;
};

export default QuizPage;
