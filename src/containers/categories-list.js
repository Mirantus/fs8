// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProgressBar } from 'react-materialize';

import { fetchCategories } from 'actions/catalog/categories/index';
import Errors from 'components/errors/index';
import CategoriesList from '../components/categories-list';

class CategoriesListContainer extends Component {
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

const mapStateToProps = (state, props) => {
    const categories = state.categories.data;

    return {
        categories: categories.filter(category => (props.parentId ? category.cat === props.parentId : !category.cat)),
        errors: state.categories.errors,
        isFetching: state.categories.isFetching,
        isLoaded: !!categories.length
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchCategories }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesListContainer);
