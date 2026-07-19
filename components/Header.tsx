import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-dark/95 backdrop-blur z-50 border-b border-dark-accent">
      <nav className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold tracking-wider"
        >
          JW MEDIA
        </motion.div>
        
        <div className="hidden md:flex gap-8">
          {['Galerie', 'Projekte', 'Kontakt'].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="hover:text-gray-400 transition-colors text-sm tracking-wide"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-light border-t border-dark-accent"
        >
          <div className="flex flex-col gap-4 px-4 py-4">
            {['Galerie', 'Projekte', 'Kontakt'].map((item, i) => (
              <a key={i} href={`#${item.toLowerCase()}`} className="text-sm">
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
