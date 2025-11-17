import React from "react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ShoppingBag, ChevronLeft } from "lucide-react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useNavigate } from "react-router-dom";
import { UserMenu } from "../components/UserMenu";

const cartItems = [
  {
    id: 1,
    name: "Silk Evening Gown",
    size: "M",
    color: "Black",
    price: 3200,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1572533177115-5bea803c0f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
  },
  {
    id: 2,
    name: "Leather Handbag",
    size: "One Size",
    color: "Brown",
    price: 1800,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1575201046471-082b5c1a1e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
  },
];

export default function Checkout() {
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <h1
            className="text-black tracking-[0.2em] cursor-pointer text-xl"
            onClick={() => navigate("/")}
          >
            MAISON EIGHT
          </h1>

          <div className="flex items-center gap-8">
            <button
              onClick={() => navigate("/")}
              className="text-black hover:text-[#C6A664] transition-colors text-sm"
            >
              HOME
            </button>

            <button
              onClick={() => navigate("/products")}
              className="text-black hover:text-[#C6A664] transition-colors text-sm"
            >
              COLLECTIONS
            </button>

            <button
              onClick={() => navigate("/cart")}
              className="text-black hover:text-[#C6A664] transition-colors"
            >
              <ShoppingBag size={20} />
            </button>

            <UserMenu />
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="pt-24 min-h-screen">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <button
            onClick={() => navigate("/products")}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8 text-sm"
          >
            <ChevronLeft size={18} />
            CONTINUE SHOPPING
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-black tracking-wide text-4xl">Checkout</h2>
            <div className="h-px bg-[#C6A664] w-24 mt-4" />
          </motion.div>

          <div className="grid grid-cols-3 gap-16">
            {/* LEFT SIDE */}
            <div className="col-span-2 space-y-12">
              {/* SHIPPING INFO */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-black tracking-wide mb-6 text-xl">
                  Shipping Information
                </h3>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700 mb-2 block text-sm">
                        FIRST NAME
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Enter first name"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <Label htmlFor="lastName" className="text-gray-700 mb-2 block text-sm">
                        LAST NAME
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Enter last name"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 mb-2 block text-sm">
                      EMAIL ADDRESS
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-gray-700 mb-2 block text-sm">
                      STREET ADDRESS
                    </Label>
                    <Input
                      id="address"
                      placeholder="Enter street address"
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="city" className="text-gray-700 mb-2 block text-sm">
                        CITY
                      </Label>
                      <Input id="city" placeholder="City" />
                    </div>

                    <div>
                      <Label htmlFor="state" className="text-gray-700 mb-2 block text-sm">
                        STATE
                      </Label>
                      <Input id="state" placeholder="State" />
                    </div>

                    <div>
                      <Label htmlFor="zip" className="text-gray-700 mb-2 block text-sm">
                        ZIP CODE
                      </Label>
                      <Input id="zip" placeholder="Zip" />
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="h-px bg-[#C6A664]" />

              {/* PAYMENT DETAILS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-black tracking-wide mb-6 text-xl">
                  Payment Details
                </h3>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="cardNumber" className="text-gray-700 mb-2 block text-sm">
                      CARD NUMBER
                    </Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="expiry" className="text-gray-700 mb-2 block text-sm">
                        EXPIRY DATE
                      </Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>

                    <div>
                      <Label htmlFor="cvv" className="text-gray-700 mb-2 block text-sm">
                        CVV
                      </Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="col-span-1"
            >
              <div className="sticky top-32 border border-gray-200 bg-white p-8 shadow-lg">
                <h3 className="text-black tracking-wide mb-6 text-xl">
                  Order Summary
                </h3>

                <div className="space-y-6 mb-8">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-24 overflow-hidden bg-gray-50 flex-shrink-0">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h4 className="text-black mb-1 text-sm">{item.name}</h4>
                        <p className="text-gray-600 mb-2 text-xs">
                          Size: {item.size} | {item.color}
                        </p>
                        <p className="text-[#C6A664] text-sm">${item.price.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="h-px bg-[#C6A664] mb-6" />

                <div className="space-y-3 mb-6 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-[#C6A664]">Free</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="h-px bg-[#C6A664] mb-6" />

                <div className="flex justify-between text-xl mb-8">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>

                <button className="w-full py-4 bg-[#C6A664] text-white hover:bg-[#b89654] transition-all tracking-[0.15em] text-sm">
                  PLACE ORDER
                </button>

                <p className="text-center text-gray-500 mt-6 text-xs">
                  Your payment information is secure and encrypted
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
