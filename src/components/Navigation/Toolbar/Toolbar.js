import React from 'react';
import styles from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <Logo />
            <div>Menu</div>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default toolbar;