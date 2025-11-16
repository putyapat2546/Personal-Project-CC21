// CharacterSelection.jsx
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const personas = [
  {
    id: 'absolute-luxurer',
    name: 'Absolute Luxurer',
    tagline: 'Where heritage meets contemporary opulence',
    image: 'https://images.unsplash.com/photo-1733736075345-55db261a8ac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 'megacitier',
    name: 'Megacitier',
    tagline: 'Urban elegance for the modern metropolitan',
    image: 'https://images.unsplash.com/photo-1759090987847-7d2b25beb2f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 'social-wearer',
    name: 'SocialWearer',
    tagline: 'Fashion that tells your story',
    image: 'https://images.unsplash.com/photo-1546249511-259f23599066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 'experiencer',
    name: 'Experiencer',
    tagline: 'Living life through curated moments',
    image: 'https://images.unsplash.com/photo-1707005539884-665cb3e1f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 'little-prince',
    name: 'LITTLEPRINCE',
    tagline: 'Youthful sophistication redefined',
    image: 'https://images.unsplash.com/photo-1589986993357-6f9a171e02d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 'fashionista',
    name: 'Fashionista',
    tagline: 'Trendsetting with timeless grace',
    image: 'https://images.unsplash.com/photo-1704775986777-b903cf6b9802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 'status-seeker',
    name: 'Status Seeker',
    tagline: 'Excellence as a standard, not an exception',
    image: 'https://images.unsplash.com/photo-1575201046471-082b5c1a1e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 'classpirational',
    name: 'Classpirational',
    tagline: 'Aspirational elegance within reach',
    image: 'https://images.unsplash.com/photo-1679419930974-e8171969aea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  }
];

export function CharacterSelection() {
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (id) => {
    // Navigate to /reveal and pass selected persona ID
    navigate('/reveal', { state: { personaId: id } });
  };

  return (
    <div className="min-h-screen w-full bg-[#F8F8F8] relative">
      <div className="absolute top-0 left-0 right-0 z-10 p-8 flex items-center justify-between">
        <h2 className="text-black tracking-[0.2em]" style={{ fontSize: '1.25rem' }}>
          MAISON EIGHT
        </h2>
        <div className="text-[#C6A664]" style={{ fontSize: '0.875rem' }}>
          SELECT YOUR CHARACTER
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center px-16 py-24">
        <div className="w-full max-w-[1800px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-4 gap-6"
          >
            {personas.map((persona, index) => (
              <motion.div
                key={persona.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredId(persona.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleSelect(persona.id)}
                className="group cursor-pointer"
              >
                <div className="relative h-[380px] overflow-hidden bg-gray-100 shadow-lg">
                  <motion.img
                    src={persona.image}
                    alt={persona.name}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredId === persona.id ? 1.08 : 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <motion.div
                    className="absolute inset-0 border-[3px] border-[#C6A664]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === persona.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <motion.h3
                      className="text-white tracking-[0.12em] mb-2 relative inline-block"
                      style={{ fontSize: '1.125rem' }}
                      animate={{ y: hoveredId === persona.id ? -5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {persona.name}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-white"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: hoveredId === persona.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ transformOrigin: 'left' }}
                      />
                    </motion.h3>
                    <motion.p
                      className="text-gray-300"
                      style={{
                        fontSize: '0.75rem',
                        fontFamily: 'Playfair Display, serif',
                        fontStyle: 'italic',
                        lineHeight: '1.4'
                      }}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredId === persona.id ? 1 : 0,
                        height: hoveredId === persona.id ? 'auto' : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {persona.tagline}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-500" style={{ fontSize: '0.875rem' }}>
              Select a character to begin your personalized experience
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
