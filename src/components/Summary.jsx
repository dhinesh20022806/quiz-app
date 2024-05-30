import {useContext} from 'react';
import quizCompleteIMG from '../asserts/images/quiz-complete.png'
import { UserAnswerCtx } from '../store/user-answer-context';
import { Link } from 'react-router-dom';
const Summary = ({questions}) => {
    const {userAnswer} = useContext(UserAnswerCtx)
    console.log(questions , 'from components');
    const wrongAnswer = [...userAnswer].filter((answer, index) => answer !== questions[index].answers[0] && answer !== null)
    const skippedAnswer = [...userAnswer].filter((answer) => answer === null);

    console.log(wrongAnswer.length / userAnswer.length);
    console.log( Math.round(0.5384615384615384));

    const wrongAnswerPercentage = (wrongAnswer.length / userAnswer.length) * 100;
    const skippedAnswerPercentage = (skippedAnswer.length / userAnswer.length) * 100;
    const correctAnswerPercentage = ( (userAnswer.length - (wrongAnswer.length + skippedAnswer.length) ) / userAnswer.length) * 100

    console.log(wrongAnswerPercentage, 'hi');
  return (
    <div className="w-1/2 bg-blue-600 text-white mx-auto gap-5 flex items-center p-2 flex-col rounded-xl h-fit">
      <p className="text-7xl font-bold">Summary</p>
      <img
      className='w-40'
        src={quizCompleteIMG}
        alt="cup image"
      />
      <div className='flex justify-evenly w-full'>
      <div className='bg-blue-400 rounded-full p-2 size-[150px] flex flex-col gap-1 justify-center items-center'>
        <p className='text-4xl font-black'>{wrongAnswerPercentage.toFixed(2)}%</p>
        <p className='text-2xl '>wrong Answer</p>
      </div>
      <div className='bg-blue-400 rounded-full p-2 size-[150px] flex flex-col gap-1 justify-center items-center'>
        <p className='text-4xl font-black'>{correctAnswerPercentage.toFixed(2)}%</p>
        <p className='text-2xl '>Correct Answer</p>
      </div>
      <div className='bg-blue-400 rounded-full p-2 size-[150px] flex flex-col gap-1 justify-center items-center'>
        <p className='text-4xl font-black'>{skippedAnswerPercentage.toFixed(2)}%</p>
        <p className='text-2xl '>skipped Answer</p>
      </div>

      </div>
      <div className='bg-white py-5 rounded-lg'>
      <ul>
        {userAnswer.map((answer, index)=>{


            return (<li key={index} className='flex flex-col items-center text-3xl gap-4 mb-9'>
                    <h1 className='size-20 rounded-full bg-red-300 text-center py-4 '>{index + 1}</h1>
                    <p className='text-black'>{questions[index].text}</p>
                    {answer === null ? <p className='text-black'>Skipped</p> : <p className={answer === questions[index].answers[0] ? 'text-green-700' : 'text-red-700'}>{answer} </p>}

            </li>)
        })}
      </ul>

      </div>

      <Link to='/' className=''>
        try other programming Languages

      </Link>
    </div>
  );
};

export default Summary;
