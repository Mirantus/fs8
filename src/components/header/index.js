// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';

export default () => {
    return (
        <header>
            <nav className="top-nav">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to={'/'} className="page-title">
                            Интернет-магазины Новосибирска
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};
