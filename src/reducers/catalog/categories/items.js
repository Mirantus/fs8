// @flow

import * as types from 'constants/actions/catalog/items';

import type { ActionType } from 'actions/catalog/items/types';

export type StateType = {[id:number]: number};
const initialState = {};

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case types.FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                [action.payload.metadata.query.category]: action.payload.items.map(item => item.id)
            };
        default:
            return state;
    }
};
