import React from 'react';
import { useCart } from '../context/CartContext';
import './Ostukorv.css';

const Ostukorv = () => {
    const { cartItems, updateQuantity, removeFromCart } = useCart();
    
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 5.00;
    const total = subtotal + shipping;

    return (
        <main className="cart-section">
            <h1>Sinu Ostukorv</h1>
            <div className="cart-layout">
                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p>Sinu ostukorv on tühi.</p>
                    ) : (
                        cartItems.map(item => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.imageUrl} alt={item.name} className="item-image" />
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <button onClick={() => removeFromCart(item.id)} className="remove-button">Eemalda</button>
                                </div>
                                <div className="item-quantity">
                                    <button onClick={() => updateQuantity(item.id, -1)} className="quantity-btn minus-btn">-</button>
                                    <input type="text" className="quantity-input" value={item.quantity} readOnly />
                                    <button onClick={() => updateQuantity(item.id, 1)} className="quantity-btn plus-btn">+</button>
                                </div>
                                <div className="item-price">{(item.price * item.quantity).toFixed(2)}€</div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="order-summary">
                        <h2>Kokkuvõte</h2>
                        <div className="summary-row">
                            <span>Vahesumma</span>
                            <span id="subtotal">{subtotal.toFixed(2)}€</span>
                        </div>
                        <div className="summary-row">
                            <span>Saatmine</span>
                            <span>{shipping.toFixed(2)}€</span>
                        </div>
                        <div className="summary-row total">
                            <span>KOKKU</span>
                            <span id="total">{total.toFixed(2)}€</span>
                        </div>
                        <button className="checkout-button">Vormista ost</button>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Ostukorv;