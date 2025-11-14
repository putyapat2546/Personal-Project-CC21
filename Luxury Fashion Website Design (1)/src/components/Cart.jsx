import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import { User } from 'lucide-react';
export function Cart({
  onNavigate
}) {
  const [cartItems, setCartItems] = useState([{
    id: '1',
    name: 'Silk Evening Gown',
    price: 2850,
    size: 'M',
    color: 'Black',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1589986993357-6f9a171e02d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  }, {
    id: '2',
    name: 'Cashmere Overcoat',
    price: 3200,
    size: 'L',
    color: 'Camel',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1575201046471-082b5c1a1e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  }, {
    id: '3',
    name: 'Leather Handbag',
    price: 1650,
    size: 'One Size',
    color: 'Cognac',
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  }]);
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items => items.map(item => item.id === id ? {
      ...item,
      quantity: newQuantity
    } : item));
  };
  const removeItem = id => {
    setCartItems(items => items.filter(item => item.id !== id));
  };
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 5000 ? 0 : 50;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-[#F8F8F8]"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "bg-white border-b border-gray-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-8 py-6 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('home'),
    className: "text-black tracking-[0.2em] hover:text-[#C6A664] transition-colors",
    style: {
      fontSize: '1.25rem'
    }
  }, "MAISON EIGHT"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-8"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('home'),
    className: "text-gray-600 hover:text-black transition-colors tracking-wider",
    style: {
      fontSize: '0.875rem'
    }
  }, "Continue Shopping"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('login'),
    className: "text-black hover:text-[#C6A664] transition-colors"
  }, /*#__PURE__*/React.createElement(User, {
    size: 20
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-8 py-16"
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.8
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-black mb-12 tracking-wide",
    style: {
      fontSize: '2.5rem'
    }
  }, "Shopping Bag"), cartItems.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "text-center py-20"
  }, /*#__PURE__*/React.createElement(ShoppingBag, {
    size: 64,
    className: "mx-auto mb-6 text-gray-300"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "text-gray-600 mb-8 tracking-wide",
    style: {
      fontSize: '1.5rem'
    }
  }, "Your bag is empty"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate('products'),
    className: "bg-black hover:bg-[#C6A664] text-white px-12 py-6 tracking-[0.2em] transition-all duration-300",
    style: {
      fontSize: '0.875rem'
    }
  }, "DISCOVER COLLECTIONS")) : /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-span-2 space-y-6"
  }, cartItems.map((item, index) => /*#__PURE__*/React.createElement(motion.div, {
    key: item.id,
    initial: {
      opacity: 0,
      x: -20
    },
    animate: {
      opacity: 1,
      x: 0
    },
    transition: {
      duration: 0.6,
      delay: index * 0.1
    },
    className: "bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-40 h-48 flex-shrink-0 overflow-hidden"
  }, /*#__PURE__*/React.createElement(ImageWithFallback, {
    src: item.image,
    alt: item.name,
    className: "w-full h-full object-cover"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-grow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between mb-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-black mb-2 tracking-wide",
    style: {
      fontSize: '1.125rem'
    }
  }, item.name), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 mb-1",
    style: {
      fontSize: '0.875rem'
    }
  }, "Size: ", item.size), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600",
    style: {
      fontSize: '0.875rem'
    }
  }, "Color: ", item.color)), /*#__PURE__*/React.createElement("button", {
    onClick: () => removeItem(item.id),
    className: "text-gray-400 hover:text-black transition-colors h-fit"
  }, /*#__PURE__*/React.createElement(X, {
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 border border-gray-300 px-4 py-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => updateQuantity(item.id, item.quantity - 1),
    className: "text-gray-600 hover:text-black transition-colors"
  }, /*#__PURE__*/React.createElement(Minus, {
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-black w-8 text-center",
    style: {
      fontSize: '0.875rem'
    }
  }, item.quantity), /*#__PURE__*/React.createElement("button", {
    onClick: () => updateQuantity(item.id, item.quantity + 1),
    className: "text-gray-600 hover:text-black transition-colors"
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 16
  }))), /*#__PURE__*/React.createElement("p", {
    className: "text-black tracking-wide",
    style: {
      fontSize: '1.125rem'
    }
  }, "$", (item.price * item.quantity).toLocaleString()))))))), /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      x: 20
    },
    animate: {
      opacity: 1,
      x: 0
    },
    transition: {
      duration: 0.8,
      delay: 0.2
    },
    className: "h-fit"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-8 shadow-sm"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-black mb-6 tracking-wide",
    style: {
      fontSize: '1.25rem'
    }
  }, "Order Summary"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 mb-6 pb-6 border-b border-gray-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-gray-600",
    style: {
      fontSize: '0.875rem'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, "$", subtotal.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-gray-600",
    style: {
      fontSize: '0.875rem'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Shipping"), /*#__PURE__*/React.createElement("span", null, shipping === 0 ? 'FREE' : `$${shipping}`)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-gray-600",
    style: {
      fontSize: '0.875rem'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Tax"), /*#__PURE__*/React.createElement("span", null, "$", tax.toFixed(2)))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between mb-8 text-black",
    style: {
      fontSize: '1.125rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tracking-wide"
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "tracking-wide"
  }, "$", total.toFixed(2))), /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate('checkout'),
    className: "w-full bg-black hover:bg-[#C6A664] text-white py-6 tracking-[0.2em] transition-all duration-300 mb-4",
    style: {
      fontSize: '0.875rem'
    }
  }, "PROCEED TO CHECKOUT"), /*#__PURE__*/React.createElement("p", {
    className: "text-center text-gray-500 tracking-wide",
    style: {
      fontSize: '0.75rem'
    }
  }, "Free shipping on orders over $5,000")), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 bg-white p-6 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 text-gray-600",
    style: {
      fontSize: '0.75rem'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "flex items-start gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[#C6A664] mt-1"
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, "Complimentary gift wrapping")), /*#__PURE__*/React.createElement("p", {
    className: "flex items-start gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[#C6A664] mt-1"
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, "30-day returns & exchanges")), /*#__PURE__*/React.createElement("p", {
    className: "flex items-start gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[#C6A664] mt-1"
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, "Secure payment processing")))))))));
}