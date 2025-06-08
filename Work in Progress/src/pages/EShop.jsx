import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import './EShop.css';

const EShop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // The proxy in package.json forwards this to http://localhost:3000/api/products
                const response = await fetch('/api/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="page-container">
            <section className="hero-section">
                <img className="hero-background" alt="E-pood taustapilt" src="/assets/E-shop-Taust.png" />
                <div className="hero-text">
                    <h1>Peetri Tuulik</h1>
                    <p>E-Shop</p>
                </div>
            </section>

            <main className="product-section">
                <h2 className="section-title">Tooted</h2>
                {/* Filter bar can be made functional later */}
                <div className="filter-bar">
                   {/* ... filter bar JSX ... */}
                </div>
                
                {loading && <p>Loading products...</p>}
                {error && <p>Error fetching products: {error}</p>}

                <div className="product-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default EShop;