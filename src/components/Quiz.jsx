import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Question from './Question';
const Quiz = ({ questions, path }) => {
  const [userAnswer, setUserAnswer] = useState([]);
<<<<<<< HEAD
 


  const naviagte = useNavigate();
=======
  

  const navigate = useNavigate();
>>>>>>> experment

  
  const activeQuestionIndex = userAnswer.length;

<<<<<<< HEAD
  const handleUserAnswer = (answer)=>{
    setUserAnswer(prev => {
      return [...prev, answer];
    });
  }

  const handleSkipAnswer = useCallback(() => {
=======
  const handleUserAnswer = useCallback(answer => {
>>>>>>> experment
    setUserAnswer(prev => {
        return [...prev, answer]
    })
   
  },[])

  const handleSkip = useCallback(()=>{
    setUserAnswer(prev => {
      return [...prev, null]
    })
  },[])

<<<<<<< HEAD
=======
  

  const currentQuestion = questions[activeQuestionIndex];

  if(questions.length === userAnswer.length){
    navigate(`${path}/summary`)
  }
>>>>>>> experment
  console.log(userAnswer);

  console.log('%cparent re rendering' , "color:red; border: 1px solid red;");
  return (
<<<<<<< HEAD
    <div
     className="xs:max-w-[50vw] xxs:max-w-[300px] py-5 xs:px-5 xxs:px-2 min-w-[375px] bg-green-600  min-h-[45vh] rounded-lg mx-auto my-[5%]">
      <Question
        key={activeQuestionIndex}
        activeQuestionIndex={activeQuestionIndex}
        questions={questions}
        handleSkipAnswer={handleSkipAnswer}
        handleUserAnswer={handleUserAnswer}
=======
    <div className="w-3/6 min-w-[350px] p-5 mx-auto bg-[#4169e1] h-[50rem] space-y-14 rounded-3xl text-[#dfdcdc] ">
      <Question 
      key={activeQuestionIndex}
      handleSkip={handleSkip}
    currentQuestion={currentQuestion}
    handleUserAnswer={handleUserAnswer}


>>>>>>> experment
      />
    </div>
  );
};

export default Quiz;
