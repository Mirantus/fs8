import * as types from 'constants/actions/catalog/categories';

export default (state = [], action = {}) => {
    switch (action.type) {
        case types.FETCH_CATEGORIES_SUCCESS:
            return action.payload.categories;
        default:
            return state;
    }
};