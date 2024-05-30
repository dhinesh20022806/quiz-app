import React from 'react';
import quizCompleteIMG from '../asserts/images/quiz-complete.png'
const Summary = () => {
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
        <p className='text-4xl font-black'>98.02%</p>
        <p className='text-2xl '>wrong Answer</p>
      </div>
      <div className='bg-blue-400 rounded-full p-2 size-[150px] flex flex-col gap-1 justify-center items-center'>
        <p className='text-4xl font-black'>98.02%</p>
        <p className='text-2xl '>wrong Answer</p>
      </div>
      <div className='bg-blue-400 rounded-full p-2 size-[150px] flex flex-col gap-1 justify-center items-center'>
        <p className='text-4xl font-black'>98.02%</p>
        <p className='text-2xl '>wrong Answer</p>
      </div>

      </div>
      <div className='bg-black'>
      <ul>
        3
      </ul>

      </div>
    </div>
  );
};

export default Summary;
