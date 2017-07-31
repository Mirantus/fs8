import React from 'react';
import { Field, reduxForm } from 'redux-form';

const form = props => {
    return (
        <form className="form" onSubmit={props.handleSubmit(props.actions.addItem)}>
            <h2 style={{ color: '#ee6e73', fontWeight: 300 }}>Добавление сайта</h2>

            <label htmlFor="title" className="label">Название магазина</label>
            <Field id="title" name="title" component="input" type="text" required className="input" />

            <label htmlFor="url" className="label">Адрес сайта</label>
            <Field id="url" name="url" component="input" type="url" required className="input" />

            <label htmlFor="email" className="label">Email</label>
            <Field id="email" name="email" component="input" type="email" required className="input" />

            <label htmlFor="phone" className="label">Телефон</label>
            <Field id="phone" name="phone" component="input" type="text" className="input" />

            <label htmlFor="skype" className="label">Skype</label>
            <Field id="skype" name="skype" component="input" type="text" className="input" />

            <label htmlFor="tags" className="label">Товары магазина</label>
            <Field id="tags" name="tags" component="textarea" required className="textarea" placeholder="Одежда, обувь, игрушки" />

            {
                props.categories.length > 0 && (
                    <div>
                        <label htmlFor="cat" className="label">Рубрика</label>
                        <Field id="cat" name="cat" component="select">
                            {
                                props.categories.filter(category => !category.cat).map(category => (
                                    <optgroup label={category.title} key={category.id}>
                                        {
                                            props.categories
                                                .filter(subcategory => subcategory.cat === category.id || subcategory.id === category.id)
                                                .map(subcategory => (
                                                    <option value={subcategory.id} key={subcategory.id}>{subcategory.title}</option>
                                                ))
                                        }
                                    </optgroup>
                                ))
                            }
                        </Field>
                    </div>
                )
            }

            <p>
                <Field type="checkbox" id="shop" name="shop" component="input" required /> &nbsp;
                <label htmlFor="shop">Мой сайт - новосибирский интернет магазин с доставкой по городу</label>
            </p>

            <button type="submit" className="submit">Добавить</button>
        </form>
    );
};

export default reduxForm({
    form: 'add',
    initialValues: {
        title: 'название',
        url: 'http://ya.ru',
        email: 'e@mail.com',
        tags: 'Одежда, обувь, игрушки',
        cat: 2
    }
})(form);
