const SignUp = () => {
    return (
        <div>
            <p>SingUp</p>
            <form>
                <div>
                    <label for="username">Username</label>
                    <input id="username" type="text" />
                </div>
                <div>
                    <label for="first">First name</label>
                    <input id="first" type="text" />
                </div>
                <div>
                    <label for="last">Last name</label>
                    <input id="last" type="text" />
                </div>
                <div>
                    <label for="email">Email</label>
                    <input id="email" type="text" />
                </div>
                <div>
                    <label for="phone">Phone number</label>
                    <input id="phone" type="tel" />
                </div>
                <div>
                    <label for="pass">Password</label>
                    <input id="pass" type="password" />
                </div>
                <div>
                    <label for="con-pass">Confirm password</label>
                    <input id="con-pass" type="password" />
                </div>
            </form>
            <a href="login">have an account?</a>
        </div>
    )
}

export default SignUp
