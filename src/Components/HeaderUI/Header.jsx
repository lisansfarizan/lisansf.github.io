import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [showSlide, setShowSlide] = useState('0%')
    return(
        <header>
            <nav>
                <p id="logo">veoveneht<span>_</span></p>
                <div id="navlink">
                    <Link to='/'>Home</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <p id="menu" onClick={() => {
                    setShowSlide(showSlide === '0%' ? '100%' : '0%');
                }}><Link href>Menu</Link></p>
                <div id="slidebar" style={{width: `${showSlide}`}}>
                    <p id="logo">LISAN<span>_</span></p>
                    <div>
                        <Link href="/">Home</Link>
                        <Link href="/store">Store</Link>
                    </div>
                    <Link id="close" onClick={() => {
                    setShowSlide(showSlide === '100%' ? '0%' : '100%');
                }} href>Close</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;