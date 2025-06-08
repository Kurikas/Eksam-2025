import React from 'react';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-column">
                <h3>Telefoni abiliin</h3>
                <p>+372 5555 6666</p>
                <p>E-R 9:00-17:00</p>
            </div>
            <div className="footer-column footer-logo-section">
                <img src="/assets/icons8-windmill-100 (2) 1.png" alt="Peetri Tuulik Logo" className="footer-logo" />
                <h3>PEETRI TUULIK</h3>
                <p className="copyright">@ copyright-2025-Peetri Tuulik</p>
            </div>
            <div className="footer-column">
                <h3>Jälgi meid</h3>
                <p>Sotsiaal Meedia</p>
                <div className="social-icons">
                    <img src="/assets/Frame.svg" alt="Social Icon" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;