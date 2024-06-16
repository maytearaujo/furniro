import { createBrowserRouter } from "react-router-dom";

import App from '../App.tsx';
import ErrorPage from '../page/errorPage/ErrorPage.tsx';
import Home from '../page/home/Home.tsx';
import Shop from '../page/shop/Shop.tsx';

  const router = createBrowserRouter([
    {
      // path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/shop', element: <Shop /> },
      ]
    },
  ]);


export default router