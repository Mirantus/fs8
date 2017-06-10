// @flow

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import { ProgressBar } from 'react-materialize';

import { fetchItem } from 'actions/catalog/items';
import Item from 'components/item';
import Errors from 'components/errors/index';

import type { CatalogItemType } from 'types/catalog/item';

import type { StateType as ErrorsType } from 'reducers/catalog/item/errors';

type Props = {|
    id: number,
    item: CatalogItemType,
    isFetching: boolean,
    isLoaded: boolean,
    errors: ErrorsType,
    actions: {
        fetchItem: Function
    }
|};

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

const ItemContainer = (props:Props) => {
    const { item, errors, isFetching, isLoaded } = props;

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
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            const { actions, id, isLoaded } = this.props;

            if (!isLoaded) {
                actions.fetchItem(id);
            }
        }
    })
)(ItemContainer);
