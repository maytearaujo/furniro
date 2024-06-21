import { createBrowserRouter } from "react-router-dom";

import App from "../App.tsx";
import ErrorPage from "../page/errorPage/ErrorPage";
import Login from "../components/Login/Login";
import Home from '../page/home/Home';
import Signup from "../components/Signup/Signup";
import Shop from "../page/shop/Shop";

import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Dashboard from "../components/Dashboard/Dashboard.tsx";
import Cart from "../components/cart/Cart";
import Contact from "../page/contact/Contact.tsx";

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
      { path: '/signup', element: <Signup /> },
      { path: '/shop', element: <Shop api={api} /> },
      { path: '/contact', element: <Contact /> },
      {
        path: '/dashboard',
        element:
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>,
      },
      {
        path: '/cart',
        element:
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>,
      },
    ]
  },
]);


export default router


// const router = createBrowserRouter([
//   {
//     // path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: '/', element: <Home /> },
//       { path: '/login', element: <Login /> },
//       { path: '/register', element: <Register /> },
//       { path: '/shop', element: <Shop api={api}/> },
//       { path: '/cart', element: <Cart /> },
//     ]
//   },
// ]);