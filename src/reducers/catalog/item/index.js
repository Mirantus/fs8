// @flow

import { combineReducers } from 'redux';

import errors from './errors';
import isFetching from './isFetching';

export default combineReducers({
    errors,
    isFetching
});
