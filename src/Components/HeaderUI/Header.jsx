import { useState } from "react";

const Header = () => {
    const [showSlide, setShowSlide] = useState('0%')
    return(
        <header>
            <nav>
                <p id="logo">veoveneht<span>_</span></p>
                <div id="navlink">
                    <a href='/'>Home</a>
                    <a href='/store'>Store</a>
                </div>
                <p id="menu" onClick={() => {
                    setShowSlide(showSlide === '0%' ? '100%' : '0%');
                }}><a href>Menu</a></p>
                <div id="slidebar" style={{width: `${showSlide}`}}>
                    <p id="logo">LISAN<span>_</span></p>
                    <div>
                        <a href="/">Home</a>
                        <a href="/store">Store</a>
                    </div>
                    <a  id="close" onClick={() => {
                    setShowSlide(showSlide === '100%' ? '0%' : '100%');
                }} href>Close</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;