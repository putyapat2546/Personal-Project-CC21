import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ShoppingBag, X, SlidersHorizontal } from "lucide-react";
import { Checkbox } from "../components/ui/checkbox";
import { UserMenu } from "../components/UserMenu";

const mockProducts = [
  {
    id: 1,
    name: "Silk Evening Gown",
    category: "Dresses",
    price: 3200,
    brand: "Maison Eight",
    availableColors: [
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#1a1a2e" },
      { name: "Burgundy", hex: "#800020" },
    ],
    gender: "Women",
    image:
      "https://images.unsplash.com/photo-1572533177115-5bea803c0f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 2,
    name: "Tailored Blazer",
    category: "Outerwear",
    price: 2100,
    brand: "Hermès",
    availableColors: [
      { name: "Navy", hex: "#1a1a2e" },
      { name: "Charcoal", hex: "#36454f" },
    ],
    gender: "Men",
    image:
      "https://images.unsplash.com/photo-1704775986777-b903cf6b9802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 3,
    name: "Leather Handbag",
    category: "Accessories",
    price: 1800,
    brand: "Gucci",
    availableColors: [
      { name: "Brown", hex: "#654321" },
      { name: "Black", hex: "#000000" },
      { name: "Tan", hex: "#d2b48c" },
    ],
    gender: "Women",
    image:
      "https://images.unsplash.com/photo-1575201046471-082b5c1a1e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 4,
    name: "Cashmere Coat",
    category: "Outerwear",
    price: 4500,
    brand: "Chanel",
    availableColors: [
      { name: "Beige", hex: "#f5f5dc" },
      { name: "Black", hex: "#000000" },
    ],
    gender: "Women",
    image:
      "https://images.unsplash.com/photo-1679419930974-e8171969aea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 5,
    name: "Couture Dress",
    category: "Dresses",
    price: 5200,
    brand: "Dior",
    availableColors: [{ name: "White", hex: "#ffffff" }],
    gender: "Women",
    image:
      "https://images.unsplash.com/photo-1756483492084-05cb91948081?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 6,
    name: "Designer Heels",
    category: "Shoes",
    price: 950,
    brand: "Louis Vuitton",
    availableColors: [
      { name: "Black", hex: "#000000" },
      { name: "Nude", hex: "#e4b5a8" },
    ],
    gender: "Women",
    image:
      "https://images.unsplash.com/photo-1733736075345-55db261a8ac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 7,
    name: "Silk Blouse",
    category: "Tops",
    price: 890,
    brand: "Valentino",
    availableColors: [
      { name: "White", hex: "#ffffff" },
      { name: "Ivory", hex: "#fffff0" },
    ],
    gender: "Women",
    image:
      "https://images.unsplash.com/photo-1759090987847-7d2b25beb2f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 8,
    name: "Wool Trousers",
    category: "Bottoms",
    price: 1200,
    brand: "Prada",
    availableColors: [
      { name: "Black", hex: "#000000" },
      { name: "Gray", hex: "#808080" },
      { name: "Navy", hex: "#1a1a2e" },
    ],
    gender: "Men",
    image:
      "https://images.unsplash.com/photo-1546249511-259f23599066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 9,
    name: "Evening Clutch",
    category: "Accessories",
    price: 780,
    brand: "Bottega Veneta",
    availableColors: [
      { name: "Gold", hex: "#ffd700" },
      { name: "Silver", hex: "#c0c0c0" },
    ],
    gender: "Women",
    image:
      "https://images.unsplash.com/photo-1760624294504-211e763ee0fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 10,
    name: "Cashmere Sweater",
    category: "Tops",
    price: 1450,
    brand: "Hermès",
    availableColors: [
      { name: "Gray", hex: "#808080" },
      { name: "Navy", hex: "#1a1a2e" },
      { name: "Camel", hex: "#c19a6b" },
    ],
    gender: "Men",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 11,
    name: "Leather Loafers",
    category: "Shoes",
    price: 1150,
    brand: "Gucci",
    availableColors: [
      { name: "Brown", hex: "#654321" },
      { name: "Black", hex: "#000000" },
    ],
    gender: "Men",
    image:
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: 12,
    name: "Silk Scarf",
    category: "Accessories",
    price: 420,
    brand: "Hermès",
    availableColors: [
      {
        name: "Multicolor",
        hex: "linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1)",
      },
    ],
    gender: "Unisex",
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export function ProductListing() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Helper function to get color hex codes
  const getColorHex = (colorName) => {
    const colorMap = {
      'Black': '#000000',
      'Navy': '#1a1a2e',
      'Burgundy': '#800020',
      'Charcoal': '#36454f',
      'Brown': '#654321',
      'Tan': '#d2b48c',
      'Beige': '#f5f5dc',
      'White': '#ffffff',
      'Nude': '#e4b5a8',
      'Ivory': '#fffff0',
      'Gray': '#808080',
      'Gold': '#ffd700',
      'Silver': '#c0c0c0',
      'Camel': '#c19a6b',
      'Multicolor': 'linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1)',
    };
    return colorMap[colorName] || '#808080';
  };

  // Helper function to get product image based on name and category
  const getProductImage = (productName, category) => {
    const imageMap = {
      'Silk Evening Gown': 'https://images.unsplash.com/photo-1572533177115-5bea803c0f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'Tailored Blazer': 'https://images.unsplash.com/photo-1704775986777-b903cf6b9802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'Leather Handbag': 'https://images.unsplash.com/photo-1575201046471-082b5c1a1e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'Cashmere Coat': 'https://images.unsplash.com/photo-1679419930974-e8171969aea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'Couture Dress': 'https://images.unsplash.com/photo-1756483492084-05cb91948081?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'Designer Heels': 'https://images.unsplash.com/photo-1733736075345-55db261a8ac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'Silk Blouse': 'https://images.unsplash.com/photo-1759090987847-7d2b25beb2f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'Wool Trousers': 'https://images.unsplash.com/photo-1546249511-259f23599066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'Evening Clutch': 'https://images.unsplash.com/photo-1760624294504-211e763ee0fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'Cashmere Sweater': 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'Leather Loafers': 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      'Silk Scarf': 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    };
    return imageMap[productName] || 'https://images.unsplash.com/photo-1572533177115-5bea803c0f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';
  };

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3001/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        
        // Group products by product_name to consolidate colors
        const groupedProducts = {};
        data.forEach(product => {
          const key = product.product_name;
          if (!groupedProducts[key]) {
            groupedProducts[key] = {
              id: product.product_id,
              name: product.product_name,
              category: product.category,
              price: product.price,
              brand: product.brand?.brand_name || 'Unknown',
              availableColors: [],
              gender: 'Unisex',
              image: getProductImage(product.product_name, product.category)
            };
          }
          if (product.color) {
            groupedProducts[key].availableColors.push({
              name: product.color,
              hex: getColorHex(product.color)
            });
          }
        });
        
        setProducts(Object.values(groupedProducts));
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err.message);
        setProducts(mockProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = Array.from(new Set(products.map((p) => p.category)));
  const allColors = Array.from(
    new Set(products.flatMap((p) => p.availableColors.map((c) => c.name)))
  );
  const brands = Array.from(new Set(products.map((p) => p.brand))).sort();
  const genders = Array.from(new Set(products.map((p) => p.gender)));

  const toggleFilter = (value, filter, setFilter) => {
    if (filter.includes(value)) {
      setFilter(filter.filter((item) => item !== value));
    } else {
      setFilter([...filter, value]);
    }
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setSelectedBrands([]);
    setSelectedGenders([]);
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedColors.length > 0 ||
    selectedBrands.length > 0 ||
    selectedGenders.length > 0;

  const filteredProducts = products.filter((product) => {
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(product.category)
    )
      return false;
    if (
      selectedColors.length > 0 &&
      !product.availableColors.some((c) => selectedColors.includes(c.name))
    )
      return false;
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand))
      return false;
    if (selectedGenders.length > 0 && !selectedGenders.includes(product.gender))
      return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Navbar */}
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
            <Link
              to="/home"
              className="text-black hover:text-[#C6A664] transition-colors tracking-wider"
              style={{ fontSize: "0.875rem" }}
            >
              HOME
            </Link>
            <Link
              to="/tryon"
              className="text-black hover:text-[#C6A664] transition-colors tracking-wider"
              style={{ fontSize: "0.875rem" }}
            >
              VIRTUAL TRY-ON
            </Link>
            <button
              onClick={() => navigate("/cart")}
              className="text-black hover:text-[#C6A664] transition-colors"
            >
              <ShoppingBag size={20} />
            </button>
            
            {/* User Menu */}
            <UserMenu />
          </div>
        </div>
      </nav>

      {/* Filters and Products */}
      <div className="pt-24 relative">
        <div className="px-8 py-6 flex items-center justify-between max-w-7xl mx-auto">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 text-black hover:text-[#C6A664] transition-colors border border-gray-300 px-6 py-3 hover:border-[#C6A664]"
          >
            <SlidersHorizontal size={18} />
            <span className="tracking-wider" style={{ fontSize: "0.875rem" }}>
              FILTERS{" "}
              {hasActiveFilters &&
                `(${
                  selectedCategories.length +
                  selectedColors.length +
                  selectedBrands.length +
                  selectedGenders.length
                })`}
            </span>
          </button>

          <p className="text-gray-600" style={{ fontSize: "0.875rem" }}>
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "Item" : "Items"}
          </p>
        </div>

        <AnimatePresence>
          {isFilterOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/30 z-40 top-0"
                onClick={() => setIsFilterOpen(false)}
              />
              {/* Lists Inside Filter */}

                <motion.aside
          initial={{ x: -240 }}
          animate={{ x: 0 }}
          exit={{ x: -240 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="fixed left-0 top-0 bottom-0 w-64 bg-white shadow-2xl z-50 overflow-y-auto p-10 pt-12"
        >
    {/* Use consistent vertical padding (py-5) and smaller horizontal padding (px-5) */}
    <div className="py-5 px-5">
        {/* Maison Eight heading at top of filterbar */}
        <div className="mb-6 text-center">
          <h2 className="text-black font-bold tracking-[0.2em] text-lg">Maison Eight</h2>
        </div>
        {/* Gender Filter (First section uses top padding) */}
        <div className="pt-2 pb-5 border-b border-gray-200">
            <h3 className="font-medium mb-3 tracking-wider text-gray-700 text-xs">
                GENDER
            </h3>
            <div className="space-y-2">
                {["Women", "Men", "Unisex"].map((g) => (
                    <label
                        key={g}
                        className="flex items-center gap-3 cursor-pointer hover:text-black transition-colors"
                    >
                        <Checkbox
                            checked={selectedGenders.includes(g)}
                            onCheckedChange={() =>
                                toggleFilter(g, selectedGenders, setSelectedGenders)
                            }
                        />
                        <span className="text-sm text-gray-700">{g}</span>
                    </label>
                ))}
            </div>
        </div>

        {/* Category Filter */}
        <div className="py-5 border-b border-gray-200 mt-6">
            <h3 className="font-medium mb-3 tracking-wider text-gray-700 text-xs">
                CATEGORY
            </h3>
            <div className="space-y-2">
                {[
                    "Dresses",
                    "Outerwear",
                    "Accessories",
                    "Shoes",
                    "Tops",
                    "Bottoms",
                ].map((cat) => (
                    <label
                        key={cat}
                        className="flex items-center gap-3 cursor-pointer hover:text-black transition-colors"
                    >
                        <Checkbox
                            checked={selectedCategories.includes(cat)}
                            onCheckedChange={() =>
                                toggleFilter(
                                    cat,
                                    selectedCategories,
                                    setSelectedCategories
                                )
                            }
                        />
                        <span className="text-sm text-gray-700">{cat}</span>
                    </label>
                ))}
            </div>
        </div>

        {/* Brand Filter - Added max height and scroll to maintain vertical rhythm */}
        <div className="py-5 border-b border-gray-200 mt-6">
            <h3 className="font-medium mb-3 tracking-wider text-gray-700 text-xs">
                BRAND
            </h3>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-3 custom-scrollbar">
                {/* Custom scrollbar class is assumed for cleaner look */}
                {[
                    "Bottega Veneta",
                    "Chanel",
                    "Dior",
                    "Gucci",
                    "Hermès",
                    "Louis Vuitton",
                    "Maison Eight",
                    "Prada",
                    "Valentino",
                ].map((brand) => (
                    <label
                        key={brand}
                        className="flex items-center gap-3 cursor-pointer hover:text-black transition-colors"
                    >
                        <Checkbox
                            checked={selectedBrands.includes(brand)}
                            onCheckedChange={() =>
                                toggleFilter(
                                    brand,
                                    selectedBrands,
                                    setSelectedBrands
                                )
                            }
                        />
                        <span className="text-sm text-gray-700">{brand}</span>
                    </label>
                ))}
            </div>
        </div>

        {/* Color Filter - Added max height and scroll */}
        <div className="py-5 mt-6">
            <h3 className="font-medium mb-3 tracking-wider text-gray-700 text-xs">
                COLOR
            </h3>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-3 custom-scrollbar">
                {[
                    "Black",
                    "Navy",
                    "Burgundy",
                    "Charcoal",
                    "Brown",
                    "Tan",
                    "Beige",
                    "White",
                    "Nude",
                    "Ivory",
                    "Gray",
                    "Gold",
                    "Silver",
                    "Camel",
                    "Multicolor",
                ].map((color) => (
                    <label
                        key={color}
                        className="flex items-center gap-3 cursor-pointer hover:text-black transition-colors"
                    >
                        <Checkbox
                            checked={selectedColors.includes(color)}
                            onCheckedChange={() =>
                                toggleFilter(
                                    color,
                                    selectedColors,
                                    setSelectedColors
                                )
                            }
                        />
                        <span className="text-sm text-gray-700">{color}</span>
                    </label>
                ))}
            </div>
        </div>

        {/* Clear All Button - Moved to the end, outside of filter sections */}
        {hasActiveFilters && (
            <button
                onClick={clearAllFilters}
                className="mt-6 w-full py-2 border border-gray-400 text-gray-700 hover:border-[#C6A664] hover:text-[#C6A664] transition-colors tracking-wide text-sm"
            >
                CLEAR ALL
            </button>
        )}
    </div>
</motion.aside>
            </>
          )}
        </AnimatePresence>

        <main className="px-8 py-4 max-w-7xl mx-auto">
          {loading && (
            <div className="flex justify-center items-center py-20">
              <p className="text-gray-500" style={{ fontSize: "1.125rem" }}>
                Loading products...
              </p>
            </div>
          )}

          {error && (
            <div className="flex justify-center items-center py-20">
              <p className="text-red-500" style={{ fontSize: "1.125rem" }}>
                Error: {error}. Using fallback data.
              </p>
            </div>
          )}

          {!loading && (
          <div className="grid grid-cols-4 gap-6 pb-16">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div
                  className="relative h-[380px] overflow-hidden mb-4 bg-gray-50 shadow-md group-hover:shadow-2xl transition-shadow duration-500"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Hover color indicators */}
                  {product.availableColors.length > 1 &&
                    hoveredProduct === product.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg"
                      >
                        {product.availableColors.map((color) => (
                          <div
                            key={color.name}
                            className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                            style={{
                              background: color.hex.startsWith("linear")
                                ? color.hex
                                : color.hex,
                              border:
                                color.name === "White" || color.name === "Ivory"
                                  ? "2px solid #e5e5e5"
                                  : "2px solid white",
                            }}
                            title={color.name}
                          />
                        ))}
                      </motion.div>
                    )}
                </div>

                <div className="space-y-2 text-center">
                  <h4
                    className="text-black tracking-wide"
                    style={{ fontSize: "0.9375rem" }}
                  >
                    {product.name}
                  </h4>
                  <p
                    className="text-gray-500"
                    style={{ fontSize: "0.6875rem" }}
                  >
                    {product.brand}
                  </p>
                  <p
                    className="text-gray-600"
                    style={{ fontSize: "0.8125rem" }}
                  >
                    {product.category} • {product.gender}
                  </p>
                  <p
                    className="text-[#C6A664]"
                    style={{ fontSize: "0.9375rem" }}
                  >
                    ${product.price.toLocaleString()}
                  </p>
                  {product.availableColors.length > 1 && (
                    <p
                      className="text-gray-400"
                      style={{ fontSize: "0.6875rem" }}
                    >
                      {product.availableColors.length} colors available
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {filteredProducts.length === 0 && !loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p
                  className="text-gray-500 mb-4"
                  style={{ fontSize: "1.125rem" }}
                >
                  No products match your filters
                </p>
                <button
                  onClick={clearAllFilters}
                  className="text-[#C6A664] hover:text-black transition-colors tracking-wider"
                  style={{ fontSize: "0.875rem" }}
                >
                  CLEAR ALL FILTERS
                </button>
              </motion.div>
            )}
          </div>
          )}
        </main>
      </div>
    </div>
  );
}
