import React from 'react';
import { useTranslation } from 'react-i18next';
import './Location.css';

const Location = () => {
    const { t } = useTranslation();

    return (
        <div className="location-page container">
            <h1 className="page-title text-center">{t('location.title')}</h1>

            <div className="location-content">
                <div className="location-info">
                    <div className="info-block">
                        <h2>{t('location.address_title')}</h2>
                        <p>Centro, C. Colón</p>
                        <p>Torreón, Coahuila, MX</p>
                    </div>

                    <div className="info-block">
                        <h2>{t('location.hours_title')}</h2>
                        <p>{t('location.days')}</p>
                        <p className="highlight">1 PM - 4 AM</p>
                    </div>

                    <div className="info-block">
                        <h2>{t('location.contact_title')}</h2>
                        <p>+52 871 123 4567</p>
                        <p>hola@tacosdoncuio.com</p>
                    </div>
                </div>

                <div className="map-container">
                    {/* Placeholder for Google Maps Embed */}
                    <div className="map-placeholder">
                        <span>{t('location.map_loading')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
