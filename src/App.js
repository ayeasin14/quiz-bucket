import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Error from './components/Error';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Statistics from './components/Statistics';
import Blog from './components/Blog';
import Main from './components/Main';
import About from './components/About';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/quiz/:quizId',
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
        element: <Quiz></Quiz>
      },
      {
        path: '/quiz',
        element: <Quiz></Quiz>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  },

])


function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
