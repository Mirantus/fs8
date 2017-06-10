// @flow

import React from 'react';

import type { CatalogItemType } from 'types/catalog/item';

import styles from './styles.css';

type Props = {|
    item: CatalogItemType
|}

const renderContact = (contact) => {
    const icon = <i className={`${styles.icon} ${styles[contact.key]}`} />;
    const text = contact.url
        ? <a href={contact.url}>{icon} {contact.value}</a>
        : <span>{icon} {contact.value}</span>;

    return <p key={contact.key}>{text}</p>;
};

export default (props:Props) => {
    const { item } = props;

    let contacts = [
        { key: 'phone' },
        { key: 'url', hasUrl: true },
        { key: 'icq' },
        { key: 'skype' },
        { key: 'odnoklassniki', hasUrl: true },
        { key: 'vkontakte', hasUrl: true },
        { key: 'facebook', hasUrl: true },
        { key: 'youtube', hasUrl: true },
        { key: 'twitter', hasUrl: true },
        { key: 'livejournal', hasUrl: true },
        { key: 'flamp', hasUrl: true },
    ];

    contacts = contacts.reduce((result, contact) => {
        if (item[contact.key]) {
            result.push({
                key: contact.key,
                value: item[contact.key],
                url: contact.hasUrl ? item[contact.key] : undefined
            });
        }

        return result;
    }, []);

    return (
        <div className="card">
            <div className="card-content">
                <span className="card-title">Контакты</span>
                { contacts.map(contact => renderContact(contact)) }
            </div>
        </div>
    );
};
