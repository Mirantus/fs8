import React from 'react';

import CategoriesList from 'containers/categories-list';

export default props => <CategoriesList parentId={parseInt(props.match.params.id)} />;
