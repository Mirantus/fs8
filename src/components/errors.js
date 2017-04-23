import React from 'react';
import { CardPanel } from 'react-materialize';

export default props => {
    function renderError(error, key) {
        const message = error.message || 'нет данных';

        return (
            <div key={key}>
                <i className="material-icons" style={{ verticalAlign: 'bottom', marginRight: '5px' }}>error_outline</i>
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
