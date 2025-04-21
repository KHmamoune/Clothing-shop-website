import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../admin/Form.css'
import Cookies from 'js-cookie'
import { MyContext } from '../../MyContext'

const SignUp = () => {
    const Navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [conPassword, setConPassword] = useState("")
    const { isAuthenticated } = useContext(MyContext)

    useEffect(() => {
        if (isAuthenticated) {
            Navigate("/")
        }
    })

    const handleSignup = async () => {
        let url = `http://127.0.0.1:8000/api/signup`

        if (username === "" || firstName === "" || lastName === "" || email === "" || phone === "" || password === "" || conPassword === "") {
            return
        } else {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify({
                    username: username,
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    phone_number: phone,
                    password: password,
                    user_type: "user"
                })
            })

            if (res.ok) {
                console.log("user added successfully")
                setUsername("")
                setFirstName("")
                setLastName("")
                setEmail("")
                setPhone("")
                setPassword("")
                Navigate("/login")
                Cookies.set('authToken', res.token, { expires: 7 })
            }
        }
    }

    return (
        <div>
            <p className='admin-form-title'>SingUp</p>
            <div className='form-container'>
                <div>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="first">First name</label>
                    <input id="first" type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="last">Last name</label>
                    <input id="last" type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="phone">Phone number</label>
                    <input id="phone" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="pass">Password</label>
                    <input id="pass" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="con-pass">Confirm password</label>
                    <input id="con-pass" type="password" value={conPassword} onChange={(event) => setConPassword(event.target.value)} />
                </div>
                <button onClick={handleSignup}>SignUp</button>
                <Link to="/login">have an account?</Link>
            </div>
        </div>
    )
}

export default SignUp
