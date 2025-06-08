import React, { useState, useEffect } from 'react';
import * as className from './avaleht.css'; 
// --- Reusable Shared Components ---

const Header = ({ currentRoute }) => {
    const baseRoute = currentRoute.split('/')[0];

    return (
        <header className="main-header">
            <div className="logo-container">
                <img className="logo-icon" alt="Tuuliku logo" src="/assets/Tuulik.png" />
                <div className="logo-text">PEETRI TUULIK</div>
            </div>
            <nav className="main-nav">
                <a href="#/" className={baseRoute === '' ? 'active' : ''}>Avaleht</a>
                <a href="#/e-pood" className={baseRoute === 'e-pood' ? 'active' : ''}>E-Pood</a>
                <a href="#/tooted" className={baseRoute === 'tooted' ? 'active' : ''}>Tooted</a>
                <a href="#/annetused" className={baseRoute === 'annetused' ? 'active' : ''}>Annetused</a>
                <a href="#/kontakt" className={baseRoute === 'kontakt' ? 'active' : ''}>Kontakt</a>
            </nav>
            {baseRoute !== '' && (
                <div className="cart-container">
                    <a href="#/ostukorv" className="cart-link">Ostukorv</a>
                    <img className="cart-icon" alt="Ostukorv" src="/assets/image 54.png" />
                </div>
            )}
        </header>
    );
};

const Footer = () => (
    <footer className="main-footer">
        <div className="footer-column">
            <h3>Telefoni abiliin</h3>
            <p>+372 5555 6666</p><p>E-R 9:00-17:00</p>
        </div>
        <div className="footer-column footer-logo-section">
            <img src="/assets/icons8-windmill-100 (2) 1.png" alt="Peetri Tuulik Logo" className="footer-logo" />
            <h3>PEETRI TUULIK</h3>
            <p className="copyright">@ copyright-2025-Peetri Tuulik</p>
        </div>
        <div className="footer-column">
            <h3>Jälgi meid</h3><p>Sotsiaal Meedia</p>
            <div className="social-icons">
                <img src="/assets/Frame 1.svg" alt="Social Icon" />
                <img src="/assets/Frame 2.svg" alt="Social Icon" />
                <img src="/assets/Frame.svg" alt="Social Icon" />
            </div>
        </div>
    </footer>
);

// --- Page Components ---

