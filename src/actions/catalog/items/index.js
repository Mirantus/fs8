// @flow

import * as types from 'constants/actions/catalog/items';

import type { Dispatch } from 'redux';

export const fetchItems = (categoryId:number) => {
    return (dispatch:Dispatch<Object>) => {
        dispatch({
            type: types.FETCH_ITEMS
        });

        // $FlowFixMe
        fetch(`${APP_ENV.apiUrl}/catalog/items?category=${categoryId}`)
            .then(response => response.json())
            .then(response => {
                dispatch({
                    type: types.FETCH_ITEMS_SUCCESS,
                    payload: response
                });
            })
            .catch(() => {
                dispatch({
                    type: types.FETCH_ITEMS_FAILURE,
                    payload: { message: 'Невозможно получить данные' }
                });
            });
    };
};
