// @flow

import { combineReducers } from 'redux';

import categories from './catalog/categories';

const rootReducer = combineReducers({
    categories
});

export default rootReducer;
