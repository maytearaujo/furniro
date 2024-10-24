import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes';
// import { AuthGoogleProvider } from "./context/authGoogle"
// import {UserAuthContext} from "./context/UserAuthContext"
import {UserAuthContextProvider} from "./context/UserAuthContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </React.StrictMode>,
)
