import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import EShop from './pages/EShop';
import Tooted from './pages/Tooted';
import Annetused from './pages/Annetused';
import Kontakt from './pages/Kontakt';
import Ostukorv from './pages/Ostukorv';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/e-pood" element={<EShop />} />
          <Route path="/tooted" element={<Tooted />} />
          <Route path="/annetused" element={<Annetused />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/ostukorv" element={<Ostukorv />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;