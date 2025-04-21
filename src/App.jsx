import Footer from "./componenets/index/Footer.jsx"
import Header from "./componenets/index/Header.jsx"
import { Outlet } from "react-router"
import { useEffect } from "react"
import './App.css'
import { useState } from "react"
import Cookies from 'js-cookie'
import { MyContext } from "./MyContext.jsx"

function App() {
    let [contextInfo, setContextInfo] = useState({})
    let [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {(async () => {
        if (!Cookies.get("authToken")) {
            setContextInfo({})
            setIsAuthenticated(false)
            console.log("not authenticated")
            return
        }

        try {
            const data = await fetch(`http://127.0.0.1:8000/api/test-token/${Cookies.get("authToken")}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `token ${Cookies.get("authToken")}`,
                },
                method: 'GET',
            });

            const res = await data.json()

            setContextInfo(res.token)
            setIsAuthenticated(true)

        } catch (error) {
            console.error('Auth check failed:', error)
            return false;
        }
    })()}, [])

    return (
        <>
            <MyContext.Provider value={{isAuthenticated, contextInfo}}>
                <Header />
                <Outlet />
                <Footer />
            </MyContext.Provider>
        </>
    )
}

export default App
