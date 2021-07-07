import styles from './Tier.module.css';

const Tier = ({title, features}) => {
    return(
        <div className={styles.tier}>
            <span className={styles.title}>{title}</span>
            {
            features.forEach(feature => {
                <div className={styles.feature}>
                    <span className={styles.featureName}>{feature.featureName}</span>
                    <span className={styles.price}>{feature.price}</span>
                </div>
            })}
            {/* <div className={styles.feature}>
                <span className={styles.featureName}>Download PDF</span>
                <span className={styles.price}>free</span>
            </div>
            <div className={styles.feature}>
            <span className={styles.featureName}>Download PDF</span>
                <span className={styles.price}>free</span>
            </div>
            <div className={styles.feature}>
            <span className={styles.featureName}>Download PDF</span>
                <span className={styles.price}>free</span>
            </div>
            <div className={styles.feature}>
            <span className={styles.featureName}>Download PDF</span>
                <span className={styles.price}>free</span>
            </div>
            <div className={styles.feature}>
            <span className={styles.featureName}>Download PDF</span>
                <span className={styles.price}>free</span>
            </div> */}
        </div>
    );
}

export default Tier;