import * as types from 'constants/actions/catalog/categories';

export const fetchCategories = () => {
    return dispatch => {
        dispatch({
            type: types.FETCH_CATEGORIES
        });

        fetch(`${APP_ENV.apiUrl}/catalog/categories`)
            .then(response => response.json())
            .then(response => {
                dispatch({
                    type: types.FETCH_CATEGORIES_SUCCESS,
                    payload: response
                });
            })
            .catch(error => {
                dispatch({
                    type: types.FETCH_CATEGORIES_FAILURE,
                    payload: error
                });
            });
    };
};
