// @flow

import * as types from 'constants/actions/catalog/items';

import type { ActionType } from 'actions/catalog/categories/types';
import type { ErrorType } from 'types/error';

export type StateType = ?ErrorType;
const initialState = null;

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case types.ADD_ITEM:
        case types.ADD_ITEM_SUCCESS:
            return initialState;
        case types.ADD_ITEM_FAILURE:
            return { ...action.payload };
        default:
            return state;
    }
};
