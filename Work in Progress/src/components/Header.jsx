import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// You might need a separate CSS file for the header if it has unique styles
// import './Header.css';

const Header = () => {
    const { cartCount } = useCart();
    
    return (
        <header className="main-header" style={{position: 'relative', margin: '0 auto 50px auto'}}>
            <div className="logo-container">
                <img className="logo-icon" alt="Tuuliku logo" src="/assets/Tuulik.png" />
                <div className="logo-text">PEETRI TUULIK</div>
            </div>
            <nav className="main-nav">
                <NavLink to="/">Avaleht</NavLink>
                <NavLink to="/e-pood">E-Pood</NavLink>
                <NavLink to="/tooted">Tooted</NavLink>
                <NavLink to="/annetused">Annetused</NavLink>
                <NavLink to="/kontakt">Kontakt</NavLink>
            </nav>
            <div className="cart-container">
                <Link to="/ostukorv" className="cart-link">Ostukorv ({cartCount})</Link>
                <img className="cart-icon" alt="Ostukorv" src="/assets/image 54.png" />
            </div>
        </header>
    );
};

export default Header;