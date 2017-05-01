// @flow

import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';

import type { StateType as CategoriesType } from 'reducers/catalog/categories/data';

type Props = {
    categories: CategoriesType
}

export default (props:Props) => {
    return (
        <Collection>
            {
                props.categories.map(category => <CollectionItem key={category.id}>{category.title}</CollectionItem>)
            }
        </Collection>
    );
};
