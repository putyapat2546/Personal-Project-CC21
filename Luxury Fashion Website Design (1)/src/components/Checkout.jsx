import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingBag, User, ChevronLeft } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
const cartItems = [{
  id: 1,
  name: 'Silk Evening Gown',
  size: 'M',
  color: 'Black',
  price: 3200,
  quantity: 1,
  image: 'https://images.unsplash.com/photo-1572533177115-5bea803c0f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200'
}, {
  id: 2,
  name: 'Leather Handbag',
  size: 'One Size',
  color: 'Brown',
  price: 1800,
  quantity: 1,
  image: 'https://images.unsplash.com/photo-1575201046471-082b5c1a1e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200'
}];
export function Checkout({
  onNavigate
}) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen bg-[#F8F8F8]"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-8 py-6 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-black tracking-[0.2em] cursor-pointer",
    style: {
      fontSize: '1.25rem'
    },
    onClick: () => onNavigate('home')
  }, "MAISON EIGHT"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-8"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('home'),
    className: "text-black hover:text-[#C6A664] transition-colors tracking-wider",
    style: {
      fontSize: '0.875rem'
    }
  }, "HOME"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('products'),
    className: "text-black hover:text-[#C6A664] transition-colors tracking-wider",
    style: {
      fontSize: '0.875rem'
    }
  }, "COLLECTIONS"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('cart'),
    className: "text-black hover:text-[#C6A664] transition-colors"
  }, /*#__PURE__*/React.createElement(ShoppingBag, {
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('login'),
    className: "text-black hover:text-[#C6A664] transition-colors"
  }, /*#__PURE__*/React.createElement(User, {
    size: 20
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "pt-24 min-h-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto px-8 py-12"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('products'),
    className: "flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8",
    style: {
      fontSize: '0.875rem'
    }
  }, /*#__PURE__*/React.createElement(ChevronLeft, {
    size: 18
  }), "CONTINUE SHOPPING"), /*#__PURE__*/React.createElement(motion.div, {
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
    },
    className: "mb-12"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-black tracking-wide",
    style: {
      fontSize: '2.5rem'
    }
  }, "Checkout"), /*#__PURE__*/React.createElement("div", {
    className: "h-px bg-[#C6A664] w-24 mt-4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-span-2 space-y-12"
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
      duration: 0.6,
      delay: 0.1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-black tracking-wide mb-6",
    style: {
      fontSize: '1.25rem'
    }
  }, "Shipping Information"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "firstName",
    className: "text-gray-700 mb-2 block",
    style: {
      fontSize: '0.875rem'
    }
  }, "FIRST NAME"), /*#__PURE__*/React.createElement(Input, {
    id: "firstName",
    placeholder: "Enter first name",
    className: "w-full border-gray-300 focus:border-[#C6A664]"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "lastName",
    className: "text-gray-700 mb-2 block",
    style: {
      fontSize: '0.875rem'
    }
  }, "LAST NAME"), /*#__PURE__*/React.createElement(Input, {
    id: "lastName",
    placeholder: "Enter last name",
    className: "w-full border-gray-300 focus:border-[#C6A664]"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "email",
    className: "text-gray-700 mb-2 block",
    style: {
      fontSize: '0.875rem'
    }
  }, "EMAIL ADDRESS"), /*#__PURE__*/React.createElement(Input, {
    id: "email",
    type: "email",
    placeholder: "Enter email address",
    className: "w-full border-gray-300 focus:border-[#C6A664]"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "address",
    className: "text-gray-700 mb-2 block",
    style: {
      fontSize: '0.875rem'
    }
  }, "STREET ADDRESS"), /*#__PURE__*/React.createElement(Input, {
    id: "address",
    placeholder: "Enter street address",
    className: "w-full border-gray-300 focus:border-[#C6A664]"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "city",
    className: "text-gray-700 mb-2 block",
    style: {
      fontSize: '0.875rem'
    }
  }, "CITY"), /*#__PURE__*/React.createElement(Input, {
    id: "city",
    placeholder: "City",
    className: "w-full border-gray-300 focus:border-[#C6A664]"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "state",
    className: "text-gray-700 mb-2 block",
    style: {
      fontSize: '0.875rem'
    }
  }, "STATE"), /*#__PURE__*/React.createElement(Input, {
    id: "state",
    placeholder: "State",
    className: "w-full border-gray-300 focus:border-[#C6A664]"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "zip",
    className: "text-gray-700 mb-2 block",
    style: {
      fontSize: '0.875rem'
    }
  }, "ZIP CODE"), /*#__PURE__*/React.createElement(Input, {
    id: "zip",
    placeholder: "Zip",
    className: "w-full border-gray-300 focus:border-[#C6A664]"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "h-px bg-[#C6A664]"
  }), /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.6,
      delay: 0.2
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-black tracking-wide mb-6",
    style: {
      fontSize: '1.25rem'
    }
  }, "Payment Details"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "cardNumber",
    className: "text-gray-700 mb-2 block",
    style: {
      fontSize: '0.875rem'
    }
  }, "CARD NUMBER"), /*#__PURE__*/React.createElement(Input, {
    id: "cardNumber",
    placeholder: "1234 5678 9012 3456",
    className: "w-full border-gray-300 focus:border-[#C6A664]"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "expiry",
    className: "text-gray-700 mb-2 block",
    style: {
      fontSize: '0.875rem'
    }
  }, "EXPIRY DATE"), /*#__PURE__*/React.createElement(Input, {
    id: "expiry",
    placeholder: "MM/YY",
    className: "w-full border-gray-300 focus:border-[#C6A664]"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "cvv",
    className: "text-gray-700 mb-2 block",
    style: {
      fontSize: '0.875rem'
    }
  }, "CVV"), /*#__PURE__*/React.createElement(Input, {
    id: "cvv",
    placeholder: "123",
    className: "w-full border-gray-300 focus:border-[#C6A664]"
  })))))), /*#__PURE__*/React.createElement(motion.div, {
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
      delay: 0.3
    },
    className: "col-span-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticky top-32 border border-gray-200 bg-white p-8 shadow-lg"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-black tracking-wide mb-6",
    style: {
      fontSize: '1.25rem'
    }
  }, "Order Summary"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6 mb-8"
  }, cartItems.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.id,
    className: "flex gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-20 h-24 overflow-hidden bg-gray-50 flex-shrink-0"
  }, /*#__PURE__*/React.createElement(ImageWithFallback, {
    src: item.image,
    alt: item.name,
    className: "w-full h-full object-cover"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-black mb-1",
    style: {
      fontSize: '0.875rem'
    }
  }, item.name), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-600 mb-2",
    style: {
      fontSize: '0.75rem'
    }
  }, "Size: ", item.size, " | ", item.color), /*#__PURE__*/React.createElement("p", {
    className: "text-[#C6A664]",
    style: {
      fontSize: '0.875rem'
    }
  }, "$", item.price.toLocaleString()))))), /*#__PURE__*/React.createElement("div", {
    className: "h-px bg-[#C6A664] mb-6"
  }), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3 mb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-gray-700",
    style: {
      fontSize: '0.875rem'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, "$", subtotal.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-gray-700",
    style: {
      fontSize: '0.875rem'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Shipping"), /*#__PURE__*/React.createElement("span", {
    className: "text-[#C6A664]"
  }, "Free")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between text-gray-700",
    style: {
      fontSize: '0.875rem'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Tax"), /*#__PURE__*/React.createElement("span", null, "$", tax.toFixed(2)))), /*#__PURE__*/React.createElement("div", {
    className: "h-px bg-[#C6A664] mb-6"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between mb-8",
    style: {
      fontSize: '1.125rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-black"
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "text-black"
  }, "$", total.toLocaleString())), /*#__PURE__*/React.createElement("button", {
    className: "w-full py-4 bg-[#C6A664] text-white hover:bg-[#b89654] transition-all duration-500 tracking-[0.15em]",
    style: {
      fontSize: '0.875rem'
    }
  }, "PLACE ORDER"), /*#__PURE__*/React.createElement("p", {
    className: "text-center text-gray-500 mt-6",
    style: {
      fontSize: '0.75rem'
    }
  }, "Your payment information is secure and encrypted")))))));
}