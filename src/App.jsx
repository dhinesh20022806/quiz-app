import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import QuizPage from "./pages/Quiz";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([{
  path:'/',element:<RootLayout/>,
  errorElement:<ErrorPage/>,
  children:[
    {path:'', element:<HomePage/>},
    {path:':programmingID/quiz' , element:<QuizPage/>}
  ],

}])
const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
