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

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      {
        path: ':programmingID/quiz',
        element: <QuizPage />,
        loader: questionsLoader,
      },
      {
        path: ':programmingID/summary',
        element: <SummaryPage />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
