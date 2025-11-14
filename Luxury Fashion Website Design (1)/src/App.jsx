import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LandingPage } from "./components/LandingPage";
import { CharacterSelection } from "./components/CharacterSelection";
import { CharacterReveal } from "./components/CharacterReveal";
import { HomePage } from "./components/HomePage";
import { ProductListing } from "./components/ProductListing";
import { ProductDetail } from "./components/ProductDetail";
import { VirtualTryOn } from "./components/VirtualTryOn";
import { Checkout } from "./components/Checkout";
import { Login } from "./components/Login";
import { Cart } from "./components/Cart";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/select" element={<CharacterSelection />} />
          <Route path="/reveal" element={<CharacterReveal />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/tryon" element={<VirtualTryOn />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </div>
    </Router>
  );
}
