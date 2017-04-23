import * as types from 'constants/actions/catalog/categories';

export default (state = false, action = {}) => {
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            return true;
        case types.FETCH_CATEGORIES_SUCCESS:
        case types.FETCH_CATEGORIES_FAILURE:
            return false;
        default:
            return state;
    }
};
