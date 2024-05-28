import { useState , useEffect } from 'react';
import {useParams} from 'react-router-dom';

const languageMap = {
    nodejs : () => import('../questions/nodejs_questions'),
    python:() => import('../questions/python_questions'),
    html:() => import('../questions/html_questions'),
    css:() => import('../questions/css_questions'),
    postgres:() => import('../questions/postgres_questions'),
    mongodb:() => import('../questions/mongodb_questions'),
    js:() => import('../questions/js_questions'),
    reactjs:() => import('../questions/reactjs_questions'),
    angularjs:()=> import('../questions/angularjs_questions')
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