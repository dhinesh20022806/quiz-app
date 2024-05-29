import React, { useState, useCallback } from "react";
import ProgressBar from "./ProgressBar";
import Answer from "./Answer";
import { Navigate, useNavigate } from "react-router-dom";
import Question from "./Question";

// FIXME timer key not working

const Quiz = ({ questions, path }) => {
  const [userAnswer, setUserAnswer] = useState([]);
  const [verifyAnswer, setVerifyAnswer] = useState({
    selectedAnswer: undefined,
    isCorrect: null,
  });

  let timer = 15 * 1000;

  const naviagte = useNavigate();

  const activeQuestionIndex = userAnswer.length;
  console.log(activeQuestionIndex);

  const handleAnswer = answer => {
    setVerifyAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setVerifyAnswer({
        selectedAnswer: answer,
        isCorrect:
          questions[activeQuestionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        setVerifyAnswer({
          selectedAnswer: undefined,
          isCorrect: null,
        });

        setUserAnswer(prev => {
          return [...prev, answer];
        });
      }, 8 * 1000);
    }, 5 * 1000);
    console.log(answer);
  };

  const handleSkipAnswer = useCallback(() => {
    setUserAnswer(prev => {
      return [...prev, null];
    });
  }, []);

  if (
    activeQuestionIndex === 0 &&
    !questions[activeQuestionIndex]
  ) {
    return <p>LOading...</p>;
  }
  if (
    activeQuestionIndex > 0 &&
    activeQuestionIndex === questions.length
  ) {
    naviagte(`/${path}/summary`);
  }

  if (
    verifyAnswer.selectedAnswer !== undefined &&
    verifyAnswer.isCorrect === null
  ) {
    timer = 5 * 1000;
  }

  if (
    verifyAnswer.selectedAnswer !== undefined &&
    verifyAnswer.isCorrect !== null
  ) {
    timer = 8 * 1000;
  }
  console.log(userAnswer);

  return (
    <div
     className="xs:max-w-[50vw] xxs:max-w-[300px] py-5 xs:px-5 xxs:px-2 min-w-[375px] bg-green-600  min-h-[45vh] rounded-lg mx-auto my-[5%]">
      <Question
        key={activeQuestionIndex}
        activeQuestionIndex={activeQuestionIndex}
      />
    </div>
  );
};

export default Quiz;
