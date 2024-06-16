import { createBrowserRouter } from "react-router-dom";

import App from '../App.tsx';
import ErrorPage from '../page/errorPage/ErrorPage';
import Login from "../page/login/Login";
import Home from '../page/home/Home.tsx';
import Register from "../page/register/Register";
import Shop from '../page/shop/Shop'

  const router = createBrowserRouter([
    {
      // path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/shop', element: <Shop /> },
      ]
    },
  ]);


export default router