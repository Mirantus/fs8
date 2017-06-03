// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProgressBar } from 'react-materialize';

import { fetchCategories } from 'actions/catalog/categories';
import CategoriesList from 'components/categories-list';
import Errors from 'components/errors/index';

import type { StateType as CategoriesType } from 'reducers/catalog/categories/data';
import type { StateType as ErrorsType } from 'reducers/catalog/categories/errors';

import mapStateToProps from './selectors';

type Props = {
    categories: CategoriesType,
    isLoaded: boolean,
    isFetching: boolean,
    errors: ErrorsType,
    actions: {
        fetchCategories: Function,
    }
};

class CategoriesListContainer extends Component {
    props:Props;

    componentDidMount() {
        const { actions, isLoaded } = this.props;

        if (!isLoaded) {
            actions.fetchCategories();
        }
    }

    render() {
        const { categories, errors, isFetching } = this.props;

        if (isFetching) {
            return <ProgressBar />;
        }

        if (errors.length) {
            return <Errors errors={errors} />;
        }

        return <CategoriesList categories={categories} />;
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchCategories }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesListContainer);
