import { createContext, useState, useCallback } from "react";

export const UserAnswerCtx = createContext({
    userAnswer : [],
    handleUserAnswer: ()=>{},
    handleSkip:()=>{},

})



export default function UserAnswerContextProvider({children}){
    const [userAnswer, setUserAnswer] = useState([]);

    const handleUserAnswer = useCallback(answer => {
        setUserAnswer(prev => {
            return [...prev, answer]
        })
       
      },[])
    
      const handleSkip = useCallback(()=>{
        setUserAnswer(prev => {
          return [...prev, null]
        })
      },[])

    let value={
        userAnswer : userAnswer,
        handleUserAnswer: handleUserAnswer,
        handleSkip:handleSkip,

    }
    return <UserAnswerCtx.Provider value={value} >
        {children}
    </UserAnswerCtx.Provider>
}