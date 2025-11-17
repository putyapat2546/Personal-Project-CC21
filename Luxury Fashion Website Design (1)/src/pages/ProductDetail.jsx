import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ShoppingBag, Heart, ChevronLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useCart } from '../context/CartContext';
import { UserMenu } from '../components/UserMenu';

const mockProductsData = {
  1: {
    id: 1,
    name: 'Silk Evening Gown',
    category: 'Dresses',
    price: 3200,
    brand: 'Maison Eight',
    colors: [{
      name: 'Black',
      hex: '#000000'
    }, {
      name: 'Navy',
      hex: '#1a1a2e'
    }, {
      name: 'Burgundy',
      hex: '#800020'
    }],
    gender: 'Women',
    images: ['https://images.unsplash.com/photo-1572533177115-5bea803c0f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080', 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'],
    description: 'An exquisite silk evening gown that embodies timeless elegance. Crafted from the finest Italian silk, this piece drapes beautifully and moves with grace.',
    details: ['100% Italian Silk', 'Dry clean only', 'Made in Italy', 'Hidden back zipper', 'Fully lined'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  2: {
    id: 2,
    name: 'Tailored Blazer',
    category: 'Outerwear',
    price: 2100,
    brand: 'Hermès',
    colors: [{
      name: 'Navy',
      hex: '#1a1a2e'
    }, {
      name: 'Charcoal',
      hex: '#36454f'
    }],
    gender: 'Men',
    images: ['https://images.unsplash.com/photo-1704775986777-b903cf6b9802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'],
    description: 'A masterfully tailored blazer that defines modern sophistication. Cut from premium wool, this piece offers unparalleled structure and comfort.',
    details: ['Premium Wool Blend', 'Dry clean only', 'Made in France', 'Notched lapel', 'Two-button closure'],
    sizes: ['46', '48', '50', '52', '54']
  },
  3: {
    id: 3,
    name: 'Leather Handbag',
    category: 'Accessories',
    price: 1800,
    brand: 'Gucci',
    colors: [{
      name: 'Brown',
      hex: '#654321'
    }, {
      name: 'Black',
      hex: '#000000'
    }, {
      name: 'Tan',
      hex: '#d2b48c'
    }],
    gender: 'Women',
    images: ['https://images.unsplash.com/photo-1575201046471-082b5c1a1e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'],
    description: 'A timeless leather handbag crafted from the finest materials. This versatile piece transitions seamlessly from day to evening.',
    details: ['Full-grain leather', 'Gold-tone hardware', 'Made in Italy', 'Interior zip pocket', 'Dust bag included'],
    sizes: ['One Size']
  }
};
export function ProductDetail() {
  const { productId } = useParams(); 
  const navigate = useNavigate();
  const { addToCart, cartCount } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

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

  // Helper function to get product image
  const getProductImage = (productName) => {
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

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3001/api/products/${productId}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        
        // Get all products with same name to collect all colors
        const allProductsResponse = await fetch('http://localhost:3001/api/products');
        const allProducts = await allProductsResponse.json();
        
        const sameNameProducts = allProducts.filter(p => p.product_name === data.product_name);
        const colors = sameNameProducts.map(p => ({
          name: p.color,
          hex: getColorHex(p.color)
        }));
        
        const transformedProduct = {
          id: data.product_id,
          name: data.product_name,
          category: data.category,
          price: data.price,
          brand: data.brand?.brand_name || 'Unknown',
          colors: colors,
          gender: 'Unisex',
          images: [getProductImage(data.product_name)],
          description: `Experience luxury with this exquisite ${data.product_name.toLowerCase()} from ${data.brand?.brand_name || 'our collection'}. Crafted with attention to detail and premium materials.`,
          details: [
            'Premium quality materials',
            'Dry clean only',
            'Made with care',
            'Timeless design',
            'Expert craftsmanship'
          ],
          sizes: data.category === 'Accessories' ? ['One Size'] : ['XS', 'S', 'M', 'L', 'XL']
        };
        
        setProduct(transformedProduct);
        setSelectedColor(transformedProduct.colors[0]);
        setError(null);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(err.message);
        // Fallback to mock data
        const fallbackProduct = mockProductsData[productId] || mockProductsData[1];
        setProduct(fallbackProduct);
        setSelectedColor(fallbackProduct.colors[0]);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize, selectedColor);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F8F8] flex items-center justify-center">
        <p className="text-gray-500" style={{ fontSize: '1.125rem' }}>
          Loading product...
        </p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F8F8F8] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4" style={{ fontSize: '1.125rem' }}>
            Product not found
          </p>
          <button
            onClick={() => navigate('/products')}
            className="text-[#C6A664] hover:text-black transition-colors"
          >
            Back to Collections
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F8F8]">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          
          <h1
            className="text-black tracking-[0.2em] cursor-pointer"
            style={{ fontSize: '1.25rem' }}
            onClick={() => navigate('/')}
          >
            MAISON EIGHT
          </h1>

          <div className="flex items-center gap-8">

            <button
              onClick={() => navigate('/')}
              className="text-black hover:text-[#C6A664] transition-colors tracking-wider"
              style={{ fontSize: '0.875rem' }}
            >
              HOME
            </button>

            <button
              onClick={() => navigate('/products')}
              className="text-black hover:text-[#C6A664] transition-colors tracking-wider"
              style={{ fontSize: '0.875rem' }}
            >
              COLLECTIONS
            </button>

            <button
              onClick={() => navigate('/virtual-tryon')}
              className="text-black hover:text-[#C6A664] transition-colors tracking-wider"
              style={{ fontSize: '0.875rem' }}
            >
              VIRTUAL TRY-ON
            </button>

            <button
              onClick={() => navigate('/cart')}
              className="text-black hover:text-[#C6A664] transition-colors"
            >
              <ShoppingBag size={20} />
            </button>

            {/* User Menu */}
            <UserMenu />
          </div>
        </div>
      </nav>

      {/* PAGE BODY */}
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-8 py-12">
          
          {/* BACK BUTTON */}
          <button
            onClick={() => navigate('/products')}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
            style={{ fontSize: '0.875rem' }}
          >
            <ChevronLeft size={18} />
            <span className="tracking-wider">BACK TO COLLECTIONS</span>
          </button>

          {/* MAIN GRID */}
          <div className="grid grid-cols-2 gap-16">
            {/* IMAGE SECTION */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[700px] overflow-hidden bg-white mb-4 shadow-lg">
                <ImageWithFallback
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* THUMBNAILS */}
              {product.images.length > 1 && (
                <div className="flex gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-24 flex-1 overflow-hidden ${
                        currentImageIndex === index
                          ? 'ring-2 ring-[#C6A664]'
                          : 'opacity-60 hover:opacity-100'
                      } transition-all`}
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* RIGHT PANEL */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="sticky top-32">

                {/* BRAND */}
                <p className="text-[#C6A664] tracking-[0.2em] mb-2" style={{ fontSize: '0.75rem' }}>
                  {product.brand.toUpperCase()}
                </p>

                {/* NAME */}
                <h1 className="text-black mb-4 tracking-wide" style={{ fontSize: '2.5rem' }}>
                  {product.name}
                </h1>

                {/* PRICE */}
                <p className="text-black mb-8 tracking-wide" style={{ fontSize: '1.5rem' }}>
                  ${product.price.toLocaleString()}
                </p>

                <div className="h-px bg-gray-200 my-8" />

                {/* DESCRIPTION */}
                <p className="text-gray-600 mb-8 leading-relaxed" style={{ fontSize: '1rem' }}>
                  {product.description}
                </p>

                {/* COLOR */}
                <div className="mb-8">
                  <h3 className="text-black mb-4 tracking-wider" style={{ fontSize: '0.875rem' }}>
                    COLOR: <span className="text-gray-600">{selectedColor.name}</span>
                  </h3>

                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${
                          selectedColor.name === color.name
                            ? 'border-[#C6A664] scale-110'
                            : 'border-gray-300 hover:border-gray-500'
                        }`}
                        style={{ backgroundColor: color.hex }}
                      />
                    ))}
                  </div>
                </div>

                {/* SIZE */}
                <div className="mb-8">
                  <h3 className="text-black mb-4 tracking-wider" style={{ fontSize: '0.875rem' }}>
                    SIZE
                  </h3>

                  <div className="grid grid-cols-5 gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 border transition-all ${
                          selectedSize === size
                            ? 'border-[#C6A664] bg-[#C6A664] text-white'
                            : 'border-gray-300 hover:border-black'
                        }`}
                        style={{ fontSize: '0.875rem' }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ADD TO BAG */}
                <div className="flex gap-4 mb-8">
                  <Button
                    onClick={handleAddToCart}
                    className={`flex-1 py-6 tracking-[0.2em] transition-all duration-300 ${addedToCart ? 'bg-[#C6A664]' : 'bg-black hover:bg-[#C6A664]'} text-white`}
                    style={{ fontSize: '0.875rem' }}
                  >
                    {addedToCart ? '✓ ADDED TO BAG' : 'ADD TO BAG'}
                  </Button>

                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`w-14 border-2 transition-colors ${
                      isWishlisted
                        ? 'border-[#C6A664] text-[#C6A664]'
                        : 'border-gray-300 text-gray-400 hover:border-black hover:text-black'
                    }`}
                  >
                    <Heart
                      size={20}
                      className="mx-auto"
                      fill={isWishlisted ? '#C6A664' : 'none'}
                    />
                  </button>
                </div>

                <div className="h-px bg-gray-200 my-8" />

                {/* DETAILS */}
                <div>
                  <h3 className="text-black mb-4 tracking-wider" style={{ fontSize: '0.875rem' }}>
                    DETAILS
                  </h3>

                  <ul className="space-y-2 text-gray-600" style={{ fontSize: '0.875rem' }}>
                    {product.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C6A664] mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  );
}