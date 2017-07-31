// @flow

import * as types from 'constants/actions/catalog/items';

import type { ActionType } from 'actions/catalog/items/types';

export type StateType = boolean;
const initialState = false;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case types.ADD_ITEM_INIT:
        case types.ADD_ITEM:
            return false;
        case types.ADD_ITEM_SUCCESS:
        case types.ADD_ITEM_FAILURE:
            return true;
        default:
            return state;
    }
};
