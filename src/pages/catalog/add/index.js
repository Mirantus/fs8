import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import { Link } from 'react-router-dom';

import { fetchCategories } from 'actions/catalog/categories';
import { initAddItem, addItem } from 'actions/catalog/items';
import Errors from 'components/errors';
import Loader from 'components/loader';

import Form from './form';

const mapStateToProps = state => ({
    categories: state.categories.data,
    ...state.pages.catalog.add
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        fetchCategories,
        initAddItem,
        addItem
    }, dispatch)
});

const add = props => {
    if (props.isSubmitting) {
        return <Loader />;
    }
    if (props.error) {
        return <Errors errors={[props.error]} />;
    }
    if (!props.errors && props.isSubmitted) {
        return (
            <div>
                <p>Спасибо. В ближайшее время мы рассмотрим вашу заявку.<br /><br />
                    <Link to="/">Вернуться в каталог</Link>
                </p>
            </div>
        );
    }
    return <Form {...props} />;
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            const { actions, categories } = this.props;

            actions.initAddItem();

            if (!categories.length) {
                actions.fetchCategories();
            }
        }
    })
)(add);
