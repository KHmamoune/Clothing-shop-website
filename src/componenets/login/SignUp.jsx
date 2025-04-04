import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div>
            <p>SingUp</p>
            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" />
                </div>
                <div>
                    <label htmlFor="first">First name</label>
                    <input id="first" type="text" />
                </div>
                <div>
                    <label htmlFor="last">Last name</label>
                    <input id="last" type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" />
                </div>
                <div>
                    <label htmlFor="phone">Phone number</label>
                    <input id="phone" type="tel" />
                </div>
                <div>
                    <label htmlFor="pass">Password</label>
                    <input id="pass" type="password" />
                </div>
                <div>
                    <label htmlFor="con-pass">Confirm password</label>
                    <input id="con-pass" type="password" />
                </div>
            </form>
            <Link to="/login">have an account?</Link>
        </div>
    )
}

export default SignUp
