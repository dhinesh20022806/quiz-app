import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const Quiz = ({questions}) => {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestion = userAnswer.length;
  console.log(activeQuestion);



  return (
    <div className='w-[50vw] min-w-[375px] bg-green-600 h-[50vh] rounded-lg mx-auto my-[5%]'>
    {/* <div className='w-[90%] pt-5 mx-auto'>
    <ProgressBar timer={15 * 1000} />
    </div> */}
    <h2>{ !!questions[activeQuestion] ? questions[activeQuestion]?.text : 'Loading ...'  }</h2>

   </div>
  )
}

export default Quiz