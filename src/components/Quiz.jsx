import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {UserAnswerCtx} from '../store/user-answer-context'

import Question from './Question';
const Quiz = ({ questions, path }) => {
  
  const {userAnswer, handleSkip, handleUserAnswer } = useContext(UserAnswerCtx)
  

  const navigate = useNavigate();

  
  const activeQuestionIndex = userAnswer.length;

 

  

  const currentQuestion = questions[activeQuestionIndex];

  if(questions.length === userAnswer.length){
    navigate(`/${path}/summary`)
  }
  console.log(userAnswer);

  console.log('%cparent re rendering' , "color:red; border: 1px solid red;");
  return (
   <>
     <div className="w-3/6 min-w-[350px]  mx-auto bg-[#4169e1] min-h-[55rem] p-5 space-y-14 rounded-3xl text-[#dfdcdc]  ">
      <Question 
      key={activeQuestionIndex}
      handleSkip={handleSkip}
    currentQuestion={currentQuestion}
    handleUserAnswer={handleUserAnswer}
    questions={questions}


      />
     
    </div>
    
   </>
  );
};

export default Quiz;
