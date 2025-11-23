import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';
import logo from '../assets/images/logo-icon-green.png';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            <span className="d-block">{t('home.title_1')}</span>
                            <span className="d-block text-primary">{t('home.title_2')}</span>
                        </h1>
                        <p className="hero-subtitle">{t('home.subtitle')}</p>
                        <div className="hero-cta">
                            <Link to="/menu" className="btn btn-primary">{t('home.cta')}</Link>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={logo} alt="Tacos Don Cuio Logo" className="hero-logo-large" />
                    </div>
                </div>
            </section>

            {/* Marquee / Highlights */}
            <div className="marquee-container">
                <div className="marquee-content">
                    <span>TACOS DON CUIO • OPEN 1 PM - 4 AM • AUTHENTIC FLAVOR • </span>
                    <span>TACOS DON CUIO • OPEN 1 PM - 4 AM • AUTHENTIC FLAVOR • </span>
                </div>
            </div>

            {/* Intro / About Preview */}
            <section className="intro-section container">
                <h2 className="section-title text-center">{t('home.intro_title')}</h2>
                <p className="text-center intro-text">
                    {t('home.intro_text')}
                </p>
            </section>
        </div>
    );
};

export default Home;
