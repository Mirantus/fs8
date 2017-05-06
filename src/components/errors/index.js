// @flow

import React from 'react';
import { CardPanel } from 'react-materialize';

import type { StateType as ErrorsType } from 'reducers/catalog/categories/errors';
import styles from './styles.css';

type Props = {
    errors: ErrorsType
}

export default (props:Props) => {
    function renderError(error, key) {
        const message = error.message || 'нет данных';

        return (
            <div key={key}>
                <i className={`material-icons ${styles.icon}`}>error_outline</i>
                <b>Ошибка: {message}</b>
            </div>
        );
    }

    return (
        <CardPanel className="red-text">
            {props.errors.map((error, key) => renderError(error, key))}
        </CardPanel>
    );
};
