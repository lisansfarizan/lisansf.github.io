import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const DashboardHeader = () => {
    const navigate = useNavigate()
    return(
        <>
        <Helmet title='Dashboard | VEO Veneht'/>
        <header>
            <nav>
                    <p id="logo">veoveneht<span>_</span></p>
                    <p onClick={() => {
                        alert(`Selamat Tinggal ${localStorage.getItem('user')}`)
                        window.localStorage.clear()
                        navigate('/login')
                    }} style={{cursor: 'pointer'}}>Logout</p>
            </nav>
        </header>
        </>
    )
}

export default DashboardHeader;