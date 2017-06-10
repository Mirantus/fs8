// @flow

import React from 'react';
import styles from './styles.css';

type Props = {|
    id: number
|}

export default (props:Props) => {
    return (
        <div className={`card-image ${styles.image}`}>
            <img alt="" src={`/data/logo/${props.id}.png`} />
        </div>
    );
};
