import styles from './JumboButton.module.css';

const JumboButton = ({destinationUrl, primaryText, secondaryText, isPrimary}) => {
   return (
        <a href={destinationUrl} className={isPrimary ? styles.button : styles.buttonSecondary}>
            <span className={isPrimary ? styles.primaryText : styles.primaryTextAlternated}>{primaryText}</span>
            <span className={isPrimary ? styles.secondaryText : styles.secondaryTextAlternated}>{secondaryText}</span>
        </a>
    );
}

export default JumboButton;