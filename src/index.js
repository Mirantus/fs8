// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from 'pages/home';
import store from 'store/configure-store';

render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={Home} />
        </Router>
    </Provider>,
    document.getElementById('app')
);
