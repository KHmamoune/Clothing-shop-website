import Footer from "./componenets/index/Footer.jsx"
import Header from "./componenets/index/Header.jsx"
import { Outlet } from "react-router"
import './App.css'

function App() {

  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default App
