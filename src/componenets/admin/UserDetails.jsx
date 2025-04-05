import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const UserDetails = () => {
    const [id, setId] = useState(0)
    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [type, setType] = useState("user")
    const [userInfo, setUserInfo] = useState([])
    const [displayForm, setDisplayForm] = useState(false)

    useEffect(() => {
        (async () => {
            let url = `http://127.0.0.1:8000/api/user`
            console.log(url)
            const data = await fetch(url, {
                method: "GET",
                mode: "cors",
            })

            const res = await data.json()
            console.log(res)
            setUserInfo(res)
        })()
    }, [displayForm])

    const handleEdit = async () => {
        let url = `http://127.0.0.1:8000/api/user-details/${id}`

        if (username === "" || firstName === "" || lastName === "" || email === "" || phone === "" || password === "") {
            return
        } else {
            const res = await fetch(url, {
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify({
                    user_name: username,
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    phone_number: phone,
                    password: password,
                    user_type: type
                })
            })

            if (res.ok) {
                console.log("user edited successfully")
                setUsername("")
                setFirstName("")
                setLastName("")
                setEmail("")
                setPhone("")
                setPassword("")
                setType("user")
                setDisplayForm(false)
            }
        }
    }

    const handleDelete = async (id) => {
        let url = `http://127.0.0.1:8000/api/user-details/${id}`

        const res = await fetch(url, {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            },
            mode: "cors",
        })

        if (res.ok) {
            console.log("user deleted successfully")
            setUsername("")
            setFirstName("")
            setLastName("")
            setEmail("")
            setPhone("")
            setPassword("")
            setType("user")
            setDisplayForm(false)
        }
    }

    const handleClick = (id, username, fn, ln, email, phone, pass, type) => {
        setId(id)
        setUsername(username)
        setFirstName(fn)
        setLastName(ln)
        setEmail(email)
        setPhone(phone)
        setPassword(pass)
        setType(type)
        setDisplayForm(true)
    }

    if (displayForm) {
        return (
            <div>
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
                <button onClick={handleEdit}>submit</button>
                <Link to="/admin">back to dashboard</Link>
            </div>
        )
    }

    return (
        <div>
            {userInfo.map((item) => {
                return (
                    <div key={uuidv4()}>
                        <p>{item.user_name}</p>
                        <p>{item.first_name}</p>
                        <p>{item.last_name}</p>
                        <p>{item.email}</p>
                        <p>{item.phone}</p>
                        <p>{item.type}</p>
                        <p>{item.password}</p>
                        <button onClick={() => handleClick(item.id, item.user_name, item.first_name, item.last_name, item.email, item.phone_number, item.password, item.user_type)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default UserDetails
