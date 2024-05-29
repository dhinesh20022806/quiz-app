import React, { useState, useCallback } from "react";
import ProgressBar from "./ProgressBar";
import Answer from "./Answer";
import { Navigate, useNavigate } from "react-router-dom";
import Question from "./Question";

// FIXME timer key not working

const Quiz = ({ questions, path }) => {
  const [userAnswer, setUserAnswer] = useState([]);
 


  const naviagte = useNavigate();

  const activeQuestionIndex = userAnswer.length;
  console.log(activeQuestionIndex);

  const handleUserAnswer = (answer)=>{
    setUserAnswer(prev => {
      return [...prev, answer];
    });
  }

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

  console.log(userAnswer);

  console.log('%cparent re rendering' , "color:red; border: 1px solid red;");
  return (
    <div
     className="xs:max-w-[50vw] xxs:max-w-[300px] py-5 xs:px-5 xxs:px-2 min-w-[375px] bg-green-600  min-h-[45vh] rounded-lg mx-auto my-[5%]">
      <Question
        key={activeQuestionIndex}
        activeQuestionIndex={activeQuestionIndex}
        questions={questions}
        handleSkipAnswer={handleSkipAnswer}
        handleUserAnswer={handleUserAnswer}
      />
    </div>
  );
};

export default Quiz;
