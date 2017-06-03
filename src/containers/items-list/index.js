// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

class ItemsListContainer extends Component {
    props:Props;

    componentDidMount() {
        const { actions, categoryId } = this.props;

        actions.fetchItems(categoryId);
    }

    componentWillReceiveProps(nextProps) {
        const { actions, categoryId } = this.props;

        if (categoryId !== nextProps.categoryId) {
            actions.fetchItems(nextProps.categoryId);
        }
    }

    render() {
        const { items, errors, isFetching } = this.props;

        if (isFetching) {
            return <ProgressBar />;
        }

        if (errors.length) {
            return <Errors errors={errors} />;
        }

        return <ItemsList items={items} />;
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchItems }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsListContainer);
