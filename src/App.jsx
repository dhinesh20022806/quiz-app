import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/Home';
import RootLayout from './pages/RootLayout';
import QuizPage, {
  loader as questionsLoader,
} from './pages/Quiz';
import ErrorPage from './pages/Error';
import SummaryPage from './pages/Summary';
import UserAnswerContextProvider from './store/user-answer-context';
import QuizLayout from './pages/QuizLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
  
    children: [
      { index:true, element: <HomePage /> },
      {
        path: ':programmingID',
        element: <QuizLayout />,
        id:'question-programmingLanguage',
        loader:questionsLoader,
        children:[
          {
            index:true,
            element : <QuizPage/>

          },
          {
            path: 'summary',
            element: <SummaryPage />,
          },

        ]
       
      },
      
    ],
  },
]);
const App = () => {
  return (<UserAnswerContextProvider>
    <RouterProvider router={router}></RouterProvider>
  </UserAnswerContextProvider>);
};

export default App;
