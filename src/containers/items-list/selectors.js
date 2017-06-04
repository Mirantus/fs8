import { createSelector } from 'reselect';

const mapStateToProps = createSelector(
    [
        state => state.items.data,
        (state, props) => state.categories.items[props.categoryId],
        state => state.items.errors,
        state => state.items.isFetching
    ],
    (data, list, errors, isFetching) => {
        const isLoaded = !!list;

        return {
            items: isLoaded ? list.map(id => data[id]) : [],
            errors,
            isFetching,
            isLoaded
        };
    }
);

export default mapStateToProps;
