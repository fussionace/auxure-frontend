import { createBrowserRouter } from 'react-router-dom';
import Signup from './pages/unAuthPages/Signup';
import './index.css'
import Home from './pages/unAuthPages/Home';
import Login from './pages/unAuthPages/Login';
import ErrorPage from './pages/unAuthPages/NotFound';
import Shop from './pages/unAuthPages/Shop';
import { home, login, shop, signup } from './utils/routes';

export const router = createBrowserRouter([
  {
    path: home,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: signup,
    element: <Signup />
  },
  {
    path: login,
    element: <Login />,
  },
  {
    path: shop,
    element: <Shop />,
  },
]);
