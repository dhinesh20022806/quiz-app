import React from 'react';
import ProgressBar from './ProgressBar';
import Answer from './Answer';

const Question = () => {
  return (
    <>
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
          {questions[activeQuestionIndex]?.text || 'loading..'}
        </h1>

        <Answer
          answers={questions[activeQuestionIndex]?.answers}
          onClick={handleAnswer}
          onSkip={handleSkipAnswer}
        />
      </div>
    </>
  );
};

export default Question;
