// @flow

import React from 'react';

import type { StateType as ErrorsType } from 'reducers/catalog/categories/errors';

type Props = {|
    errors: ErrorsType
|}

export default (props:Props) => {
    function renderError(error, key) {
        const message = error.message || 'нет данных';

        return (
            <div key={key}>
                <b>Ошибка: {message}</b>
            </div>
        );
    }

    return (
        <div>
            {props.errors.map((error, key) => renderError(error, key))}
        </div>
    );
};
