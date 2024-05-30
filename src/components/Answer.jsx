import React from 'react';

const Answer = ({ handleUserAnswer, answers, answerState, selectedAnswer }) => {
    const shuffledAnswer = [...answers].sort(()=> Math.random() - 0.5)
  return (
    <ul className="flex flex-col gap-5 justify-center   ">
      {shuffledAnswer.map(answer => {
        let cssClass = 'w-full font-bold  h-[50px] bg-blue-950 hover:bg-blue-200 hover:text-blue-950 px-2 py-1 rounded-full text-[1.6rem]';
       
       if(answer === selectedAnswer){
        if (answerState === 'selected') {
         cssClass = 'w-full font-bold  h-[50px] bg-white text-blue-950 px-2 py-1 rounded-full text-[1.6rem]';
            
          
        }
        else if(answerState === 'correct'){
            cssClass = 'w-full font-bold  h-[50px] bg-green-500 text-white px-2 py-1 rounded-full text-[1.6rem]';

        }
        else if(answerState === 'wrong'){
            cssClass = 'w-full font-bold  h-[50px] bg-red-500 text-white px-2 py-1 rounded-full text-[1.6rem]';
        }
       }

        return (
          <li className="flex " key={answer}>
            <button
              disabled={answerState !== ''}
              onClick={() => handleUserAnswer(answer)}
              className={cssClass}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answer;
