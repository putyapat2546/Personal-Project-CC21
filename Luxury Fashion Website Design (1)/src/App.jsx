// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { LandingPage } from "./pages/LandingPage";
// import { CharacterSelection } from "./pages/CharacterSelection";
// import { CharacterReveal } from "./pages/CharacterReveal";
// import { HomePage } from "./pages/HomePage";
// import { ProductListing } from "./pages/ProductListing";
// import { ProductDetail } from "./pages/ProductDetail";
// import { VirtualTryOn } from "./pages/VirtualTryOn";
// import { Checkout } from "./pages/Checkout";
// import { Login } from "./pages/Login";
// import { Cart } from "./pages/Cart";

// export default function App() {
//   return (
//     <Router>
//       <div className="min-h-screen">

//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/select" element={<CharacterSelection />} />
//           <Route path="/reveal" element={<CharacterReveal />} />
//           <Route path="/home" element={<HomePage />} />
//           <Route path="/products" element={<ProductListing />} />
//           <Route path="/product/:productId" element={<ProductDetail />} />
//           <Route path="/tryon" element={<VirtualTryOn />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/cart" element={<Cart />} />
//         </Routes>

//       </div>
//     </Router>
//   );
// }

import { RouterProvider } from 'react-router';
import { router } from './router/index.jsx';

export default function App() {
  return <RouterProvider router={router} />;
}

