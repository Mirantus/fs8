// @flow

import * as types from 'constants/actions/catalog/items';

import type { ActionType } from 'actions/catalog/items/types';
import type { CatalogItemType } from 'types/catalog/item';

export type StateType = Array<CatalogItemType>;
const initialState = [];

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case types.FETCH_ITEMS:
            return initialState;
        case types.FETCH_ITEMS_SUCCESS:
            return [...action.payload.items];
        default:
            return state;
    }
};
