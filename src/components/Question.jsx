import  { useState } from 'react';
import ProgressBar from './ProgressBar';
import Answer from './Answer';

const Question = ({activeQuestionIndex, questions,handleSkipAnswer, handleUserAnswer }) => {
  const [verifyAnswer, setVerifyAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 15 * 1000;

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
          selectedAnswer: "",
          isCorrect: null,
        });

        handleUserAnswer(answer)

       
      }, 8 * 1000);
    }, 5 * 1000);
    console.log(answer);
  };

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

  return (
    <>
      <div className="w-[90%] mx-auto py-10">
        {!!questions[activeQuestionIndex]?.text && (
          <ProgressBar
            key={timer}
            timer={timer}
            onSkip={verifyAnswer.selectedAnswer === "" ?  handleSkipAnswer : null}
          />
        )}
      </div>
      <div>
        <h1 className="text-2xl  text-center mb-5 font-lato font-black text-white tracking-wide">
          {questions[activeQuestionIndex]?.text || 'loading..'}
        </h1>

        <Answer
        key={questions[activeQuestionIndex]?.text}
          answers={questions[activeQuestionIndex]?.answers}
          onClick={handleAnswer}
          onSkip={handleSkipAnswer}
          selectedAnswer={verifyAnswer.selectedAnswer}
        />
      </div>
    </>
  );
};

export default Question;
