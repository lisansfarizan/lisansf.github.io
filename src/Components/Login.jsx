const Login = () => {

    const user = [
        {
            "name" : "udin",
            "password" : "080880",
        },
        {
            "name" : "adam",
            "password" : "adam",
        }
    ]
    const username = user.name
    const password = user.password

    const onLogin = () => {

        if(username && password) {
            alert(`bener Konrol! ${username} ${password}`)
        } else {
            alert(`salah Konrol! ${username} ${password}`)
        }
    }

    return(
        <>
        <form onSubmit={onLogin}>
            <div id="user-wrap">
                <label for='username'>Username</label>
                <input 
                type="text" 
                id="username"
                name="username"
                value={username}
                />
            </div>
            <div id="pass-wrap">
                <label for='password'>Password</label>
                <input type="password" 
                id="password" 
                name="password" 
                value={password}
                />
            </div>
            <button type='submit'>Login</button>
        </form>
        </>
    )
}

export default Login;