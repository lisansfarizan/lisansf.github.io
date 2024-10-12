import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Import data
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
            const loginUser = users.find(user => user.username === username)
            setCurrentUser(loginUser)
        }
    }, [users, navigate])

    if (isLogin === '') {
        navigate('/login');
        alert('Kamu Belum Login!')
        return null;
    };

    return (
    <>
    <div className='main-wrapper'>
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
        <div id='post-card'>
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
    </div>
    </>
    );
}

export default Dashboard;
