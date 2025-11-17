import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ShoppingBag, User, Heart, ChevronLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useCart } from '../context/CartContext';
const productsData = {
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

  const product = productsData[productId] || productsData[1];
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize, selectedColor);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

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

            <button
              onClick={() => navigate('/login')}
              className="text-black hover:text-[#C6A664] transition-colors"
            >
              <User size={20} />
            </button>
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