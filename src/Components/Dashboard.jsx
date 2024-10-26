import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import data from '../data.js';

const Dashboard = () => {
    const [user, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Import data
        setUsers(data)
        
        fetch('/da.json')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.error('Fetch Error', err))

        // Import Login with data user
        const isLogin = localStorage.getItem('isLogin');
        setIsLogin(isLogin)

        if(!isLogin) {
            navigate('/login')
            alert('belum login')
        } else {
            const username = localStorage.getItem('user')
            const loginUser = user.find(user => user.username === username)
            setCurrentUser(loginUser)
        }
    }, [user, navigate])

    if (isLogin === '') {
        navigate('/login');
        alert('Kamu Belum Login!')
        return null;
    };

    return (
    <>
        <div id='side-dashboard'>
            <div id='menu-and-profile'>
            <p>Tema</p>
            <p>Postingan</p>
            {currentUser && (
            <p>
                <img src={currentUser.img} alt={currentUser.name} /> {currentUser.name}
            </p>
            )}
            </div>
        </div>
        <div id='dashboard-post'>
        {
            currentUser && (
                currentUser.post.map((x, index) =>(
                    <div key={index} className='cards'>
                        <p>{x.title}</p>
                        <p>{x.shortdesc}</p>
                    </div>
            ))
        )}
        </div>
    </>
    );
}

export default Dashboard;
