import styles from './Header.module.css';
import background from '../../img/papers.jpg';

const Header = ({ resumesCreated }) => {
    return (
        <div className={styles.header}>
            <img src={background} alt="Backgound papers" />
            <div className={styles.content}>
                <span className={styles.resumesCount}>{resumesCreated.toLocaleString()}</span>
                <span className={styles.label}>Resumes created</span>
            </div>
        </div>
    );
}

export default Header;