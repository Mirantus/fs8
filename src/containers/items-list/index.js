// @flow

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import { ProgressBar } from 'react-materialize';

import { fetchItems } from 'actions/catalog/items/index';
import ItemsList from 'components/items-list';
import Errors from 'components/errors/index';

import type { CatalogItemType } from 'types/catalog/item';
import type { StateType as ErrorsType } from 'reducers/catalog/items/errors';

import mapStateToProps from './selectors';

type Props = {
    categoryId: number,
    items: Array<CatalogItemType>,
    isFetching: boolean,
    isLoaded: boolean,
    errors: ErrorsType,
    actions: {
        fetchItems: Function
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchItems }, dispatch)
});

const ItemsListContainer = (props:Props) => {
    const { items, errors, isFetching } = props;

    if (isFetching) {
        return <ProgressBar />;
    }

    if (errors.length) {
        return <Errors errors={errors} />;
    }

    return <ItemsList items={items} />;
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            const { actions, categoryId, isLoaded } = this.props;

            if (!isLoaded) {
                actions.fetchItems(categoryId);
            }
        },
        componentWillReceiveProps(nextProps) {
            const { actions, categoryId } = this.props;

            if (categoryId !== nextProps.categoryId && !nextProps.isLoaded) {
                actions.fetchItems(nextProps.categoryId);
            }
        }
    })
)(ItemsListContainer);
