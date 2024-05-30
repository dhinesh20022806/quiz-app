import React, { useEffect, useState } from 'react'


const ProgressBar = ({timer, handleSkip, answerState}) => {
    const [remainingTime, setRemainingTime] = useState(timer);
   
      
    useEffect(()=>{
        console.log('SETTING INTERVAL');
      const timeInterval =  setInterval(()=>{
          setRemainingTime(perv => perv - 100)
        }, 100)
       
        
        return ()=>{
            console.log('login from clear interval');
            clearInterval(timeInterval)
        }


    },[])

    useEffect(()=>{
        console.log('SETTING timeout');
        const timeOut = setTimeout(handleSkip,timer)

        return() => {
            console.log('%clogin from clear time out', 'color:red;' );
            clearTimeout(timeOut)
        }

    },[timer,handleSkip])

  return (
   <progress className={answerState === 'selected' ? 'active' : ''} max={timer} value={remainingTime} />
  )
}

export default ProgressBar