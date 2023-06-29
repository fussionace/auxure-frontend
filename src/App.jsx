import { createBrowserRouter } from 'react-router-dom';
import Signup from './pages/unAuthPages/Signup';
import './index.css'


import Home from './pages/unAuthPages/Home';
import ErrorPage from './pages/unAuthPages/NotFound';
import { home } from './utils/routes';
import { signup } from './utils/routes';

export const router = createBrowserRouter([
  {
    path: home,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: signup,
    element: <Signup />,
  },
]);
