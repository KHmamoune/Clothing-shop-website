import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../admin/Form.css'
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