const HomePage = () => (
    <div className="desktop-3">
        <img className="tuulik-taust-icon" alt="Taustapilt" src="/assets/Tuulik-taust.png" />
        
        <div className="peetri-tuulik-parent">
            <b className="peetri-tuulik">Peetri Tuulik</b>
            <div className="silmi-vlunud-aastast">Silmi võlunud aastast 1892</div>
        </div>

        <b className="ajalugu">Ajalugu</b>
        <div className="desktop-3-inner"></div>
        <div className="rectangle-div"></div>
        <img className="tuuli-ajalugu-1-icon" alt="Ajalugu" src="/assets/Tuuli-ajalugu-1.png" />
        <div className="peetri-tuulik-on-container">
            <p>Peetri tuulik on oluline ajalooline ja kultuuriline mälestis, mis jutustab lugu möödunud aegadest ja eesti talurahva elust.</p>
            <p>&nbsp;</p>
            <p>See pukktuulik, mis kunagi jahvatas vilja, on tänapäeval taastatud ja renoveeritud tänu pühendunud inimeste jõupingutustele.</p>
            <p>Tuulik oli kogukonnale eluliselt tähtis, tagades leiva lauale ja olles seltskondlik koht.</p>
            <p>&nbsp;</p>
            <p>Tänapäeval on Peetri pukktuulik populaarne turismiatraktsioon, pakkudes võimaluse heita pilk minevikku ja</p>
            <p>nautida Eesti maastikku, olles elav tõestus meie ajaloo ja kultuuri rikkusest.</p>
        </div>
        <div className="loe-rohkem-container"><div className="loe-rohkem">Loe Rohkem</div></div>
        <img className="tuulik-ajalugu-2-icon" alt="Ajalugu 2" src="/assets/tuulik-ajalugu-2.png" />

        <b className="tuntumad-nimed">Tuntumad Nimed</b>
        <img className="tuulik-nimed-2-icon" alt="Tuntud nimed 2" src="/assets/Tuulik-nimed-2.png" />
        <img className="tuulik-nimed-1-icon" alt="Tuntud nimed 1" src="/assets/Tuulik-nimed-1.png" />
        <div className="tuuliku-peremees-jaan-container">
            <p><b>Tuuliku peremees Jaan</b>: Jaan oli noor ja energiline mees, kes võttis tuuliku üle oma isalt. Ta oli tuntud oma oskuse poolest tuulikut juhtida ja tema jahvatatud jahu oli piirkonnas väga hinnatud.</p>
            <p>&nbsp;</p>
            <p><b>Meister Andrus</b>: Andrus oli osav käsitööline, kes valmistas tuuliku jaoks vajalikke tööriistu ja varuosi. Tema täpsus ja pühendumus tagasid tuuliku sujuva toimimise.</p>
            <p>&nbsp;</p>
            <p><b>Küla vanem Toomas</b>: Toomas oli tark ja austatud mees, kes aitas korraldada tuuliku ehitust ja tagas selle, et tuulik teeniks kogu küla vajadusi.</p>
            <p>&nbsp;</p>
            <p><b>Noor õpipoiss Peeter</b>: Peeter oli entusiastlik nooruk, kes õppis tuuliku saladusi Jaanilt. Tema huvi ja pühendumus näitasid, et tuuliku traditsioon jätkub ka tulevikus.</p>
        </div>
        <div className="loe-rohkem-wrapper"><div className="loe-rohkem">Loe Rohkem</div></div>

        <div className="desktop-3-child3"></div>
        <img className="tuulik-ekursioon-1-icon" alt="Ekskursioon" src="/assets/Tuulik-ekursioon-1.png" />
        <div className="ekskursioonid">Ekskursioonid</div>
        <div className="broneeri-wrapper"><div className="broneeri">Broneeri</div></div>
        <div className="avasta-peetri-tuuliku-container">
            <p>Avasta Peetri Tuuliku põnevat ajalugu giidiga ekskursioonidel,</p>
            <p>kus sukeldud pukktuuliku saladustesse ja jahvatamise traditsioonidesse. </p>
            <p>See on ainulaadne võimalus kogeda Eesti maaelu pärandit ja broneerida elav ajalooreis.</p>
        </div>
        <div className="rectangle-parent">
            <div className="group-child"></div>
            <img className="tuulik-perepev-1-icon" alt="Perepäev" src="/assets/tuulik-perepäev-1.png" />
            <div className="perepev-tuulikuga">Perepäev tuulikuga</div>
            <div className="broneeri-container"><div className="broneeri">Broneeri</div></div>
            <div className="kutsume-teid-veetma">Kutsume teid veetma meeleolukat perepäeva...</div>
        </div>
        
        <div className="vaata-meie-ajagraafik">Vaata meie ajagraafikut</div>
        <div className="desktop-3-child5"></div>
        <div className="giidiga-ekskursioon"> Giidiga ekskursioon</div>
        <div className="juuni-2020-04">12 Juuni 2025. 04 00 PM</div>
        <img className="keyboard-arrow-right-24dp-5f63-icon" alt="arrow" src="/assets/keyboard_arrow_right_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1.svg" />
        
        <div className="desktop-3-child6"></div>
        <div className="perepev-tuulikukohin">Perepäev "Tuulikukohin"</div>
        <div className="juuni-2020-041">12 Juuni 2025. 04 00 PM</div>
        <img className="keyboard-arrow-right-24dp-5f63-icon1" alt="arrow" src="/assets/keyboard_arrow_right_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 1.svg" />

        <div className="rectangle-group">
            <div className="group-item"></div>
            <div className="ksit-tuulik-1-parent">
                <img className="ksit-tuulik-1-icon" alt="Käsitöö 1" src="/assets/Käsitöö-tuulik-1.png" />
                <img className="ksit-tuulik-1-icon" alt="Käsitöö 2" src="/assets/Käsitöö-tuulik-2.png" />
                <img className="ksit-tuulik-1-icon" alt="Käsitöö 3" src="/assets/Käsitöö-vaip-1.png" />
                <img className="ksit-tuulik-1-icon" alt="Käsitöö 4" src="/assets/Käsitöö-pott-1.png" />
            </div>
        </div>
    </div>
);

const EpoedPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/api/products').then(res => res.json()).then(setProducts);
    }, []);

    return (
        <main className="product-section">
            <h2 className="section-title">Tooted</h2>
            <div className="product-grid">
                {products.length > 0 ? products.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={`/${product.imageUrl}`} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <div className="price">{product.price.toFixed(2)}€</div>
                        <a href={`#/tooted/${product.id}`} className="button">Vaata lähemalt</a>
                    </div>
                )) : <p>Laen tooteid...</p>}
            </div>
        </main>
    );
};

const TootedPage = ({ productId }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (productId) {
            fetch('/api/products')
                .then(res => res.json())
                .then(products => {
                    const foundProduct = products.find(p => p.id === parseInt(productId));
                    setProduct(foundProduct);
                });
        }
    }, [productId]);

    if (!product) {
        return (
            <main className="product-main-section">
                <div className="product-images">
                    <img className="main-image" alt="Käsitöö Pukktuulik" src="/assets/Tuulik-tooted-main.png" />
                </div>
                <div className="product-details">
                    <h1>Vali toode E-poest</h1>
                    <p className="description">See on meie toodete vaatamise leht. Vali mõni toode e-poest, et näha selle detaile.</p>
                </div>
            </main>
        );
    }
    
    return (
        <main className="product-main-section">
            <div className="product-images">
                <img className="main-image" alt={product.name} src={`/${product.imageUrl}`} />
            </div>
            <div className="product-details">
                <h1>{product.name}</h1>
                <div className="price">{product.price.toFixed(2)}€</div>
                <p className="description">{product.description}</p>
                 <div className="add-to-cart-button">Lisa korvi</div>
            </div>
        </main>
    );
};


const AnnetusedPage = () => (
     <main className="annetused-container">
        <h1>Annetus Peetri Tuulikule</h1>
        <p>Restaureerimiseks ja säilitamiseks...</p>
        {/* The full layout for the Annetused page would be built here */}
    </main>
);

const KontaktPage = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch('/api/contacts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        setStatus(response.ok ? 'Täname! Teie sõnum on saadetud.' : 'Viga! Palun proovige uuesti.');
        if (response.ok) e.target.reset();
    };

    return (
        <main className="contact-section">
            <div className="contact-form-container">
                {status && <div className="status-message">{status}</div>}
                <form className="contact-form" onSubmit={handleSubmit}>
                     <div className="form-row">
                        <div className="form-group"><label htmlFor="name">Eesnimi ja Perenimi</label><input type="text" id="name" name="name" required /></div>
                        <div className="form-group"><label htmlFor="email">E-maili Aadress</label><input type="email" id="email" name="email" required /></div>
                     </div>
                     <div className="form-row">
                        <div className="form-group"><label htmlFor="phone">Telefoni Number</label><input type="tel" id="phone" name="phone" /></div>
                        <div className="form-group"><label htmlFor="subject">Teema</label><input type="text" id="subject" name="subject" /></div>
                     </div>
                     <div className="form-group full-width"><label htmlFor="message">Sõnum</label><textarea id="message" name="message" required></textarea></div>
                     <div className="form-group full-width submit-wrapper"><button type="submit" className="submit-button">SAADA</button></div>
                </form>
            </div>
        </main>
    );
};

// --- Main App Component with Router ---

function App() {
    const [route, setRoute] = useState(window.location.hash.slice(1).substring(1) || '');

    useEffect(() => {
        const handleHashChange = () => {
            setRoute(window.location.hash.slice(1).substring(1) || '');
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);
    
    const renderPage = () => {
        const [page, param] = route.split('/');

        switch (page) {
            case '': return <HomePage />;
            case 'e-pood': return <EpoedPage />;
            case 'tooted': return <TootedPage productId={param} />;
            case 'annetused': return <AnnetusedPage />;
            case 'kontakt': return <KontaktPage />;
            default: return <HomePage />;
        }
    };
    
    return (
        <div className="page-wrapper">
            <Header currentRoute={route.split('/')[0]} />
            <div className="content-wrap">
                {renderPage()}
            </div>
            <Footer />
        </div>
    );
}

export default App;
