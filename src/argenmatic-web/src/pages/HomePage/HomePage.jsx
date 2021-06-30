import React, { useEffect } from 'react';
import styles from './HomePage.module.css';
import FancyNavbar from '../../components/FancyNavbar/FancyNavbar';
import Header from '../../components/Header/Header';
import JumboButton from '../../components/JumboButton/JumboButton';
import Card from '../../components/Card/Card';

const HomePage = () => {
    useEffect(() => {
        document.title = 'Argenmatic - Home page';
    });

    return (
        <div>
            <FancyNavbar />
            <Header resumesCreated={120587452} />
            <div className={styles.bodyContainer}>
                <div className={styles.buttonContainer}>
                    <div className={styles.button}>
                        <JumboButton
                            primaryText="Create a resume"
                            secondaryText="For free"
                            destinationUrl="/build"
                            isPrimary={false}
                        />
                    </div>
                    <div className={styles.button}>
                        <JumboButton
                            primaryText="Log in"
                            secondaryText="to save your information"
                            destinationUrl="/login"
                            isPrimary={true}
                        />
                    </div>
                </div>
                <Card title="About">
                    {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultrices ut sem vel vestibulum. Mauris vel lacus et sapien egestas faucibus. In eu magna turpis. Donec in nunc a mauris lacinia egestas sit amet id velit. Nulla et quam sit amet augue feugiat hendrerit. Vestibulum gravida et felis nec interdum. Suspendisse potenti. Phasellus a purus ornare, placerat erat fermentum, efficitur eros. Fusce molestie magna nulla, sed eleifend erat euismod id. Vestibulum non gravida eros. Donec interdum pellentesque tellus eu mattis. Vestibulum posuere tristique cursus."}
                </Card>

                <Card title="Pricing">
                    <JumboButton
                        primaryText="Log in"
                        secondaryText="to save your information"
                        destinationUrl="/login"
                        isPrimary={true}
                    />
                </Card>
            </div>
        </div>
    );
}

export default HomePage;