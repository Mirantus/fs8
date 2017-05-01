// @flow

import * as types from 'constants/actions/catalog/categories';

import type { Dispatch } from 'redux';

export const fetchCategories = () => {
    return (dispatch:Dispatch<Object>) => {
        dispatch({
            type: types.FETCH_CATEGORIES
        });

        // $FlowFixMe
        fetch(`${APP_ENV.apiUrl}/catalog/categories`)
            .then(response => response.json())
            .then(response => {
                dispatch({
                    type: types.FETCH_CATEGORIES_SUCCESS,
                    payload: response
                });
            })
            .catch(() => {
                dispatch({
                    type: types.FETCH_CATEGORIES_FAILURE,
                    payload: { message: 'Невозможно получить данные' }
                });
            });
    };
};
