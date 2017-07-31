// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from 'store/configure-store';
import Header from 'components/header';
import Footer from 'components/footer';

import Routes from './routes';

render(
    <Provider store={store}>
        <Router>
            <div>
                <Header />
                <main>
                    <div className="container">
                        <Routes />
                    </div>
                </main>
                <Footer />
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);
