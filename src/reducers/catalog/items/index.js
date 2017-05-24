// @flow

import { combineReducers } from 'redux';

import data from './data';
import list from './list';
import errors from './errors';
import isFetching from './isFetching';

export default combineReducers({
    data,
    list,
    errors,
    isFetching
});
