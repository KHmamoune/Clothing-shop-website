const LogIn = () => {
    return (
        <div>
            <p>LogIn</p>
            <form>
                <div>
                    <label for="email">Email</label>
                    <input id="email" type="text" />
                </div>
                <div>
                    <label for="pass">Password</label>
                    <input id="pass" type="password" />
                </div>
            </form>
            <a href="/signup">create an account</a>
        </div>
    )
}

export default LogIn
