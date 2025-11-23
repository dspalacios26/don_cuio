import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3>Tacos Don Cuio</h3>
                    <p>{t('footer.tagline')}</p>
                </div>
                <div className="footer-section">
                    <h4>{t('location.hours_title')}</h4>
                    <p>{t('location.days')}: 8 PM - 4 AM</p>
                </div>
                <div className="footer-section">
                    <h4>{t('location.contact_title')}</h4>
                    <p>Centro, C. Colón 455 Sur</p>
                    <p>TRC, MX</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Tacos Don Cuio. {t('footer.rights')}</p>
            </div>
        </footer>
    );
};

export default Footer;
