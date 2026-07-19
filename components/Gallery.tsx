import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const GALLERY_IMAGES = [
  { id: 1, title: 'Porträt', category: 'Portrait', image: 'https://picsum.photos/600/600?random=1' },
  { id: 2, title: 'Landschaft', category: 'Landscape', image: 'https://picsum.photos/600/600?random=2' },
  { id: 3, title: 'Event', category: 'Event', image: 'https://picsum.photos/600/600?random=3' },
  { id: 4, title: 'Produktfoto', category: 'Product', image: 'https://picsum.photos/600/600?random=4' },
  { id: 5, title: 'Hochzeit', category: 'Wedding', image: 'https://picsum.photos/600/600?random=5' },
  { id: 6, title: 'Natur', category: 'Nature', image: 'https://picsum.photos/600/600?random=6' },
];

export default function Gallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="galerie" className="py-20 px-4 bg-dark-light">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Galerie
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative h-80 bg-dark-accent rounded-lg overflow-hidden cursor-pointer group"
            >
              <img 
                src={image.image} 
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              <motion.div
                animate={{ opacity: hoveredId === image.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center"
              >
                <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                <p className="text-gray-400 text-sm">{image.category}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
