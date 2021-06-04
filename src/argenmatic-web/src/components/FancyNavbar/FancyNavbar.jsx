import styles from './FancyNavbar.module.css';

const FancyNavbar = () => {
    return(
        <nav className={styles.Navbar}>
            <ul className={styles.menu}>
                <div className={styles.logo}><a href="https://www.argenmatic.com/">Argenmatic</a></div>

                <li className={styles.menuItem}><a href="https://github.com/ArgentinoGeek/argenmatic">Pricing</a></li>
                <li className={styles.menuItem}><a href="https://github.com/ArgentinoGeek/argenmatic">About us</a></li>
                <li className={styles.menuItem}><a href="https://github.com/ArgentinoGeek/argenmatic">Contact us</a></li>
                <li className={styles.menuItem}><a href="https://github.com/ArgentinoGeek/argenmatic" className={styles.buttonSecondary}>Sign up</a></li>
                <li className={styles.menuItem}><a href="https://github.com/ArgentinoGeek/argenmatic" className={styles.buttonPrimary}>Log in</a></li>
            </ul>
        </nav>
    );
}

export default FancyNavbar;