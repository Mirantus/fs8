// @flow

import * as types from 'constants/actions/catalog/items';

import type { ActionType } from 'actions/catalog/items/types';

export type StateType = boolean;
const initialState = false;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case types.FETCH_ITEMS:
            return true;
        case types.FETCH_ITEMS_SUCCESS:
        case types.FETCH_ITEMS_FAILURE:
            return initialState;
        default:
            return state;
    }
};
