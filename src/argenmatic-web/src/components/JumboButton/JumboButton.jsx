import styles from './JumboButton.module.css';

const JumboButton = ({destinationUrl, primaryText, secondaryText, isPrimary}) => {
   return (
        <a href={destinationUrl} className={isPrimary ? styles.button : styles.buttonSecondary}>
            <span className={styles.primaryText}>{primaryText}</span>
            <span className={styles.secondaryText}>{secondaryText}</span>
        </a>
    );
}

export default JumboButton;