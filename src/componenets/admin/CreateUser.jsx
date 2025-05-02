import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'

const CreateUser = () => {
    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [type, setType] = useState("user")

    const handleClick = async () => {
        let url = `http://127.0.0.1:8000/api/create-user`

        if (username === "" || firstName === "" || lastName === "" || email === "" || phone === "" || password === "") {
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
                    user_type: type
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
                setType("user")
            }
        }
    }

    return (
        <div>
            <p className='admin-form-title'>Create User</p>
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
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" value={type} onChange={(event) => setType(event.target.value)}>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                </div>
                <button onClick={handleClick}>submit</button>
                <Link to="/admin">back to dashboard</Link>
            </div>
        </div>
    )
}

export default CreateUser
