// @flow

import React from 'react';

import ItemCard from 'components/item-card';
import ItemContacts from 'components/item-contacts';

import type { CatalogItemType } from 'types/catalog/item';

type Props = {
    item: CatalogItemType
}

export default (props:Props) => {
    const { item } = props;

    return (
        <div>
            <a href={item.url}><ItemCard item={item} /></a>
            <ItemContacts item={item} />
        </div>
    );
};
