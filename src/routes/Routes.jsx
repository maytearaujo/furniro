import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import Home from "../page/home/Home.jsx";
// import ErrorPage from "../page/errorPage/ErrorPage.jsx"
// import Login from "../components/Login/Login.jsx";
// import Signup from "../components/Signup/Signup.jsx";
// import Shop from "../page/shop/Shop.jsx";

// import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute.jsx";
// import Dashboard from "../components/Dashboard/Dashboard.jsx";
// import Cart from "../components/cart/Cart.jsx";
// import Contact from "../page/contact/Contact.jsx";

// const api = 'https://furniro-lake.vercel.app/Products'

const router = createBrowserRouter([
    {
        // path: "/",
        element: <App />,
        // errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            // { path: '/login', element: <Login /> },
            // { path: '/signup', element: <Signup /> },
            // { path: '/shop', element: <Shop api={api} /> },
            // { path: '/contact', element: <Contact /> },
            // {
            //     path: '/dashboard',
            //     element:
            //         <ProtectedRoute>
            //             <Dashboard />
            //         </ProtectedRoute>,
            // },
            // {
            //     path: '/cart',
            //     element:
            //         <ProtectedRoute>
            //             <Cart />
            //         </ProtectedRoute>,
            // },
        ]
    },
]);


export default router  