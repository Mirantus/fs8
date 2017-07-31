// @flow

import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'pages/home';
import CatalogCategory from 'pages/catalog/category';
import CatalogItem from 'pages/catalog/item';
import CatalogAdd from 'pages/catalog/add';

export default () => (
    <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/catalog/category/:id" component={CatalogCategory} />
        <Route path="/catalog/item/:id" component={CatalogItem} />
        <Route path="/catalog/add" component={CatalogAdd} />
    </div>
);
