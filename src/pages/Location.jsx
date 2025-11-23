import React from 'react';
import { useTranslation } from 'react-i18next';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './Location.css';

const containerStyle = {
    width: '100%',
    height: '100%'
};

// Coordinates for Taquería Don Cuio
const center = {
    lat: 25.5367116,
    lng: -103.4484938
};

const Location = () => {
    const { t } = useTranslation();

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    });

    return (
        <div className="location-page container">
            <h1 className="page-title text-center">{t('location.title')}</h1>

            <div className="location-content">
                <div className="location-info">
                    <div className="info-block">
                        <h2>{t('location.address_title')}</h2>
                        <p>Centro, C. Colón 455 Sur</p>
                        <p>Torreón, Coahuila, MX</p>
                    </div>

                    <div className="info-block">
                        <h2>{t('location.hours_title')}</h2>
                        <p>{t('location.days')}</p>
                        <p className="highlight">8 PM - 4 AM</p>
                    </div>

                    <div className="info-block">
                        <h2>{t('location.contact_title')}</h2>
                        <p>+52 871 123 4567</p>
                        <p>hola@tacosdoncuio.com</p>
                    </div>
                </div>

                <div className="map-container">
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={16}
                        >
                            <Marker position={center} />
                        </GoogleMap>
                    ) : (
                        <div className="map-placeholder">
                            <span>{t('location.map_loading')}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Location;
