// @flow

import * as types from 'constants/actions/catalog/items';

import type { ActionType } from 'actions/catalog/items/types';

export type StateType = Object;
const initialState = [];

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case types.FETCH_ITEMS:
            return initialState;
        case types.FETCH_ITEMS_SUCCESS:
            return action.payload.items.map(item => item.id);
        default:
            return state;
    }
};
