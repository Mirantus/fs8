// @flow

import React from 'react';
import styles from './styles.css';

type Props = {
    id: number
}

export default (props:Props) => {
    return (
        <div className={`card-image ${styles.image}`}>
            <img alt="" src={`http://fs8.ru/catalog/data/items/${props.id}.png`} />
        </div>
    );
};
