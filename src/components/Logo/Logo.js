import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.css'

const logo = (props) => (
    <div className={styles.Logo} style={{height: props.height}}>
        <img src={BurgerLogo} alt="Burger Builder" />
    </div> 
);

export default logo;