import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/images/logo-white-processed.png';
import logoBlack from '../assets/images/logo-black-processed.png';
import './Navbar.css';

import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    React.useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.removeAttribute('data-theme');
        } else {
            root.setAttribute('data-theme', 'light');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={theme === 'light' ? logoBlack : logoWhite} alt="Tacos Don Cuio" />
                </Link>

                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setIsOpen(false)}>{t('nav.home')}</Link>
                    <Link to="/menu" onClick={() => setIsOpen(false)}>{t('nav.menu')}</Link>
                    <Link to="/location" onClick={() => setIsOpen(false)}>{t('nav.location')}</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>{t('nav.contact')}</Link>
                    <div className="navbar-item">
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    </div>
                </div>

                <button className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
