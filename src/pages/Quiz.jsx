import { useState , useEffect, Suspense } from 'react';
import {Await, useParams} from 'react-router-dom';
import Quiz from '../components/Quiz';

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
                setTimeout(()=>{
                    setQuestions(module.default);

                }, 10 * 1000)
            }
        };
        
        loadQuestions();
    }, [params.programmingID]);
    
    console.log(questions, 'from page');
  return (
    <Quiz questions={questions}/>
  
  )
}

export default QuizPage