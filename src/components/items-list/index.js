// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import pure from 'recompose/pure';

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

const ItemsList = (props:Props) => {
    return <div>{props.items.map(item => renderItem(item))}</div>;
};

export default pure(ItemsList);
