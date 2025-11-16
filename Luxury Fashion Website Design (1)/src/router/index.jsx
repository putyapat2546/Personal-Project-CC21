// client/src/router/index.jsx

import { createBrowserRouter, Navigate } from 'react-router';

// Layout
import MainLayout from '../components/layouts/MainLayout';

// Pages
import { LandingPage } from '../pages/LandingPage';
import { CharacterSelection } from '../pages/CharacterSelection';
import { CharacterReveal } from '../pages/CharacterReveal';
import { HomePage } from '../pages/HomePage';
import { ProductListing } from '../pages/ProductListing';
import { ProductDetail } from '../pages/ProductDetail';
import VirtualTryOn from '../pages/VirtualTryOn';
import Checkout from '../pages/Checkout';
import { Login } from '../pages/Login';
import { Cart } from '../pages/Cart';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      // Default page
      { index: true, element: <LandingPage /> },

      // Character flow
      { path: 'select', element: <CharacterSelection /> },
      { path: 'reveal', element: <CharacterReveal /> },
      { path: 'home', element: <HomePage /> },

      // Products
      { path: 'products', element: <ProductListing /> },
      { path: 'product/:productId', element: <ProductDetail /> },

      // Virtual try-on
      { path: 'tryon', element: <VirtualTryOn /> },

      // Checkout
      { path: 'checkout', element: <Checkout /> },

      // Auth
      { path: 'login', element: <Login /> },

      // Cart
      { path: 'cart', element: <Cart /> },

      // Not found → redirect
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);
