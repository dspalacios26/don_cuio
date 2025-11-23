import React from 'react';
import { useTranslation } from 'react-i18next';
import './Menu.css';

const Menu = () => {
    const { t } = useTranslation();

    const menuItems = {
        tacos: [
            { name: 'Adobada', price: '$35', desc: t('menu.items.adobada') },
            { name: 'Suadero', price: '$35', desc: t('menu.items.suadero') },
            { name: 'Cuero', price: '$35', desc: t('menu.items.cuero') },
            { name: 'Buche', price: '$35', desc: t('menu.items.buche') },
        ],
        specials: [
            { name: 'Orden', price: '$130', desc: t('menu.items.orden') },
            { name: 'Costra', price: '$40', desc: t('menu.items.costra') },
            { name: 'Gringa', price: '$100', desc: t('menu.items.gringa') },
        ],
        drinks: [
            { name: 'Agua Natural (1Lt)', price: '$30', desc: t('menu.items.agua_nat') },
            { name: 'Refresco', price: '$35', desc: t('menu.items.refresco') },
            { name: 'Agua Mineral', price: '$35', desc: t('menu.items.agua_min') },
            { name: 'Boing', price: '$35', desc: t('menu.items.boing') },
        ]
    };

    return (
        <div className="menu-page container">
            <h1 className="page-title text-center">{t('menu.title')}</h1>

            <div className="menu-section">
                <h2 className="menu-category">{t('menu.category_tacos')}</h2>
                <p className="menu-subtitle text-center mb-4">{t('menu.subtitle')}</p>
                <div className="menu-grid">
                    {menuItems.tacos.map((item, index) => (
                        <div key={index} className="menu-card">
                            <div className="menu-card-header">
                                <h3>{item.name}</h3>
                                <span className="price">{item.price}</span>
                            </div>
                            <p className="menu-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="menu-section">
                <h2 className="menu-category">{t('menu.category_specials')}</h2>
                <div className="menu-grid">
                    {menuItems.specials.map((item, index) => (
                        <div key={index} className="menu-card">
                            <div className="menu-card-header">
                                <h3>{item.name}</h3>
                                <span className="price">{item.price}</span>
                            </div>
                            <p className="menu-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="menu-section">
                <h2 className="menu-category">{t('menu.category_drinks')}</h2>
                <div className="menu-grid">
                    {menuItems.drinks.map((item, index) => (
                        <div key={index} className="menu-card">
                            <div className="menu-card-header">
                                <h3>{item.name}</h3>
                                <span className="price">{item.price}</span>
                            </div>
                            <p className="menu-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
