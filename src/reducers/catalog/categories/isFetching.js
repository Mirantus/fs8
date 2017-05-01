// @flow

import * as types from 'constants/actions/catalog/categories';

import type { ActionType } from 'actions/catalog/categories/types';

export type StateType = boolean;
const initialState = false;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            return true;
        case types.FETCH_CATEGORIES_SUCCESS:
        case types.FETCH_CATEGORIES_FAILURE:
            return initialState;
        default:
            return state;
    }
};
