// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import ItemCard from 'components/item-card/';

import type { CatalogItemType } from 'types/catalog/item';

type Props = {
    items: Array<CatalogItemType>
}

const renderItem = item => (
    <Link key={item.id} to={`/catalog/item/${item.id}`} className="collection-item">
        <ItemCard key={item.id} item={item} />
    </Link>
);

export default (props:Props) => {
    return <div>{props.items.map(item => renderItem(item))}</div>;
};
