import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Checkout from './pages/unAuthPages/Checkout';
import ErrorPage from './pages/unAuthPages/ErrorPage';
import Home from './pages/unAuthPages/Home';
import Login from './pages/unAuthPages/Login';
import Shop from './pages/unAuthPages/Shop';
import Signup from './pages/unAuthPages/Signup';
import { checkout, home, login, shop, signup } from './utils/routes';

const router = createBrowserRouter([
  {
    path: home,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: login,
    element: <Login />,
  },
  {
    path: signup,
    element: <Signup />,
  },
  {
    path: shop,
    element: <Shop />,
  },
  {
    path: checkout,
    element: <Checkout />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
