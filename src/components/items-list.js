// @flow

import React from 'react';

import type { StateType as ItemsType } from 'reducers/catalog/items/data';
import ItemCard from './item-card/';

type Props = {
    items: ItemsType
}

export default (props:Props) => {
    return <div>{props.items.map(item => <ItemCard key={item.id} item={item} />)}</div>;
};
