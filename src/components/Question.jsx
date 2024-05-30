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

<<<<<<< HEAD
const Question = ({activeQuestionIndex, questions,handleSkipAnswer, handleUserAnswer }) => {
  const [verifyAnswer, setVerifyAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 15 * 1000;

  const handleAnswer = answer => {
    setVerifyAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setVerifyAnswer({
        selectedAnswer: answer,
        isCorrect:
          questions[activeQuestionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        setVerifyAnswer({
          selectedAnswer: "",
          isCorrect: null,
        });

        handleUserAnswer(answer)

       
      }, 8 * 1000);
    }, 5 * 1000);
    console.log(answer);
  };

  if (
    verifyAnswer.selectedAnswer !== undefined &&
    verifyAnswer.isCorrect === null
  ) {
    timer = 5 * 1000;
  }

  if (
    verifyAnswer.selectedAnswer !== undefined &&
    verifyAnswer.isCorrect !== null
  ) {
    timer = 8 * 1000;
  }

  return (
    <>
      <div className="w-[90%] mx-auto py-10">
        {!!questions[activeQuestionIndex]?.text && (
          <ProgressBar
            key={timer}
            timer={timer}
            onSkip={verifyAnswer.selectedAnswer === "" ?  handleSkipAnswer : null}
          />
        )}
      </div>
      <div>
        <h1 className="text-2xl  text-center mb-5 font-lato font-black text-white tracking-wide">
          {questions[activeQuestionIndex]?.text || 'loading..'}
        </h1>
=======
  return (
   <>
    <ProgressBar
      key={timer}
        timer={timer}
        handleSkip={answerState === '' ? handleSkip : null }
        answerState={answerState}
      />
>>>>>>> experment

      <h1 className="text-center h-[45px] font-black text-3xl">
        {currentQuestion.text}
      </h1>

      <div className="h-[250px]">
        <Answer
<<<<<<< HEAD
        key={questions[activeQuestionIndex]?.text}
          answers={questions[activeQuestionIndex]?.answers}
          onClick={handleAnswer}
          onSkip={handleSkipAnswer}
          selectedAnswer={verifyAnswer.selectedAnswer}
=======
          handleUserAnswer={handleAnswer}
          answers={currentQuestion.answers}
          answerState={answerState}
          selectedAnswer={answer.selectedAnswer}
>>>>>>> experment
        />
      </div>
   </>
  )
}

export default Question