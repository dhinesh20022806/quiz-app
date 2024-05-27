import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import QuizPage from "./pages/Quiz";

const router = createBrowserRouter([{
  path:'/',element:<RootLayout/>, children:[
    {path:'', element:<HomePage/>},
    {path:':programmingID/quiz' , element:<QuizPage/>}
  ]
}])
const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
