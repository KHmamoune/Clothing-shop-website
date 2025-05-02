import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../admin/Form.css'
import './LogIn.css' // Import the new CSS file
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useContext } from 'react'
import { MyContext } from '../../MyContext'

const LogIn = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const Navigate = useNavigate()
    const { isAuthenticated } = useContext(MyContext)

    useEffect(() => {
        if (isAuthenticated) {
            Navigate("/")
        }
    })

    const handleLogIn = async () => {
        let url = `http://127.0.0.1:8000/api/login`

        if (username === "" || password === "") {
            return
        } else {
            const data = await fetch(url, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify({
                    "username": username,
                    "password": password,
                })
            })


            if (data.ok) {
                const res = await data.json()
                console.log("logged in successfully")
                setUsername("")
                setPassword("")
                console.log(res)
                Cookies.set('authToken', res.token, { expires: 7 })
                window.location.reload()
            } else {
                alert((await data.json()).detail)
            }

        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Welcome Back</h1>
                <div className="login-form">
                    <div className="form-group">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            id="username"
                            type="text"
                            className="form-input"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass" className="form-label">Password</label>
                        <input
                            id="pass"
                            type="password"
                            className="form-input"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button className="login-button" onClick={handleLogIn}>Log In</button>
                    <Link to="/signup" className="signup-link">Don't have an account? Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default LogIn
