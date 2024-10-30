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
                }}>
                    <Link href>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    </Link>
                </p>
                <div id="slidebar" style={{width: `${showSlide}`}}>
                    <div id="logo">
                        <p>veoveneht<span>_</span></p>
                        <Link id="close" onClick={() => {
                        setShowSlide(showSlide === '100%' ? '0%' : '100%');
                        
                        }} href>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </Link>
                    </div>
                    <div id="slidelink">
                        <Link href="/">Home</Link>
                        <Link href="/store">Store</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;