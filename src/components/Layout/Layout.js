import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import styles from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Auxiliary>
        <Toolbar />
        <main className={styles.Content}>
            {props.children}
        </main>
    </Auxiliary>
);


export default layout;