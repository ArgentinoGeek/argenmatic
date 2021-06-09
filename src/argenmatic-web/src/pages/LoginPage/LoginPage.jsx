import React, { useEffect } from 'react';
// eslint-disable-next-line
import styles from './LoginPage.module.css';
import FancyNavbar from '../../components/FancyNavbar/FancyNavbar';

const LoginPage = () => {
    useEffect(() => {
        document.title = 'Argenmatic - Log in';
    });

    return (
        <div>
            <FancyNavbar />
            <h1>Login</h1>
        </div>
    );
}

export default LoginPage;