import React from 'react';

import Item from 'containers/item';

export default props => <Item id={parseInt(props.match.params.id)} />;
