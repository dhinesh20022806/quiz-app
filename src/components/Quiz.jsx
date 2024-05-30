import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Question from './Question';
const Quiz = ({ questions, path }) => {
  const [userAnswer, setUserAnswer] = useState([]);
  

  const navigate = useNavigate();

  
  const activeQuestionIndex = userAnswer.length;

  const handleUserAnswer = useCallback(answer => {
    setUserAnswer(prev => {
        return [...prev, answer]
    })
   
  },[])

  const handleSkip = useCallback(()=>{
    setUserAnswer(prev => {
      return [...prev, null]
    })
  },[])

  

  const currentQuestion = questions[activeQuestionIndex];

  if(questions.length === userAnswer.length){
    navigate(`${path}/summary`)
  }
  console.log(userAnswer);

  return (
    <div className="w-3/6 min-w-[350px] p-5 mx-auto bg-[#4169e1] h-[50rem] space-y-14 rounded-3xl text-[#dfdcdc] ">
      <Question 
      key={activeQuestionIndex}
      handleSkip={handleSkip}
    currentQuestion={currentQuestion}
    handleUserAnswer={handleUserAnswer}


      />
    </div>
  );
};

export default Quiz;
