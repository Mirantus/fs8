// @flow

import React from 'react';

import type { CatalogItemType } from 'types/catalog/item';

import styles from './styles.css';

type Props = {|
    item: CatalogItemType
|}

export default (props:Props) => {
    const { item } = props;

    return (
        <div className="card">
            <div className="card-main">
                <div className="card-title">{item.title}</div>
                <div className="card-content">{item.tags}</div>
            </div>
            {
                item.pr > 2
                    ? (
                        <div className={styles.image}>
                            <img id={item.id} alt="" src={`/data/logo/${item.id}.png`} />
                        </div>
                    )
                    : ''
            }
        </div>
    );
};
