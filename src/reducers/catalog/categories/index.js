// @flow

import { combineReducers } from 'redux';

import data from './data';
import errors from './errors';
import isFetching from './isFetching';
import items from './items';

export default combineReducers({
    data,
    errors,
    items,
    isFetching
});
