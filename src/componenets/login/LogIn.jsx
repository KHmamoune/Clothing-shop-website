import { Link } from 'react-router-dom'

const LogIn = () => {
    return (
        <div>
            <p>LogIn</p>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" />
                </div>
                <div>
                    <label htmlFor="pass">Password</label>
                    <input id="pass" type="password" />
                </div>
            </form>
            <Link to="/signup">create an account</Link>
        </div>
    )
}

export default LogIn
