// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from 'store/configure-store';
import Home from 'pages/home';
import CatalogCategory from 'pages/catalog/category';
import CatalogItem from 'pages/catalog/item';
import Header from 'components/header';
import Footer from 'components/footer';

render(
    <Provider store={store}>
        <Router>
            <div>
                <Header />
                <main>
                    <div className="container">
                        <Route exact path="/" component={Home} />
                        <Route path="/catalog/category/:id" component={CatalogCategory} />
                        <Route path="/catalog/item/:id" component={CatalogItem} />
                    </div>
                </main>
                <Footer />
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);
