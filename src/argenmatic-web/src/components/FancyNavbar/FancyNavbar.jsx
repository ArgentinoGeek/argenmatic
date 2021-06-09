import styles from './FancyNavbar.module.css';
import { Link } from "react-router-dom";

const FancyNavbar = () => {
    return (
        <nav className={styles.Navbar}>
            <ul className={styles.menu}>
                <div className={styles.logo}><Link to="/">Argenmatic</Link></div>

                <li className={styles.menuItem}><Link to="/#pricing">Pricing</Link></li>
                <li className={styles.menuItem}><Link to="/#about-us">About us</Link></li>
                <li className={styles.menuItem}><Link to="/#contact-us">Contact us</Link></li>
                <li className={styles.menuItem}><Link to="/register" className={styles.buttonSecondary}>Sign up</Link></li>
                <li className={styles.menuItem}><Link to="/login" className={styles.buttonPrimary}>Log in</Link></li>
            </ul>
        </nav>
    );
}

export default FancyNavbar;