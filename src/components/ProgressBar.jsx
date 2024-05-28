import {useEffect, useState} from 'react'

const ProgressBar = ({timer, onSkip }) => {
    const [remainingTime, setRemainingTime] = useState(timer);
   
    useEffect(()=>{
        const intervalTimer = setInterval(()=>{
           setRemainingTime(prev => prev - 100)

        }, 100);

        return ()=>{
            clearInterval(intervalTimer)
          
        }
    },[])

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            onSkip();
        }, timer)

        return ()=>{
            clearTimeout(timeOut)
        }
    },[])
    

  

  return (
    <progress  value={remainingTime} max={timer}   />
)
}

export default ProgressBar