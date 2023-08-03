"use client";
import QuizCompleted from "@/components/QuizCompleted";
import React, { useEffect, useState } from "react";

const QuizCompletedPage = ({ params }) => {
  const [result, setResult] = useState([]);
  const { taskId } = params;

  useEffect(() => {
    setResult(JSON.parse(localStorage.getItem("result")));
  }, []);

  return <QuizCompleted taskId={Number(taskId)} result={result} />;
};

export default QuizCompletedPage;
