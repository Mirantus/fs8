// @flow

import * as types from 'constants/actions/catalog/items';

import type { ActionType } from 'actions/catalog/items/types';
import type { CatalogItemType } from 'types/catalog/item';

export type StateType = {[id:number]: CatalogItemType};
const initialState = {};

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case types.FETCH_ITEMS_SUCCESS:
        case types.FETCH_ITEM_SUCCESS:
            const newState = { ...state };
            action.payload.items.forEach(item => { newState[item.id] = item; });
            return newState;
        default:
            return state;
    }
};
