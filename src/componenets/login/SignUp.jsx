import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../admin/Form.css'
import './SignUp.css' // Import the new CSS file
import Cookies from 'js-cookie'
import { MyContext } from '../../MyContext'
import { FormProvider, useForm } from 'react-hook-form'
import FormInput from './FormInput'

const SignUp = () => {
    const Navigate = useNavigate()
    const methods = useForm()
    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [conPassword, setConPassword] = useState("")
    const { isAuthenticated } = useContext(MyContext)

    const usernameValidation = {
        required: {
            value: true,
            message: 'required',
        },
        maxLength: {
            value: 30,
            message: '30 characters max',
        },
    }

    const emailValidation = {
        required: {
            value: true,
            message: 'required',
        },
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'input must be an email'
        }
    }

    const phoneValidation = {
        required: {
            value: true,
            message: 'required',
        },
        maxLength: {
            value: 10,
            message: 'number must have 10 digits',
        },
        minLength: {
            value: 10,
            message: 'number must have 10 digits',
        },
    }

    const passwordValidation = {
        required: {
            value: true,
            message: 'required',
        },
        maxLength: {
            value: 30,
            message: '30 characters max',
        },
        minLength: {
            value: 3,
            message: '3 characters minimum',
        },
    }

    const conpasswordValidation = {
        required: {
            value: true,
            message: 'required',
        },
        maxLength: {
            value: 30,
            message: '30 characters max',
        },
        validate: () => {
            return methods.watch('Password') === methods.watch('Confirm password') || "confirm password must match password"
        },
    }

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
            } else {
                alert((await res.json()).username)
            }
        }
    }

    const onSubmit = methods.handleSubmit(data => {
        console.log(data)
        setUsername(data['Username'])
        setFirstName(data['First name'])
        setLastName(data['Last name'])
        setEmail(data['Email'])
        setPhone(data['Phone number'])
        setPassword(data['Password'])
        setConPassword(data['Confirm password'])
        handleSignup()
    })

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h1 className="signup-title">Create Account</h1>
                <FormProvider {...methods}>
                    <form className="signup-form" onSubmit={e => e.preventDefault()}>
                        <FormInput
                            id={"username"}
                            label={"Username"}
                            type={"text"}
                            value={username}
                            setValue={setUsername}
                            validation={usernameValidation}
                        />
                        <FormInput
                            id={"first"}
                            label={"First name"}
                            type={"text"}
                            value={firstName}
                            setValue={setFirstName}
                            validation={usernameValidation}
                        />
                        <FormInput
                            id={"last"}
                            label={"Last name"}
                            type={"text"}
                            value={lastName}
                            setValue={setLastName}
                            validation={usernameValidation}
                        />
                        <FormInput
                            id={"email"}
                            label={"Email"}
                            type={"email"}
                            value={email}
                            setValue={setEmail}
                            validation={emailValidation}
                        />
                        <FormInput
                            id={"phone"}
                            label={"Phone number"}
                            type={"tel"}
                            value={phone}
                            setValue={setPhone}
                            validation={phoneValidation}
                        />
                        <FormInput
                            id={"pass"}
                            label={"Password"}
                            type={"password"}
                            value={password}
                            setValue={setPassword}
                            validation={passwordValidation}
                        />
                        <FormInput
                            id={"con-pass"}
                            label={"Confirm password"}
                            type={"password"}
                            value={conPassword}
                            setValue={setConPassword}
                            validation={conpasswordValidation}
                        />
                        <button className="signup-button" onClick={onSubmit}>Sign Up</button>
                        <Link to="/login" className="login-link">Already have an account? Log in</Link>
                    </form>
                </FormProvider>
            </div>
        </div>
    )
}

export default SignUp
