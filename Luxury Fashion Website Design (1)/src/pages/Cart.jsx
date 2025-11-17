import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { UserMenu } from "../components/UserMenu";

export function Cart() {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 5000 ? 0 : 50;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* NAVBAR */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => navigate("/home")}
            className="text-black tracking-[0.2em] hover:text-[#C6A664] transition-colors"
            style={{ fontSize: "1.25rem" }}
          >
            MAISON EIGHT
          </button>

          <div className="flex items-center gap-8">
            <button
              onClick={() => navigate("/products")}
              className="text-gray-600 hover:text-black transition-colors tracking-wider"
              style={{ fontSize: "0.875rem" }}
            >
              Continue Shopping
            </button>

            <UserMenu />
          </div>
        </div>
      </nav>

      {/* CART SECTION */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-black mb-12 tracking-wide"
            style={{ fontSize: "2.5rem" }}
          >
            Shopping Bag
          </h1>

          {/* Empty Cart */}
          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag size={64} className="mx-auto mb-6 text-gray-300" />
              <h2
                className="text-gray-600 mb-8 tracking-wide"
                style={{ fontSize: "1.5rem" }}
              >
                Your bag is empty
              </h2>

              <Button
                onClick={() => navigate("/products")}
                className="bg-black hover:bg-[#C6A664] text-white px-12 py-6 tracking-[0.2em] transition-all duration-300"
                style={{ fontSize: "0.875rem" }}
              >
                DISCOVER COLLECTIONS
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-12">
              {/* LEFT: ITEMS */}
              <div className="col-span-2 space-y-6">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex gap-6">
                      {/* IMAGE */}
                      <div className="w-40 h-48 flex-shrink-0 overflow-hidden">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* INFO */}
                      <div className="flex-grow">
                        <div className="flex justify-between mb-4">
                          <div>
                            <h3
                              className="text-black mb-2 tracking-wide"
                              style={{ fontSize: "1.125rem" }}
                            >
                              {item.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              Size: {item.size}
                            </p>
                            <p className="text-gray-600 text-sm">
                              Color: {item.color}
                            </p>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-black transition-colors h-fit"
                          >
                            <X size={20} />
                          </button>
                        </div>

                        {/* Quantity + Price */}
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4 border border-gray-300 px-4 py-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="text-gray-600 hover:text-black"
                            >
                              <Minus size={16} />
                            </button>

                            <span className="text-black w-8 text-center text-sm">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="text-gray-600 hover:text-black"
                            >
                              <Plus size={16} />
                            </button>
                          </div>

                          <p className="text-black text-lg">
                            ${ (item.price * item.quantity).toLocaleString() }
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* RIGHT: SUMMARY */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-fit"
              >
                <div className="bg-white p-8 shadow-sm">
                  <h2 className="text-black mb-6 tracking-wide text-xl">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex justify-between text-gray-600 text-sm">
                      <span>Subtotal</span>
                      <span>${subtotal.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between text-gray-600 text-sm">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? "FREE" : `$${shipping}`}</span>
                    </div>

                    <div className="flex justify-between text-gray-600 text-sm">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between mb-8 text-black text-lg">
                    <span className="tracking-wide">Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <Button
                    onClick={() => navigate("/checkout")}
                    className="w-full bg-black hover:bg-[#C6A664] text-white py-6 tracking-[0.2em] transition-all duration-300 mb-4 text-sm"
                  >
                    PROCEED TO CHECKOUT
                  </Button>

                  <p className="text-center text-gray-500 text-xs tracking-wide">
                    Free shipping on orders over $5,000
                  </p>
                </div>

                <div className="mt-6 bg-white p-6 shadow-sm text-gray-600 text-xs space-y-4">
                  <p className="flex items-start gap-2">
                    <span className="text-[#C6A664]">✓</span> Complimentary gift
                    wrapping
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#C6A664]">✓</span> 30-day returns &
                    exchanges
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-[#C6A664]">✓</span> Secure payment
                    processing
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
