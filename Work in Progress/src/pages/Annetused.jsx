import React, { useState } from 'react';
import './Annetused.css';

const Annetused = () => {
    // State to manage the donation amount and active tab
    const [amount, setAmount] = useState(10);
    const [isOneTimeDonation, setIsOneTimeDonation] = useState(true);

    const handleAmountClick = (value) => {
        setAmount(value);
        // Clear custom amount input if a button is clicked
        document.getElementById('custom-amount').value = ''; 
    };

    const handleCustomAmountChange = (e) => {
        const value = e.target.value;
        setAmount(value ? parseFloat(value) : 0);
    };

    return (
        <div className="page-wrapper">
            <div className="background-shape-1"></div>
            <div className="background-shape-2"></div>

            <main className="content-container">

                <section className="donation-info">
                    <h1>Annetus Peetri Tuulikule</h1>
                    <h2>Restaureerimiseks ja säilitamiseks</h2>
                    <p>
                        Annetust Peetri Tuulikule saab teostada nii käesoleval lehel asuva annetusvormi kaudu, kui ka pangaülekandega.
                    </p>
                    <p>
                        Pangaülekande korral kasutage alljärgnevaid IBAN-e:
                    </p>
                    <div className="bank-details">
                        <p><span>Saaja:</span> <b>Peetri tuulik</b></p>
                        <p><b>SEB pank</b> <span>IBAN: EE12121212121212121212</span></p>
                        <p><b>Swedbank</b> <span>IBAN: EE122121212121212121212</span></p>
                    </div>
                    <p className="info-note">
                        NB! Palume tingimata märkida ülekandele maksja ees- ja perekonnanimi. Annetuselt on võimalik saada tulumaksusoodustust. Kui on soov toetada Tuulikut püsivalt siis on võimalus teha pangas <b>püsikorraldusleping.</b>
                    </p>
                </section>

                <section className="donation-form-container">
                    <div className="donation-type-tabs">
                        <button 
                            className={isOneTimeDonation ? 'tab active' : 'tab'}
                            onClick={() => setIsOneTimeDonation(true)}
                        >
                            Ühekordne annetus
                        </button>
                        <button 
                            className={!isOneTimeDonation ? 'tab active' : 'tab'}
                            onClick={() => setIsOneTimeDonation(false)}
                        >
                            Püsiannetus
                        </button>
                    </div>
                    <form className="donation-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label>Toetatav projekt</label>
                            <div className="select-box">
                                <span>Annetus Peetri tuulikule</span>
                                <img src="/assets/Vector.svg" alt="arrow" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Annetan raha</label>
                            <p className="sub-label">Vali annetuse summa</p>
                            <div className="amount-options">
                                <button type="button" className="amount-button" onClick={() => handleAmountClick(10)}>10.00€</button>
                                <button type="button" className="amount-button" onClick={() => handleAmountClick(25)}>25.00€</button>
                                <button type="button" className="amount-button" onClick={() => handleAmountClick(50)}>50.00€</button>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="custom-amount">Või kirjuta sobiv summa</label>
                            <input type="number" id="custom-amount" className="custom-amount-input" onChange={handleCustomAmountChange} placeholder="€" />
                        </div>

                        <div className="form-group">
                            <label>Minu andmed</label>
                            <input type="text" placeholder="Eesnimi ja perenimi" />
                            <input type="text" placeholder="Isikukood" />
                        </div>

                        <div className="form-group">
                            <label>Vormistamine</label>
                            <p className="sub-label">Vormista annetus valides eelistatud maksemeetod</p>
                            <div className="payment-options">
                                <button type="button" className="payment-button"><img src="/assets/image 57.png" alt="SEB" /></button>
                                <button type="button" className="payment-button"><img src="/assets/image 59.png" alt="LHV" /></button>
                                <button type="button" className="payment-button"><img src="/assets/image 58.png" alt="Swedbank" /></button>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Annetused;