import { RouterProvider } from 'react-router';
import { router } from './router/index.jsx';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (

    // Reasons
    // - Makes auth and cart data accessible to all components
    // - Allows authentication state and cart to persist across navigation
    // - Must wrap RouterProvider so all routes have access to both contexts
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}

