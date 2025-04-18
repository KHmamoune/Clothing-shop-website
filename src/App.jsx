import Footer from "./componenets/index/Footer.jsx"
import Header from "./componenets/index/Header.jsx"
import { Outlet } from "react-router"
import { createContext, useContext, useEffect } from "react"
import './App.css'

function App() {
    const checkAuthStatus = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/test-token', {
                method: 'GET',
            });

            console.log(response.ok)

        } catch (error) {
            console.error('Auth check failed:', error)
            return false;
        }
    }

    useEffect(() => {(async () => {
            let result = await checkAuthStatus()
        })()
    }, [])

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default App
