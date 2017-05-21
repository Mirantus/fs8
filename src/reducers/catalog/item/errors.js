// @flow

import * as types from 'constants/actions/catalog/items';

import type { ActionType } from 'actions/catalog/items/types';
import type { ErrorType } from 'types/error';

export type StateType = Array<ErrorType>;
const initialState = [];

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case types.FETCH_ITEM:
            return initialState;
        case types.FETCH_ITEM_FAILURE:
            return [{ ...action.payload }];
        default:
            return state;
    }
};
