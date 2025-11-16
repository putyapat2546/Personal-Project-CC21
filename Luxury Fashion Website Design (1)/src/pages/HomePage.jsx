import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ShoppingBag, User, RotateCcw } from "lucide-react";

const personaNames = {
  "absolute-luxurer": "Absolute Luxurer",
  megacitier: "Megacitier",
  "social-wearer": "SocialWearer",
  experiencer: "Experiencer",
  "little-prince": "LITTLEPRINCE",
  fashionista: "Fashionista",
  "status-seeker": "Status Seeker",
  classpirational: "Classpirational",
};

const lifestyleImages = [
  "https://images.unsplash.com/photo-1589986993357-6f9a171e02d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1704775986777-b903cf6b9802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1575201046471-082b5c1a1e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1679419930974-e8171969aea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1572533177115-5bea803c0f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1756483492084-05cb91948081?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  // 'https://images.unsplash.com/photo-1733736075345-55db261a8ac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  // 'https://images.unsplash.com/photo-1759090987847-7d2b25beb2f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  // 'https://images.unsplash.com/photo-1546249511-259f23599066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
];

export function HomePage({ personaId }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div>
            <h1
              className="text-black tracking-[0.2em]"
              style={{ fontSize: "1.25rem" }}
            >
              MAISON EIGHT
            </h1>

            <div className="flex items-center gap-3 mt-1">
              {personaId ? (
                <p
                  className="text-[#C6A664] tracking-[0.15em]"
                  style={{ fontSize: "0.625rem" }}
                >
                  {personaNames[personaId] || personaId}
                </p>
              ) : (
                <p
                  className="text-gray-400 tracking-[0.15em]"
                  style={{ fontSize: "0.625rem" }}
                >Select Persona
                </p>
              )}

              <button
                onClick={() => navigate("/select")}
                className="text-gray-400 hover:text-[#C6A664] transition-colors"
                title="Change Persona"
              >
                <RotateCcw size={12} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <button
              onClick={() => navigate("/products")}
              className="text-black hover:text-[#C6A664] transition-colors tracking-wider"
              style={{ fontSize: "0.875rem" }}
            >
              COLLECTIONS
            </button>
            <button
              onClick={() => navigate("/tryon")}
              className="text-black hover:text-[#C6A664] transition-colors tracking-wider"
              style={{ fontSize: "0.875rem" }}
            >
              VIRTUAL TRY-ON
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="text-black hover:text-[#C6A664] transition-colors"
            >
              <ShoppingBag size={20} />
            </button>
            <button
              onClick={() => navigate("/login")}
              className="text-black hover:text-[#C6A664] transition-colors"
            >
              <User size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* MAIN HERO */}
      <div className="pt-[136px] pb-[40px] px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4"
          >
            <h2
              className="text-black mb-4 tracking-wide"
              style={{ fontSize: "3rem" }}
            >
              Your Curated World
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={{ fontSize: "1rem" }}
            >
              A personalized selection of pieces that speak to your unique
              aesthetic
            </p>
          </motion.div>
        </div>
      </div>

      {/* FEATURED IMAGE */}
      <div className="max-w-7xl mx-auto px-8 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[600px] mb-8 overflow-hidden group cursor-pointer"
          onClick={() => navigate("/products")}
        >
          <ImageWithFallback
            src={lifestyleImages[0]}
            alt="Featured collection"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500" />
          <div className="absolute bottom-12 left-12 text-white">
            <p
              className="tracking-[0.2em] mb-2"
              style={{ fontSize: "0.75rem" }}
            >
              WINTER 2025
            </p>
            <h3 className="tracking-wide" style={{ fontSize: "2.5rem" }}>
              Timeless Elegance
            </h3>
          </div>
        </motion.div>

        {/* GRID IMAGE */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          {lifestyleImages.slice(1, 4).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="relative h-96 overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
              onClick={() => navigate("/products")}
            >
              <ImageWithFallback
                src={image}
                alt={`Collection ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* อีกสองแถว */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {lifestyleImages.slice(4, 6).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              className="relative h-[500px] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
              onClick={() => navigate("/products")}
            >
              <ImageWithFallback
                src={image}
                alt={`Collection ${index + 4}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />
              <div className="absolute bottom-8 left-8 text-white">
                <h4
                  className="tracking-[0.15em]"
                  style={{ fontSize: "1.5rem" }}
                >
                  {index === 0 ? "Accessories" : "Ready-to-Wear"}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8">
          {lifestyleImages.slice(6, 9).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              className="relative h-96 overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
              onClick={() => navigate("/products")}
            >
              <ImageWithFallback
                src={image}
                alt={`Collection ${index + 7}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-4 gap-12">
            <div>
              <h5
                className="text-[#C6A664] mb-4 tracking-[0.2em]"
                style={{ fontSize: "0.875rem" }}
              >
                CUSTOMER CARE
              </h5>
              <ul className="space-y-2" style={{ fontSize: "0.875rem" }}>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Shipping
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Returns
                </li>
              </ul>
            </div>
            <div>
              <h5
                className="text-[#C6A664] mb-4 tracking-[0.2em]"
                style={{ fontSize: "0.875rem" }}
              >
                ABOUT
              </h5>
              <ul className="space-y-2" style={{ fontSize: "0.875rem" }}>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Our Story
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Craftsmanship
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Sustainability
                </li>
              </ul>
            </div>
            <div>
              <h5
                className="text-[#C6A664] mb-4 tracking-[0.2em]"
                style={{ fontSize: "0.875rem" }}
              >
                SERVICES
              </h5>
              <ul className="space-y-2" style={{ fontSize: "0.875rem" }}>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Book Appointment
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Virtual Try-On
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Personalization
                </li>
              </ul>
            </div>
            <div>
              <h5
                className="text-[#C6A664] mb-4 tracking-[0.2em]"
                style={{ fontSize: "0.875rem" }}
              >
                CONNECT
              </h5>
              <ul className="space-y-2" style={{ fontSize: "0.875rem" }}>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Instagram
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Pinterest
                </li>
                <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Newsletter
                </li>
              </ul>
            </div>
          </div>
          <div
            className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500"
            style={{ fontSize: "0.75rem" }}
          >
            <p>© 2025 MAISON EIGHT. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
