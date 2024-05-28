import {useEffect, useState} from 'react'

const ProgressBar = ({timer}) => {
    const [remainingTime, setRemainingTime] = useState(timer);
   
    useEffect(()=>{
        const intervalTimer = setInterval(()=>{
           setRemainingTime(prev => prev - 100)

        }, 100);

        return ()=>{
            clearInterval(intervalTimer)
        }
    })
    

  

  return (
    <progress className='w-[100%] rounded-md' value={remainingTime} max={timer}   />
)
}

export default ProgressBar