import React, { useState, useEffect } from 'react';
import * as className from './tooted.css'; 
// --- Reusable Components ---

const Header = ({ onNavigate }) => (
    <header className="main-header">
        <div className="logo-container">
            <img className="logo-icon" alt="Tuuliku logo" src="/assets/Tuulik.png" />
            <div className="logo-text">PEETRI TUULIK</div>
        </div>
        <nav className="main-nav">
            <a href="#" onClick={() => onNavigate('Avaleht')}>Avaleht</a>
            <a href="#" onClick={() => onNavigate('E-Pood')}>E-Pood</a>
            <a href="#" onClick={() => onNavigate('Tooted')}>Tooted</a>
            <a href="#" onClick={() => onNavigate('Annetused')}>Annetused</a>
            <a href="#" onClick={() => onNavigate('Kontakt')}>Kontakt</a>
        </nav>
        <div className="cart-container">
            <a href="#" onClick={() => onNavigate('Ostukorv')} className="cart-link">Ostukorv (1)</a>
            <img className="cart-icon" alt="Ostukorv" src="/assets/image 54.png" />
        </div>
    </header>
);

const Footer = () => (
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

// --- Page Components ---

const TootedPage = () => {
    // In a real app, you would fetch product data based on an ID
    // For now, it displays a sample product.
    return (
        <main className="product-main-section">
            <div className="product-images">
                <img className="main-image" alt="Käsitöö Pukktuulik" src="/assets/Tuulik-tooted-main.png" />
                <div className="thumbnail-images">
                    <img className="thumbnail" alt="Toote pisipilt 1" src="/assets/Tuulik-tooted-1.png" />
                    <img className="thumbnail" alt="Toote pisipilt 2" src="/assets/Tuulik-tooted-2.png" />
                </div>
            </div>
            <div className="product-details">
                <h1>Käsitöö Pukktuulik</h1>
                <div className="price">20€</div>
                <p className="description">
                    See käsitööna valminud tuulik on palju enamat kui lihtsalt dekoratiivne ese – see on meisterlikkuse ja Eesti pärandi sümbol.
                </p>
                <div className="options">
                    <div className="option-group">
                        <label htmlFor="suurus">Suurus</label>
                        <div className="select-wrapper">Vali suurus</div>
                    </div>
                    <div className="option-group">
                        <label htmlFor="kogus">Kogus</label>
                        <div className="select-wrapper">1</div>
                    </div>
                </div>
                <div className="add-to-cart-button">Lisa korvi</div>
                <div className="accordion">
                    <div className="accordion-item">
                        <b className="accordion-title">Kirjeldus</b>
                        <img className="accordion-icon" alt="laienda" src="/assets/add_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 1.svg" />
                    </div>
                    <div className="accordion-item">
                        <b className="accordion-title">Üksikasjad ja funktsioonid</b>
                        <img className="accordion-icon" alt="laienda" src="/assets/add_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 2.svg" />
                    </div>
                </div>
            </div>
        </main>
    );
};

// --- Main App Component ---

function App() {
    const [currentPage, setCurrentPage] = useState('Tooted'); // Default page

    const navigate = (page) => {
        setCurrentPage(page);
    };

    // This function decides which page component to render
    const renderPage = () => {
        switch (currentPage) {
            case 'Tooted':
                return <TootedPage />;
            // Add cases for 'Avaleht', 'E-Pood', etc. here
            // case 'E-Pood':
            //     return <EpoedPage onNavigate={navigate} />;
            default:
                return <TootedPage />;
        }
    };

    return (
        <div className="page-container">
            <Header onNavigate={navigate} />
            {renderPage()}
            <Footer />
        </div>
    );
}

export default App;