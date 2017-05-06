// @flow

import React from 'react';
import { Collection } from 'react-materialize';
import { Link } from 'react-router-dom';

import type { StateType as CategoriesType } from 'reducers/catalog/categories/data';

type Props = {
    categories: CategoriesType
}

export default (props:Props) => {
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
