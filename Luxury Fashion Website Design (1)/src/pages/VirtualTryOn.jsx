import React, { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ShoppingBag, User } from "lucide-react";
import { Slider } from "../components/ui/slider";
import { useNavigate } from "react-router-dom";

const clothingItems = [
  { id: "dress1", name: "Silk Gown", category: "dress", image: "https://images.unsplash.com/photo-1572533177115-5bea803c0f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { id: "blazer1", name: "Tailored Blazer", category: "top", image: "https://images.unsplash.com/photo-1704775986777-b903cf6b9802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { id: "coat1", name: "Cashmere Coat", category: "top", image: "https://images.unsplash.com/photo-1679419930974-e8171969aea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { id: "blouse1", name: "Silk Blouse", category: "top", image: "https://images.unsplash.com/photo-1759090987847-7d2b25beb2f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { id: "trousers1", name: "Wool Trousers", category: "bottom", image: "https://images.unsplash.com/photo-1546249511-259f23599066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
  { id: "bag1", name: "Leather Handbag", category: "accessory", image: "https://images.unsplash.com/photo-1575201046471-082b5c1a1e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" },
];

export default function VirtualTryOn() {
  const navigate = useNavigate();

  const [selectedItems, setSelectedItems] = useState([]);
  const [fit, setFit] = useState([50]);
  const [skinTone, setSkinTone] = useState("medium");

  const toggleItem = (itemId) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* NAV BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <h1
            className="text-black tracking-[0.2em] cursor-pointer"
            style={{ fontSize: "1.25rem" }}
            onClick={() => navigate("/")}
          >
            MAISON EIGHT
          </h1>

          <div className="flex items-center gap-8">
            <button
              onClick={() => navigate("/home")}
              className="text-black hover:text-[#C6A664] transition-colors tracking-wider"
            >
              HOME
            </button>

            <button
              onClick={() => navigate("/products")}
              className="text-black hover:text-[#C6A664] transition-colors tracking-wider"
            >
              COLLECTIONS
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

      {/* PAGE CONTENT */}
      <div className="pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-black mb-4 tracking-wide" style={{ fontSize: "2.5rem" }}>
              Virtual Try-On Studio
            </h2>
            <p className="text-gray-600" style={{ fontSize: "1rem" }}>
              Customize and preview your perfect look
            </p>
          </motion.div>

          <div className="grid grid-cols-12 gap-8">
            {/* LEFT — SELECT ITEMS */}
            <div className="col-span-3 space-y-4">
              <h3 className="text-black tracking-wide mb-6" style={{ fontSize: "1.125rem" }}>
                Select Items
              </h3>

              <div className="space-y-3">
                {clothingItems.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    className={`relative h-32 overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
                      selectedItems.includes(item.id)
                        ? "border-[#C6A664] shadow-lg"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => toggleItem(item.id)}
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />

                    {/* CHECKMARK */}
                    {selectedItems.includes(item.id) && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-[#C6A664] rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}

                    {/* NAME */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-2">
                      <p className="text-white text-xs">{item.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* MIDDLE — MODEL */}
            <div className="col-span-6 flex flex-col items-center">
              <div className="relative w-full h-[700px] bg-gray-50 border overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1679419930974-e8171969aea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Model"
                  className="w-full h-full object-cover"
                />

                {selectedItems.length > 0 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                    <p className="text-[#C6A664] tracking-wider">
                      {selectedItems.length} item(s) selected
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => setSelectedItems([])}
                  className="px-8 py-3 border-2 border-gray-300 text-gray-700 hover:border-black transition-all"
                >
                  CLEAR ALL
                </button>

                <button
                  onClick={() => navigate("/checkout")}
                  className="px-8 py-3 bg-[#C6A664] text-white hover:bg-[#b89654] transition-all"
                >
                  ADD TO CART
                </button>
              </div>
            </div>

            {/* RIGHT — CUSTOMIZATION */}
            <div className="col-span-3 space-y-8">
              {/* FIT */}
              <div className="p-6 bg-white border border-[#C6A664]/20 rounded">
                <label className="block text-gray-700 mb-4 tracking-wide">FIT</label>
                <Slider value={fit} onValueChange={setFit} max={100} step={1} />
                <div className="flex justify-between text-gray-500 text-xs mt-2">
                  <span>TIGHT</span>
                  <span>LOOSE</span>
                </div>
              </div>

              {/* SKIN TONE */}
              <div className="p-6 bg-white border border-[#C6A664]/20 rounded">
                <label className="block text-gray-700 mb-4 tracking-wide">SKIN TONE</label>
                <div className="flex gap-3">
                  {["light", "medium", "dark"].map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSkinTone(tone)}
                      className={`w-12 h-12 rounded-full border-2 transition-all ${
                        skinTone === tone ? "border-[#C6A664] scale-110" : "border-gray-300"
                      }`}
                      style={{
                        backgroundColor:
                          tone === "light"
                            ? "#f5d7c3"
                            : tone === "medium"
                            ? "#c89b7e"
                            : "#8d5524",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* COLORS */}
              <div className="p-6 bg-white border border-[#C6A664]/20 rounded">
                <label className="block text-gray-700 mb-4 tracking-wide">COLOR OPTIONS</label>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    "#000000",
                    "#FFFFFF",
                    "#C6A664",
                    "#2C3E50",
                    "#8B4513",
                    "#4A4A4A",
                    "#E8E8E8",
                    "#A0522D",
                  ].map((color) => (
                    <button
                      key={color}
                      className="w-10 h-10 rounded-full border border-gray-300 hover:scale-110 transition"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* SIZE GUIDE */}
              <div className="p-6 bg-gray-50 border border-gray-200 rounded">
                <h4 className="text-gray-700 mb-3 tracking-wide text-sm">SIZE GUIDE</h4>
                <div className="text-gray-600 text-xs space-y-1">
                  <p>XS: US 0–2</p>
                  <p>S: US 4–6</p>
                  <p>M: US 8–10</p>
                  <p>L: US 12–14</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
