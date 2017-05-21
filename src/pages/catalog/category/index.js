import React from 'react';

import CategoriesList from 'containers/categories-list';
import ItemsList from 'containers/items-list';

export default props => (
    <div>
        <CategoriesList parentId={parseInt(props.match.params.id)} />
        <ItemsList categoryId={parseInt(props.match.params.id)} />
    </div>
);
