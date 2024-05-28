import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import Answer from "./Answer";

const Quiz = ({ questions }) => {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestion = userAnswer.length;
  console.log(activeQuestion);

  const handleAnswer = (answer) =>{
    console.log(answer);
    setUserAnswer(prev => {
      return [...prev, answer]
    })
  }

  if(!questions[activeQuestion]){
    return <p>LOading...</p>
  }
  console.log(userAnswer);

  return (
    <div className="xs:max-w-[50vw] xxs:max-w-[300px] py-5 xs:px-5 xxs:px-2 min-w-[375px] bg-green-600  min-h-[45vh] rounded-lg mx-auto my-[5%]">
      <div className="w-[90%] mx-auto py-10">
     
      {!!questions[activeQuestion]?.text &&  <ProgressBar key={activeQuestion} timer={15 * 1000  } onSkip={()=> handleAnswer(null)}/> }
      </div>
      <div>
       <h1 className="text-2xl  text-center mb-5 font-lato font-black text-white tracking-wide">{questions[activeQuestion]?.text || 'loading..' }</h1>

       <Answer answers={questions[activeQuestion]?.answers} onClick={handleAnswer} onSkip={()=> handleAnswer(null)}/>
      </div>
    </div>
  );
};

export default Quiz;

