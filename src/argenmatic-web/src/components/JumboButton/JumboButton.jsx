import styles from './JumboButton.module.css';
import { Link } from "react-router-dom";

const JumboButton = ({ destinationUrl, primaryText, secondaryText, isPrimary }) => {
    return (
        <Link to={destinationUrl} className={isPrimary ? styles.button : styles.buttonSecondary}>
            <span className={isPrimary ? styles.primaryText : styles.primaryTextAlternated}>{primaryText}</span>
            <span className={isPrimary ? styles.secondaryText : styles.secondaryTextAlternated}>{secondaryText}</span>
        </Link>
    );
}

export default JumboButton;