
const Footer = () => {
    const today = new Date()
    return (
        <>
        <footer>
            <div id="foot-wrap">
                <div id="foot-link">
                    <a href='/'>Home</a>
                    <a href='/store'>Store</a>
                    <a href='/contact'>Contact</a>
                    <a href='/about'>About</a>
                    <a href='/sitemap'>Sitemap</a>
                    <a href='/privacy-policy'>Privacy Policy</a>
                </div>
                <p>&copy;{today.getFullYear()} Alright Reserved.</p>
            </div>
        </footer>
        </>
    )
}

export default Footer;