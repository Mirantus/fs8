// @flow

import * as types from 'constants/actions/catalog/items';

import type { Dispatch } from 'redux';

import type { CatalogItemType } from 'types/catalog/item';

export const fetchItems = (categoryId:number) => async (dispatch:Dispatch<Object>) => {
    dispatch({
        type: types.FETCH_ITEMS
    });

    try {
        // $FlowFixMe
        const response = await fetch(`${APP_ENV.apiUrl}/catalog/items?category=${categoryId}`);
        const items = await response.json();

        dispatch({
            type: types.FETCH_ITEMS_SUCCESS,
            payload: items
        });
    } catch (error) {
        dispatch({
            type: types.FETCH_ITEMS_FAILURE,
            payload: { message: 'Невозможно получить данные' }
        });
    }
};

export const fetchItem = (id:number) => async (dispatch:Dispatch<Object>) => {
    dispatch({
        type: types.FETCH_ITEM
    });

    try {
        // $FlowFixMe
        const response = await fetch(`${APP_ENV.apiUrl}/catalog/items/${id}`);
        const item = await response.json();

        dispatch({
            type: types.FETCH_ITEM_SUCCESS,
            payload: item
        });
    } catch (error) {
        dispatch({
            type: types.FETCH_ITEM_FAILURE,
            payload: { message: 'Невозможно получить данные' }
        });
    }
};

export const initAddItem = () => (
    {
        type: types.ADD_ITEM_INIT
    }
);

export const addItem = (values:Array<CatalogItemType>) => async (dispatch:Dispatch<Object>) => {
    dispatch({
        type: types.ADD_ITEM
    });

    try {
        const response = await fetch(
            // $FlowFixMe
            `${APP_ENV.apiUrl}/catalog/items`,
            {
                method: 'POST',
                body: JSON.stringify(values)
            }
        );
        await response.json();
        dispatch({
            type: types.ADD_ITEM_SUCCESS
        });
    } catch (error) {
        dispatch({
            type: types.ADD_ITEM_FAILURE,
            payload: { message: 'Ошибка отправки данных' }
        });
    }
};
