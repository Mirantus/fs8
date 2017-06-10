// @flow

import React from 'react';

import type { CatalogItemType } from 'types/catalog/item';

import Image from './image';

type Props = {|
    item: CatalogItemType
|}

export default (props:Props) => {
    const { item } = props;

    return (
        <div className="card horizontal">
            <div className="card-stacked">
                <div className="card-content">
                    <span className="card-title">{item.title}</span>
                    <p className="grey-text text-darken-1">{item.tags}</p>
                </div>
            </div>
            { item.pr > 2 ? <Image id={item.id} /> : '' }
        </div>
    );
};
