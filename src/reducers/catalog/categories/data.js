// @flow

import * as types from 'constants/actions/catalog/categories';

import type { ActionType } from 'actions/catalog/categories/types';
import type { CatalogCategoryType } from 'types/catalog/category';

export type StateType = Array<CatalogCategoryType>;
const initialState = [];

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            return initialState;
        case types.FETCH_CATEGORIES_SUCCESS:
            return [...action.payload.categories];
        default:
            return state;
    }
};
