import styles from './Card.module.css';

const Card = (props) => {
    return (
        <div className={styles.card}>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.content}>{props.children}</span>
        </div>
    );
}

export default Card;