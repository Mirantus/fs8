// @flow

import React from 'react';
import { Collection } from 'react-materialize';
import { Link } from 'react-router-dom';
import pure from 'recompose/pure';

import type { StateType as CategoriesType } from 'reducers/catalog/categories/data';

type Props = {
    categories: CategoriesType
}

const CategoriesList = (props:Props) => {
    return (
        <Collection>
            {
                props.categories.map(category => {
                    return (
                        <Link key={category.id} to={`/catalog/category/${category.id}`} className="collection-item">
                            {category.title}
                        </Link>
                    );
                })
            }
        </Collection>
    );
};

export default pure(CategoriesList);

