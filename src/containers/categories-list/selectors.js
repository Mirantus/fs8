import { createSelector } from 'reselect';

const mapStateToProps = createSelector(
    [
        state => state.categories.data,
        state => state.categories.errors,
        state => state.categories.isFetching,
        (state, props) => props.parentId
    ],
    (categories, errors, isFetching, parentId) => {
        return {
            categories: categories.filter(category => (parentId ? category.cat === parentId : !category.cat)),
            errors,
            isFetching,
            isLoaded: !!categories.length
        };
    }
);

export default mapStateToProps;
