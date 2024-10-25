import { Outlet } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import GlobalStyles from "./styles/global"

function App() {

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
