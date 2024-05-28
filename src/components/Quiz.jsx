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

  return (
    <div className="w-[50vw]  p-5 min-w-[375px] bg-green-600 h-[50vh] rounded-lg mx-auto my-[5%]">
      <div className="w-[90%] mx-auto py-10">
     
      {/* {!!questions[activeQuestion]?.text &&  <ProgressBar key={activeQuestion} timer={15 * 1000  } /> } */}
      </div>
      <div>
       <h1 className="text-xl font-lato font-bold tracking-wide">{questions[activeQuestion]?.text || 'loading..' }</h1>

       <Answer answers={questions[activeQuestion]?.answers} onClick={handleAnswer}/>
      </div>
    </div>
  );
};

export default Quiz;

