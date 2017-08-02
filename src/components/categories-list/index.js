// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import pure from 'recompose/pure';

import type { StateType as CategoriesType } from 'reducers/catalog/categories/data';

import styles from './styles.css';

type Props = {|
    categories: CategoriesType
|}

const CategoriesList = (props:Props) => {
    return (
        <div className={styles.collection}>
            {
                props.categories.map(category => {
                    return (
                        <Link key={category.id} to={`/catalog/category/${category.id}`} className={styles.collectionItem}>
                            {category.title}
                        </Link>
                    );
                })
            }
        </div>
    );
};

export default pure(CategoriesList);

