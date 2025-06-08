import React, { useState } from 'react';
import './Kontakt.css';

const Kontakt = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            } else {
                throw new Error('Failed to send message.');
            }
        } catch (error) {
            setStatus(error.message);
        }
    };

    return (
        <div className="page-wrapper">
            <div className="background-shape-1"></div>
            <div className="background-shape-2"></div>

            <main className="contact-section">
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">EESNIMI JA PERENIMI</label>
                                <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Sinu nimi" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-MAILI AADRESS</label>
                                <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email@tuulik.com" required />
                            </div>
                        </div>
                        {/* ... other form groups ... */}
                        <div className="form-group full-width submit-wrapper">
                            <button type="submit" className="submit-button">SAADA</button>
                        </div>
                        {status && <p style={{color: 'white', width: '100%', textAlign: 'center'}}>{status}</p>}
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Kontakt;