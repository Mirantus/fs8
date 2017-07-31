// @flow

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import categories from './catalog/categories';
import items from './catalog/items';
import item from './catalog/item';
import pages from './pages';

const rootReducer = combineReducers({
    form,
    categories,
    items,
    item,
    pages
});

export default rootReducer;
