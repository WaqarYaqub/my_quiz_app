"use client";
import React from "react";
import Topic from "@/components/Topic";
import Header from "@/components/Header";
import TOPICS from "@/data/topics";

const TopicPage = ({ params }) => {
  const { id } = params;
  const topic = TOPICS?.find((topic) => topic.id === Number(id));

  if (!topic) {
    return <div>Topic not found.</div>;
  }
  return (
    <>
      <Header />
      <div className="pt-[50px] bg-gray-100 min-h-screen">
        <Topic topic={topic} />
      </div>
    </>
  );
};

export default TopicPage;
