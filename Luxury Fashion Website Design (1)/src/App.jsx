import { RouterProvider } from 'react-router';
import { router } from './router/index.jsx';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    // AuthProvider wraps the app to provide user authentication state
    // CartProvider wraps the entire app to provide global cart state
    // Why they're here:
    // 1. Makes auth and cart data accessible to ALL components
    // 2. Allows authentication state and cart to persist across navigation
    // 3. Must wrap RouterProvider so all routes have access to both contexts
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}

