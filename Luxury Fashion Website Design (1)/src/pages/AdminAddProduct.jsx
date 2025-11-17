import React, { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { User, Plus, X } from "lucide-react";

export function AdminAddProduct() {
  const navigate = useNavigate();

  // Form state
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
    brand: "",
    gender: "",
    image: "",
    description: "",
    details: [""],
    sizes: [""],
    colors: [{ name: "", hex: "" }],
  });

  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (field, value) => {
    setProductData({ ...productData, [field]: value });
  };

  // Handle array fields (details, sizes)
  const handleArrayChange = (field, index, value) => {
    const newArray = [...productData[field]];
    newArray[index] = value;
    setProductData({ ...productData, [field]: newArray });
  };

  // Add new item to array field
  const addArrayItem = (field) => {
    setProductData({
      ...productData,
      [field]: [...productData[field], ""],
    });
  };

  // Remove item from array field
  const removeArrayItem = (field, index) => {
    const newArray = productData[field].filter((_, i) => i !== index);
    setProductData({ ...productData, [field]: newArray });
  };

  // Handle color array changes
  const handleColorChange = (index, field, value) => {
    const newColors = [...productData.colors];
    newColors[index][field] = value;
    setProductData({ ...productData, colors: newColors });
  };

  // Add new color
  const addColor = () => {
    setProductData({
      ...productData,
      colors: [...productData.colors, { name: "", hex: "" }],
    });
  };

  // Remove color
  const removeColor = (index) => {
    const newColors = productData.colors.filter((_, i) => i !== index);
    setProductData({ ...productData, colors: newColors });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Basic validation
    if (!productData.name || !productData.price || !productData.category) {
      setMessage("Please fill in all required fields");
      setLoading(false);
      return;
    }

    try {
      // Filter out empty values
      const cleanedData = {
        ...productData,
        price: parseFloat(productData.price),
        details: productData.details.filter((d) => d.trim() !== ""),
        sizes: productData.sizes.filter((s) => s.trim() !== ""),
        colors: productData.colors.filter((c) => c.name && c.hex),
      };

      // Here you would normally send to backend API
      // For now, we'll save to localStorage
      const existingProducts = JSON.parse(
        localStorage.getItem("products") || "[]"
      );
      const newProduct = {
        ...cleanedData,
        id: Date.now(), // Generate unique ID
        availableColors: cleanedData.colors,
      };
      existingProducts.push(newProduct);
      localStorage.setItem("products", JSON.stringify(existingProducts));

      setMessage("Product added successfully!");
      setTimeout(() => {
        navigate("/products");
      }, 2000);
    } catch (error) {
      console.error(error);
      setMessage("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

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
              View Products
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

      {/* FORM SECTION */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-black mb-12 tracking-wide"
            style={{ fontSize: "2.5rem" }}
          >
            Add New Product
          </h1>

          <form onSubmit={handleSubmit} className="bg-white p-10 shadow-lg">
            <div className="space-y-6">
              {/* Product Name */}
              <div>
                <label
                  className="block text-gray-700 mb-2 tracking-wide"
                  style={{ fontSize: "0.75rem" }}
                >
                  PRODUCT NAME *
                </label>
                <Input
                  type="text"
                  value={productData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full border-gray-300 focus:border-[#C6A664] focus:ring-[#C6A664]"
                  required
                  disabled={loading}
                />
              </div>

              {/* Category & Brand */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-gray-700 mb-2 tracking-wide"
                    style={{ fontSize: "0.75rem" }}
                  >
                    CATEGORY *
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g., Dresses, Outerwear"
                    value={productData.category}
                    onChange={(e) =>
                      handleInputChange("category", e.target.value)
                    }
                    className="w-full border-gray-300 focus:border-[#C6A664] focus:ring-[#C6A664]"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label
                    className="block text-gray-700 mb-2 tracking-wide"
                    style={{ fontSize: "0.75rem" }}
                  >
                    BRAND
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g., Gucci, Chanel"
                    value={productData.brand}
                    onChange={(e) =>
                      handleInputChange("brand", e.target.value)
                    }
                    className="w-full border-gray-300 focus:border-[#C6A664] focus:ring-[#C6A664]"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Price & Gender */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-gray-700 mb-2 tracking-wide"
                    style={{ fontSize: "0.75rem" }}
                  >
                    PRICE ($) *
                  </label>
                  <Input
                    type="number"
                    step="0.01"
                    value={productData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    className="w-full border-gray-300 focus:border-[#C6A664] focus:ring-[#C6A664]"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label
                    className="block text-gray-700 mb-2 tracking-wide"
                    style={{ fontSize: "0.75rem" }}
                  >
                    GENDER
                  </label>
                  <select
                    value={productData.gender}
                    onChange={(e) =>
                      handleInputChange("gender", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-[#C6A664] focus:ring-[#C6A664]"
                    disabled={loading}
                  >
                    <option value="">Select Gender</option>
                    <option value="Women">Women</option>
                    <option value="Men">Men</option>
                    <option value="Unisex">Unisex</option>
                  </select>
                </div>
              </div>

              {/* Image URL */}
              <div>
                <label
                  className="block text-gray-700 mb-2 tracking-wide"
                  style={{ fontSize: "0.75rem" }}
                >
                  IMAGE URL
                </label>
                <Input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={productData.image}
                  onChange={(e) => handleInputChange("image", e.target.value)}
                  className="w-full border-gray-300 focus:border-[#C6A664] focus:ring-[#C6A664]"
                  disabled={loading}
                />
              </div>

              {/* Description */}
              <div>
                <label
                  className="block text-gray-700 mb-2 tracking-wide"
                  style={{ fontSize: "0.75rem" }}
                >
                  DESCRIPTION
                </label>
                <textarea
                  value={productData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-[#C6A664] focus:ring-[#C6A664] min-h-24"
                  disabled={loading}
                />
              </div>

              {/* Product Details */}
              <div>
                <label
                  className="block text-gray-700 mb-2 tracking-wide"
                  style={{ fontSize: "0.75rem" }}
                >
                  PRODUCT DETAILS
                </label>
                {productData.details.map((detail, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <Input
                      type="text"
                      placeholder="e.g., 100% Silk"
                      value={detail}
                      onChange={(e) =>
                        handleArrayChange("details", index, e.target.value)
                      }
                      className="flex-1 border-gray-300 focus:border-[#C6A664] focus:ring-[#C6A664]"
                      disabled={loading}
                    />
                    {productData.details.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem("details", index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X size={20} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem("details")}
                  className="flex items-center gap-2 text-[#C6A664] hover:text-black transition-colors text-sm mt-2"
                  disabled={loading}
                >
                  <Plus size={16} /> Add Detail
                </button>
              </div>

              {/* Sizes */}
              <div>
                <label
                  className="block text-gray-700 mb-2 tracking-wide"
                  style={{ fontSize: "0.75rem" }}
                >
                  AVAILABLE SIZES
                </label>
                {productData.sizes.map((size, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <Input
                      type="text"
                      placeholder="e.g., S, M, L, XL"
                      value={size}
                      onChange={(e) =>
                        handleArrayChange("sizes", index, e.target.value)
                      }
                      className="flex-1 border-gray-300 focus:border-[#C6A664] focus:ring-[#C6A664]"
                      disabled={loading}
                    />
                    {productData.sizes.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem("sizes", index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X size={20} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem("sizes")}
                  className="flex items-center gap-2 text-[#C6A664] hover:text-black transition-colors text-sm mt-2"
                  disabled={loading}
                >
                  <Plus size={16} /> Add Size
                </button>
              </div>

              {/* Colors */}
              <div>
                <label
                  className="block text-gray-700 mb-2 tracking-wide"
                  style={{ fontSize: "0.75rem" }}
                >
                  AVAILABLE COLORS
                </label>
                {productData.colors.map((color, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <Input
                      type="text"
                      placeholder="Color name (e.g., Black)"
                      value={color.name}
                      onChange={(e) =>
                        handleColorChange(index, "name", e.target.value)
                      }
                      className="flex-1 border-gray-300 focus:border-[#C6A664] focus:ring-[#C6A664]"
                      disabled={loading}
                    />
                    <Input
                      type="color"
                      value={color.hex}
                      onChange={(e) =>
                        handleColorChange(index, "hex", e.target.value)
                      }
                      className="w-20 border-gray-300 focus:border-[#C6A664] focus:ring-[#C6A664]"
                      disabled={loading}
                    />
                    {productData.colors.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeColor(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X size={20} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addColor}
                  className="flex items-center gap-2 text-[#C6A664] hover:text-black transition-colors text-sm mt-2"
                  disabled={loading}
                >
                  <Plus size={16} /> Add Color
                </button>
              </div>

              {/* Message */}
              {message && (
                <div
                  className={`text-center text-sm ${
                    message.includes("success")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {message}
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-black hover:bg-[#C6A664] text-white py-6 tracking-[0.2em] transition-all duration-300"
                style={{ fontSize: "0.875rem" }}
                disabled={loading}
              >
                {loading ? "ADDING PRODUCT..." : "ADD PRODUCT"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
