// @flow

import { combineReducers } from 'redux';

import categories from './catalog/categories';
import items from './catalog/items';

const rootReducer = combineReducers({
    categories,
    items
});

export default rootReducer;
