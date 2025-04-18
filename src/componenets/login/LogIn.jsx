import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../admin/Form.css'
import { useEffect } from 'react'

const LogIn = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const checkAuthStatus = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/verify-token', {
                method: 'GET',
                credentials: 'include',
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

    const handleLogIn = async () => {
        let url = `http://127.0.0.1:8000/api/login`

        if (username === "" || password === "") {
            return
        } else {
            const res = await fetch(url, {
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

            if (res.ok) {
                console.log("logged in successfully")
                setUsername("")
                setPassword("")
            }
        }
    }
    return (
        <div>
            <p className='admin-form-title'>LogIn</p>
            <div className='form-container'>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="pass">Password</label>
                    <input id="pass" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button onClick={handleLogIn}>LogIn</button>
                <Link to="/signup">create an account</Link>
            </div>
        </div>
    )
}

export default LogIn
