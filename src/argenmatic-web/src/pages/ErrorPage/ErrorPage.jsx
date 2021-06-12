import styles from './ErrorPage.module.css';
import FancyNavbar from "../../components/FancyNavbar/FancyNavbar";

const ErrorPage = () => {
    return (
        <div>
            <FancyNavbar />
            <div className={styles.errorContainer}>
                <h1>Oops! Something weird is happening here.</h1>
                <h2>We really sorry! Please, go back to the Home page or try again later.</h2>
                <span className={styles.sign}>— Argenmatic team</span>
            </div>
        </div>
    );
}

export default ErrorPage;