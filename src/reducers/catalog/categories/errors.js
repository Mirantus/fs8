import * as types from 'constants/actions/catalog/categories';

export default (state = [], action = {}) => {
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            return [];
        case types.FETCH_CATEGORIES_FAILURE:
            return [action.payload];
        default:
            return state;
    }
};
