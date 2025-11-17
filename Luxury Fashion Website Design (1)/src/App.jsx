import { RouterProvider } from 'react-router';
import { router } from './router/index.jsx';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    // CartProvider wraps the entire app to provide global cart state
    // Why it's here:
    // 1. Makes cart data accessible to ALL components (ProductDetail, Cart, Navbar, etc.)
    // 2. Allows adding items from any page and viewing them in cart page
    // 3. Persists cart data across page navigation (stays in memory)
    // 4. Must wrap RouterProvider so all routes have access to cart context
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

