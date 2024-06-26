import { Suspense } from 'react';
import {
  useParams,
  useRouteLoaderData,
  Await,
  json,
} from 'react-router-dom';
import Quiz from '../components/Quiz';
import Footer from '../components/Footer';

const languageMap = {
  nodejs: () => import('../questions/nodejs_questions'),
  python: () => import('../questions/python_questions'),
  html: () => import('../questions/html_questions'),
  css: () => import('../questions/css_questions'),
  postgres: () => import('../questions/postgres_questions'),
  mongodb: () => import('../questions/mongodb_questions'),
  js: () => import('../questions/js_questions'),
  reactjs: () => import('../questions/reactjs_questions'),
  angularjs: () => import('../questions/angularjs_questions'),
};

const QuizPage = () => {
  const params = useParams();
  const questions = useRouteLoaderData('question-programmingLanguage');
  console.log(questions);

  return (
   <>
     <Suspense fallback={<p className="text-center">loading</p>}>
      <Await resolve={questions}>
        {questions => (
          <Quiz
            questions={questions}
            path={params.programmingID}
          />
        )}
      </Await>
    
    </Suspense>
    
   </>
  );
};

export default QuizPage;

export async function loader({ params }) {

  if (
    params.programmingID &&
    languageMap[params.programmingID]
  ) {
    const module = await languageMap[params.programmingID]();
    console.log('from loader');
    console.log(module.default);

    return module.default;
  }

  throw json(
    { status: 500 },
    { message: 'Cloud not fetch the data' }
  );
}
