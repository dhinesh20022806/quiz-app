import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Answer from "./Answer";
import { Navigate, useNavigate } from "react-router-dom";

// FIXME timer key not working 

const Quiz = ({ questions, path }) => {
  const [userAnswer, setUserAnswer] = useState([]);
  const [verifyAnswer, setVerifyAnswer] = useState({
    selectedAnswer:undefined,
    isCorrect:null,
  })

  let timer = 15 * 1000;

  const naviagte = useNavigate();

  const activeQuestionIndex = userAnswer.length;
  console.log(activeQuestionIndex);

  const handleAnswer = (answer) => {

    setTimeout(()=>{
      setVerifyAnswer({
        selectedAnswer:answer,
        isCorrect:null
      })

      setTimeout(()=>{
          setVerifyAnswer({
            selectedAnswer:answer,
            isCorrect: questions[activeQuestionIndex].answers[0] === answer,
          })

          setUserAnswer((prev) => {
            return [...prev, answer];
          });
          
      }, 8 * 1000)

    }, 5 * 1000)
    console.log(answer);
    
  };

  const handleSkipAnswer = ()=>{
    setUserAnswer(prev => {
      return ([...prev, null])
    })
  }

  if ( activeQuestionIndex === 0 && !questions[activeQuestionIndex]) {
    return <p>LOading...</p>;
  }
  if (activeQuestionIndex > 0 && activeQuestionIndex === questions.length){
    return naviagte(`/${path}/summary`)
  }

  if(verifyAnswer.selectedAnswer !== undefined && verifyAnswer.isCorrect === null ){
    timer = 5 * 1000;
  }

  if(verifyAnswer.selectedAnswer !== undefined && verifyAnswer.isCorrect !== null){
    timer = 8 * 1000;
  }
  console.log(userAnswer);

  return (
    <div className="xs:max-w-[50vw] xxs:max-w-[300px] py-5 xs:px-5 xxs:px-2 min-w-[375px] bg-green-600  min-h-[45vh] rounded-lg mx-auto my-[5%]">
      <div className="w-[90%] mx-auto py-10">
        {!!questions[activeQuestionIndex]?.text && (
          <ProgressBar
            key={activeQuestionIndex}
            timer={timer}
            onSkip={handleSkipAnswer}
          />
        )}
      </div>
      <div>
        <h1 className="text-2xl  text-center mb-5 font-lato font-black text-white tracking-wide">
          {questions[activeQuestionIndex]?.text || "loading.."}
        </h1>

        <Answer
          answers={questions[activeQuestionIndex]?.answers}
          onClick={handleAnswer}
          onSkip={handleSkipAnswer}
        />
      </div>
    </div>
  );
};

export default Quiz;
