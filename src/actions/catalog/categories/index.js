// @flow

import * as types from 'constants/actions/catalog/categories';

import type { Dispatch } from 'redux';

export const fetchCategories = () => async (dispatch:Dispatch<Object>) => {
    dispatch({
        type: types.FETCH_CATEGORIES
    });

    try {
        // $FlowFixMe
        const response = await fetch(`${APP_ENV.apiUrl}/catalog/categories`);
        const categories = await response.json();

        dispatch({
            type: types.FETCH_CATEGORIES_SUCCESS,
            payload: categories
        });
    } catch (error) {
        dispatch({
            type: types.FETCH_CATEGORIES_FAILURE,
            payload: { message: 'Невозможно получить данные' }
        });
    }
};
