import React from "react";

const Answer = ({ answers, onClick, onSkip, selectedAnswer }) => {

  console.log(answers,  'hey');
  const shuffleAnswers = [...answers].sort(()=> Math.random() - 0.5);



  return (
   <div className="flex flex-col ">
     <ul >
      {shuffleAnswers.map((answer) => {
        let cssClass = "bg-gray-200 px-4 h-20 flex-1   py-2  mb-2 rounded-3xl  hover:bg-gray-800 hover:text-white text-2xl font-abrilFatface"

        if(selectedAnswer === answer){
          cssClass = "bg-blue-400 px-4 h-20 flex-1   py-2  mb-2 rounded-3xl   text-white text-2xl font-abrilFatface"
        }
        console.log(selectedAnswer !== '' , 'True or False')
        if(selectedAnswer !== '' && selectedAnswer === answers[0]){
          cssClass = 'bg-green-200 px-4 h-20 flex-1   py-2  mb-2 rounded-3xl   text-white text-2xl font-abrilFatface'
        } 
        if(selectedAnswer !== '' && selectedAnswer !== answers[0]){
            cssClass = 'bg-red-200 px-4 h-20 flex-1   py-2  mb-2 rounded-3xl  text-white text-2xl font-abrilFatface'
        }




        return (
        <li className="flex justify-center" key={answer}>
          <button
            className={cssClass}
            onClick={() => onClick(answer)}
          >
            {answer}
          </button>
        </li>
      )
      })}
    </ul>
    <div className="flex xs:justify-end xxs:justify-center">
        <button onClick={onSkip} className="w-20 h-20 bg-white  rounded-xl text-xl text-black  ">skip</button>
    </div>
   </div>
  );
};

export default Answer;
