import './FancyNavbar.css';

function FancyNavbar() {
    return(
        <nav className="Navbar">
            <ul className="menu">
                <div className="logo"><a href="https://www.argenmatic.com/">Argenmatic</a></div>

                <li className="menu-item"><a href="https://github.com/ArgentinoGeek/argenmatic">Pricing</a></li>
                <li className="menu-item"><a href="https://github.com/ArgentinoGeek/argenmatic">About us</a></li>
                <li className="menu-item"><a href="https://github.com/ArgentinoGeek/argenmatic">Contact us</a></li>
                <li className="menu-item"><a href="https://github.com/ArgentinoGeek/argenmatic" className="button-secondary">Sign up</a></li>
                <li className="menu-item"><a href="https://github.com/ArgentinoGeek/argenmatic" className="button-primary">Log in</a></li>
            </ul>
        </nav>
    );
}

export default FancyNavbar;