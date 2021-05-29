import './FancyNavbar.css';

export default function() {
    return(
        <nav className="Navbar">
            <ul className="menu">
                <div className="logo"><a href="#">Argenmatic</a></div>

                <li className="menu-item"><a href="#">Pricing</a></li>
                <li className="menu-item"><a href="#">About us</a></li>
                <li className="menu-item"><a href="#">Contact us</a></li>
                <li className="menu-item"><a href="#" className="button-secondary">Sign up</a></li>
                <li className="menu-item"><a href="#" className="button-primary">Log in</a></li>
            </ul>
        </nav>
    );
}