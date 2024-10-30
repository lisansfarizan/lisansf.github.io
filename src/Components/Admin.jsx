import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import data from '../data.js'

const Login = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        
        if (localStorage.getItem('isLogin') === 'true') {
            navigate('/dashboard')
            alert(`Anda Telah Login!`)
        }
        
        setUsers(data)
    }, [navigate, users]);

    const onLogin = (e) => {
        e.preventDefault();

        // LF User
        const user = users.find(user => user.username === username && user.password === password);
        const name = users.find(user => user.name)

        if (user) {
            // Save login in localStorage
            localStorage.setItem('isLogin', true);
            localStorage.setItem('user', username);

            alert(`Login berhasil! Selamat datang ${name}`);
            // Redirect to dashboard page
            navigate('/dashboard'); // navigate to dashboard
        } else {
            alert('Username atau Password salah!');
        }
    };

    return (
        <>
        <Helmet title='Admin | VEO Veneht'/>
            <div id='login-form'>
                <form onSubmit={onLogin}>
                    <div id='input-wrapper'>
                        <div id="user-wrap">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                />
                        </div>
                        <div id="pass-wrap">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                        </div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
