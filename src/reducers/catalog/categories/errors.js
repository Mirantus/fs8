// @flow

import * as types from 'constants/actions/catalog/categories';

import type { ActionType } from 'actions/catalog/categories/types';
import type { ErrorType } from 'types/error';

export type StateType = Array<ErrorType>;
const initialState = [];

export default (state:StateType = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            return [];
        case types.FETCH_CATEGORIES_FAILURE:
            return [{ ...action.payload }];
        default:
            return state;
    }
};
