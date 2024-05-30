<<<<<<< HEAD
import React from "react";

const Answer = ({ answers, onClick, onSkip, selectedAnswer }) => {

  console.log(answers,  'hey');
  const shuffleAnswers = [...answers].sort(()=> Math.random() - 0.5);

=======
import {useRef} from 'react';
>>>>>>> experment

const Answer = ({ handleUserAnswer, answers, answerState, selectedAnswer }) => {
    const shuffledAnswer = useRef()
    if(!shuffledAnswer.current){
         shuffledAnswer.current = [...answers].sort(()=> Math.random() - 0.5)

    }
  return (
<<<<<<< HEAD
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
=======
    <ul className="flex flex-col gap-5 justify-center   ">
      {shuffledAnswer.current.map(answer => {
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
>>>>>>> experment
      })}
    </ul>
  );
};

export default Answer;
