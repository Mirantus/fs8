import { createSelector } from 'reselect';

const mapStateToProps = createSelector(
    [
        state => state.items.data,
        state => state.items.list,
        state => state.items.errors,
        state => state.items.isFetching
    ],
    (data, list, errors, isFetching) => {
        return {
            items: list.map(id => data[id]),
            errors,
            isFetching,
            isLoaded: !!data.length
        };
    }
);

export default mapStateToProps;
