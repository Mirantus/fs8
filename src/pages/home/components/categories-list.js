import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';

export default props => {
    return (
        <Collection>
            {
                props.categories.map(category => <CollectionItem key={category.id}>{category.title}</CollectionItem>)
            }
        </Collection>
    );
};
