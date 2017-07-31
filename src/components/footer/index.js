// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';

export default () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <Link to={'/catalog/add'}>
                    Добавить магазин
                </Link>
            </div>
        </footer>
    );
};
