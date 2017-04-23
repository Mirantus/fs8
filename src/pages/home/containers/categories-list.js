import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProgressBar } from 'react-materialize';

import { fetchCategories } from 'actions/catalog/categories';
import Errors from 'components/errors';
import CategoriesList from '../components/categories-list';

class CategoriesListContainer extends Component {
    componentDidMount() {
        this.props.actions.fetchCategories();
    }

    render() {
        const { categories, errors, isFetching } = this.props;

        if (isFetching) {
            return <ProgressBar />;
        }

        if (errors.length) {
            return <Errors errors={errors} />;
        }

        return <CategoriesList categories={categories.filter(category => !category.cat)} />;
    }
}

const mapStateToProps = state => ({
    categories: state.categories.data,
    errors: state.categories.errors,
    isFetching: state.categories.isFetching
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ fetchCategories }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesListContainer);
