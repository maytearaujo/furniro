import { createBrowserRouter } from "react-router-dom";

import App from '../App.tsx';
import ErrorPage from '../page/errorPage/ErrorPage';
import Login from "../page/login/Login";
import Home from '../page/home/Home.tsx';
import Register from "../page/register/Register";
import Shop from '../page/shop/Shop'
import Cart from "../page/cart/Cart.tsx";

  // const api = 'https://run.mocky.io/v3/a4bcc170-742a-4e70-a563-0775266c9e38'

  const api = 'http://localhost:3000/Products'
  const router = createBrowserRouter([
    {
      // path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/shop', element: <Shop api={api}/> },
        { path: '/cart', element: <Cart /> },
      ]
    },
  ]);


export default router