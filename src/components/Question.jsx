import {useState} from 'react'
import Answer from './Answer';
import ProgressBar from './ProgressBar';

const Question = ({handleSkip,currentQuestion , handleUserAnswer}) => {
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
        handleSkip={handleSkip}
        answerState={answerState}
      />

      <h1 className="text-center h-[45px] font-black text-3xl">
        {currentQuestion.text}
      </h1>

      <div className="h-[250px]">
        <Answer
       
          handleUserAnswer={handleAnswer}
          answers={currentQuestion.answers}
          answerState={answerState}
          selectedAnswer={answer.selectedAnswer}
        />
      </div>
   </>
  )
}

export default Question