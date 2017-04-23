import { combineReducers } from 'redux';

import data from './data';
import errors from './errors';
import isFetching from './isFetching';

export default combineReducers({
    data,
    errors,
    isFetching
});