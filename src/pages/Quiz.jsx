import { useState , useEffect } from 'react';
import {useParams} from 'react-router-dom';

const languageMap = {
    nodejs : () => import('../questions/nodejs_questions')
}


const QuizPage = () => {
    const [questions, setQuestions] = useState([])
    const params = useParams();
    console.log(params.programmingID);
    useEffect(() => {
        const loadQuestions = async () => {
            if (params.programmingID && languageMap[params.programmingID]) {
                const module = await languageMap[params.programmingID]();
                setQuestions(module.default);
            }
        };
        
        loadQuestions();
    }, [params.programmingID]);
    
  return (
   <>
   <div>
   <ul>
    {questions.map(question =>{
        return <li key={question.id}>
            <p>{question.text}</p>
        </li>
    } )}
   </ul>
   </div>

   </>
  )
}

export default QuizPage