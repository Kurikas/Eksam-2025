import React from 'react';
import { Link } from 'react-router-dom';
import './Tooted.css';

const Tooted = () => {
    return (
        <div className="page-container">
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

                    <div className="add-to-cart-button">
                        Lisa korvi
                    </div>

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

            <section className="similar-products">
                <h2>Sulle võib ka meeldida</h2>
                <div className="product-grid">
                    <div className="product-card">
                        <img src="/assets/Käsitöö-pott-1.png" alt="Savipott" />
                        <div className="product-title">Savipott</div>
                        <div className="product-description">Pott otse Peetri Tuuliku tipust</div>
                        <div className="product-price">20€</div>
                        <div className="product-button">Lisa korvi</div>
                    </div>

                    <div className="product-card">
                        <img src="/assets/Käsitöö-vaip.png" alt="Käsitöö vaip" />
                        <div className="product-title">Käsitöö vaip</div>
                        <div className="product-description">Vaip otse Tuuliku põrandalt</div>
                        <div className="product-price">30€</div>
                        <div className="product-button">Lisa korvi</div>
                    </div>

                    <div className="product-card">
                        <img src="/assets/Käsitöö-kaus-1.png" alt="Käsitöö kauss" />
                        <div className="product-title">Käsitöö kauss</div>
                        <div className="product-description">Kauss otse iidsetest aegadest</div>
                        <div className="product-price">20€</div>
                        <div className="product-button">Lisa korvi</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tooted;