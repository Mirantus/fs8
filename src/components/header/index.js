// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';

export default () => {
    return (
        <header className={styles.header}>
            <div className={styles.heading}>
                <div className="container">
                    <Link to={'/'}>
                        Интернет-магазины Новосибирска
                    </Link>
                </div>
            </div>
        </header>
    );
};
