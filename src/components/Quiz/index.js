import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import getLetter from "@/utils";
import QuizHeader from "./QuizHeader";
import QUESTIONS from "@/data/questions";
import QuizFooter from "./QuizFooter";

const Quiz = ({ task }) => {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userSelectedAns, setUserSelectedAns] = useState(null);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [isSubmitted, setSubmitted] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  useEffect(() => {
    setQuestions(QUESTIONS?.filter((item) => item?.taskId === task?.id));
  }, []);

  const handleItemClick = (e, { name }) => {
    if (!isSubmitted) {
      setUserSelectedAns(name);
      const currentQuestion = questions[questionIndex];

      setIsAnswerCorrect(name === currentQuestion?.answer);
      setCorrectAnswer(currentQuestion?.answer);
    }
  };

  const handleSubmit = () => {
    const currentQuestion = questions[questionIndex];
    setIsAnswerCorrect(userSelectedAns == currentQuestion?.answer);
    const point = isAnswerCorrect ? 1 : 0;

    const qna = questionsAndAnswers;
    qna.push({
      question: currentQuestion.question,
      user_answer: userSelectedAns,
      correct_answer: currentQuestion?.answer,
      point,
    });
    setSubmitted(true);

    setQuestionsAndAnswers(qna);
  };
  const handleNext = () => {
    if (questionIndex === questions.length - 1) {
      const result = JSON.stringify(questionsAndAnswers);

      localStorage.setItem("result", result);
      router.push(`/quiz-completed/${task?.id}`);
    }

    setQuestionIndex(questionIndex + 1);
    setUserSelectedAns(null);
    setSubmitted(false);
    setCorrectAnswer(null);
  };

  return (
    <>
      <QuizHeader topic={task?.topic?.title} task={task?.name} />
      <div className="text-[#16191F] text-center pt-[40px] px-4 text-[28px] font-rubik font-normal">
        <b>{`Q. ${questions[questionIndex]?.question}` || ""}</b>
      </div>

      <div className="mb-[100px] bg-white h-full grid grid-cols-1 md:grid-cols-2 gap-[0px] p-[15px] md:p-[0px] mx-auto max-w-screen-sm md:max-w-screen-xl">
        <div className="p-8 flex">
          <img
            className="rounded-[20px] w-full h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvpS7gufmnRNJXQbAZM6d07J2wG_9cQi3TnQ&usqp=CAU"
          />
        </div>
        {questions?.length > 0 && (
          <div className="p-8">
            <p className="text-[#16191F] py-2 px-4 text-[20px] font-rubik font-bold mb-4">
              {`Question No.${questionIndex + 1} of ${questions.length}`}
            </p>
            <div className="mt-4">
              <div className="mt-4">
                <div className="flex flex-col gap-[20px]">
                  {questions[questionIndex]?.options?.map((option, i) => {
                    const letter = getLetter(i);
                    let selected = userSelectedAns === option;

                    return (
                      <div
                        key={option}
                        onClick={(e) => handleItemClick(e, { name: option })}
                        className={`p-[20px] cursor-pointer flex justify-between items-center h-[71px] rounded-[12px] ${
                          selected
                            ? isSubmitted && isAnswerCorrect
                              ? "border-[3px] border-[#09B24C]"
                              : isSubmitted && !isAnswerCorrect
                              ? "border-[3px] border-[#EC3D3C]"
                              : "border-[3px] border-[#007DEE]"
                            : "border-[2px] border-[#E4E5E8]"
                        } bg-neutral-white box-shadow-md p-4`}
                      >
                        <div className="flex items-center">
                          <p
                            className={`flex justify-center items-center text-[12px] w-[29px] h-[29px] rounded-[8px] ${
                              selected
                                ? isSubmitted && isAnswerCorrect
                                  ? "bg-[#09B24C] text-white"
                                  : isSubmitted && !isAnswerCorrect
                                  ? "bg-[#EC3D3C] text-white"
                                  : "bg-[#007DEE] text-white"
                                : "bg-[#E4E5E8] text-[#16191F]"
                            } text-center font-normal`}
                          >
                            {letter}
                          </p>
                          <p
                            className={`ml-[16px] ${
                              selected
                                ? isSubmitted && isAnswerCorrect
                                  ? "text-[#09B24C] font-bold"
                                  : isSubmitted && !isAnswerCorrect
                                  ? "text-[#EC3D3C] font-bold"
                                  : "text-[#007DEE] font-bold"
                                : "text-[#16191F]"
                            } font-rubik text-base font-normal leading-160`}
                          >
                            {option}
                          </p>
                        </div>
                        {selected && (
                          <img
                            src={`/icons/${
                              isSubmitted && isAnswerCorrect
                                ? "green"
                                : isSubmitted && !isAnswerCorrect
                                ? "red"
                                : "blue"
                            }-check-line.svg`}
                            alt="Image"
                            className="ml-auto"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <QuizFooter
        userSelectedAns={userSelectedAns}
        handleSubmit={handleSubmit}
        handleNext={handleNext}
        isSubmitted={isSubmitted}
        isAnswerCorrect={isAnswerCorrect}
        correctAnswer={correctAnswer}
      />
    </>
  );
};

export default Quiz;
