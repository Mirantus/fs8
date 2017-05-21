// @flow

import { combineReducers } from 'redux';

import categories from './catalog/categories';
import items from './catalog/items';
import item from './catalog/item';

const rootReducer = combineReducers({
    categories,
    items,
    item
});

export default rootReducer;
