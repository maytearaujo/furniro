import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes';
import { AuthGoogleProvider } from "./context/authGoogle"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthGoogleProvider>
      <RouterProvider router={router} />
    </AuthGoogleProvider>
  </React.StrictMode>,
)
