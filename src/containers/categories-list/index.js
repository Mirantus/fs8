// @flow

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import { ProgressBar } from 'react-materialize';

import { fetchCategories } from 'actions/catalog/categories';
import CategoriesList from 'components/categories-list';
import Errors from 'components/errors/index';

import type { StateType as CategoriesType } from 'reducers/catalog/categories/data';
import type { StateType as ErrorsType } from 'reducers/catalog/categories/errors';

import mapStateToProps from './selectors';

type Props = {|
    categories: CategoriesType,
    isLoaded: boolean,
    isFetching: boolean,
    errors: ErrorsType,
    actions: {
        fetchCategories: Function,
    }
|};

const CategoriesListContainer = (props:Props) => {
    const { categories, errors, isFetching } = props;

    if (isFetching) {
        return <ProgressBar />;
    }

    if (errors.length) {
        return <Errors errors={errors} />;
    }

    return <CategoriesList categories={categories} />;
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchCategories }, dispatch)
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            const { actions, isLoaded } = this.props;

            if (!isLoaded) {
                actions.fetchCategories();
            }
        }
    })
)(CategoriesListContainer);
