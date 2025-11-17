import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const personas = [
  { id: 'absolute-luxurer', name: 'Absolute Luxurer', tagline: 'Where heritage meets contemporary opulence', image: 'https://images.unsplash.com/photo-1733736075345-55db261a8ac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'megacitier', name: 'Megacitier', tagline: 'Urban elegance for the modern metropolitan', image: 'https://images.unsplash.com/photo-1759090987847-7d2b25beb2f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'social-wearer', name: 'SocialWearer', tagline: 'Fashion that tells your story', image: 'https://images.unsplash.com/photo-1546249511-259f23599066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'experiencer', name: 'Experiencer', tagline: 'Living life through curated moments', image: 'https://images.unsplash.com/photo-1707005539884-665cb3e1f929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'little-prince', name: 'LITTLEPRINCE', tagline: 'Youthful sophistication redefined', image: 'https://images.unsplash.com/photo-1589986993357-6f9a171e02d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'fashionista', name: 'Fashionista', tagline: 'Trendsetting with timeless grace', image: 'https://images.unsplash.com/photo-1704775986777-b903cf6b9802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'status-seeker', name: 'Status Seeker', tagline: 'Excellence as a standard, not an exception', image: 'https://images.unsplash.com/photo-1575201046471-082b5c1a1e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
  { id: 'classpirational', name: 'Classpirational', tagline: 'Aspirational elegance within reach', image: 'https://images.unsplash.com/photo-1679419930974-e8171969aea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080' },
];

// Map persona IDs to database persona_id
const personaIdMap = {
  'absolute-luxurer': 1,
  'megacitier': 2,
  'social-wearer': 3,
  'experiencer': 4,
  'little-prince': 5,
  'fashionista': 6,
  'status-seeker': 7,
  'classpirational': 8
};

export function CharacterReveal() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, updateUser } = useAuth();

  // Get the selected persona ID from state
  const { personaId } = location.state || {};
  const persona = personas.find(p => p.id === personaId);

  useEffect(() => {
    if (!persona) {
      // If no persona was passed, go back to /select
      navigate('/select', { replace: true });
      return;
    }

    const savePersonaAndNavigate = async () => {
      // If user is logged in, save their persona selection to the backend
      if (isAuthenticated && user) {
        try {
          const token = localStorage.getItem('auth_token');
          const personaDatabaseId = personaIdMap[personaId];
          
          const response = await fetch('http://localhost:3001/api/auth/persona', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ personaId: personaDatabaseId })
          });

          if (response.ok) {
            const data = await response.json();
            // Update user data in context and localStorage
            updateUser(data.user);
          }
        } catch (error) {
          console.error('Failed to save persona:', error);
        }
      }
      
      // Navigate to home after saving
      navigate('/home');
    };

    // Automatically navigate after 4 seconds
    const timer = setTimeout(savePersonaAndNavigate, 4000);

    return () => clearTimeout(timer);
  }, [persona, navigate, personaId, isAuthenticated, user]);

  if (!persona) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img src={persona.image} alt={persona.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Persona info */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#C6A664] tracking-[0.3em] uppercase mb-4"
          style={{ fontSize: '0.75rem', fontWeight: 300 }}
        >
          You've Selected
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, letterSpacing: '0.15em' }}
          animate={{ opacity: 1, letterSpacing: '0.25em' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white tracking-[0.25em] mb-3"
          style={{ fontSize: '3.5rem', fontWeight: 200, textShadow: '0 0 40px rgba(198, 166, 100, 0.4)' }}
        >
          {persona.name}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-20 h-[1px] bg-[#C6A664] mx-auto mb-3"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-300 tracking-[0.15em] italic"
          style={{ fontSize: '0.875rem', fontFamily: 'Playfair Display, serif', fontWeight: 300 }}
        >
          {persona.tagline}
        </motion.p>
      </div>
    </motion.div>
  );
}
