// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProgressBar } from 'react-materialize';

import { fetchItem } from 'actions/catalog/items';
import Item from 'components/item';
import Errors from 'components/errors/index';

import type { CatalogItemType } from 'types/catalog/item';

import type { StateType as ErrorsType } from 'reducers/catalog/item/errors';

type Props = {
    id: number,
    item: CatalogItemType,
    isFetching: boolean,
    isLoaded: boolean,
    errors: ErrorsType,
    actions: {
        fetchItem: Function
    }
};

class ItemsListContainer extends Component {
    props:Props;

    componentDidMount() {
        const { actions, id, isLoaded } = this.props;

        if (!isLoaded) {
            actions.fetchItem(id);
        }
    }

    render() {
        const { item, errors, isFetching, isLoaded } = this.props;

        if (isFetching) {
            return <ProgressBar />;
        }

        if (errors.length) {
            return <Errors errors={errors} />;
        }

        if (!isLoaded) {
            return <ProgressBar />;
        }

        return <Item item={item} />;
    }
}

const mapStateToProps = (state, props) => {
    const { errors, isFetching } = state.item;
    const item = state.items.data[props.id];

    return {
        item,
        errors,
        isFetching,
        isLoaded: !!item
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchItem }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsListContainer);
