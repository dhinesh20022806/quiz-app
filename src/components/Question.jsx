import {useState, useContext} from 'react'
import Answer from './Answer';
import ProgressBar from './ProgressBar';
import { UserAnswerCtx } from '../store/user-answer-context';


const Question = ({handleSkip,currentQuestion , handleUserAnswer, questions}) => {

  const {userAnswer} = useContext(UserAnswerCtx)
    const [answer, setAnswer] = useState({
        selectedAnswer:'',
        isCorrect:null,
      })

      let timer = 10 * 1000;

      const handleAnswer = answer =>{
        setAnswer({
            selectedAnswer:answer,
            isCorrect:null
          })
          setTimeout(()=>{
      
            setAnswer({
              selectedAnswer:answer,
              isCorrect:answer === currentQuestion.answers[0],
            })
      
            setTimeout(()=>{
              setAnswer({
                selectedAnswer:"",
                isCorrect:null,
              })

              handleUserAnswer(answer)
              
            }, 8 * 1000)
           
      
      
          },5 * 1000)
        
      }

      let answerState = '';

  if(answer.selectedAnswer){
    timer = 5 * 1000;
    answerState = 'selected'
  }
  if(answer.selectedAnswer && answer.isCorrect !== null){
    timer = 8 * 1000;
    answerState = answer.isCorrect ? 'correct' : 'wrong'
  }

  return (
   <>
    <ProgressBar
      key={timer}
        timer={timer}
        handleSkip={answerState === '' ? handleSkip : null }
        answerState={answerState}
      />

      <h1 className="text-center h-[45px] font-black text-3xl">
        {currentQuestion.text}
      </h1>

      <div className="">
        <Answer
          handleUserAnswer={handleAnswer}
          answers={currentQuestion.answers}
          answerState={answerState}
          selectedAnswer={answer.selectedAnswer}
        />
        
      </div>
     
      <div className='flex justify-center items-center   '>
      <p className=' text-white  bg-blue-950 px-6 py-4 rounded-lg ' >
          {userAnswer.length} / {questions.length}
        </p>
      </div>

   </>
  )
}

export default Question