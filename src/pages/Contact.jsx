import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="contact-page container">
            <h1 className="page-title text-center">{t('contact.title')}</h1>

            <div className="contact-form-container">
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">{t('contact.name')}</label>
                        <input type="text" id="name" name="name" placeholder={t('contact.name')} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">{t('contact.email')}</label>
                        <input type="email" id="email" name="email" placeholder={t('contact.email')} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">{t('contact.message')}</label>
                        <textarea id="message" name="message" rows="5" placeholder={t('contact.message')} required></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">{t('contact.send')}</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
