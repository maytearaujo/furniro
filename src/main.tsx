import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.tsx'
import ErrorPage from './page/ErrorPage/ErrorPage.tsx';
import Home from './page/Home/Home.tsx';
import BrowseTheRange  from './components/BrowseTheRange/BrowseTheRange.tsx'

const router = createBrowserRouter([
  {
    // path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/shop', element: <BrowseTheRange /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
