import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-dark-accent py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">JW Media</h3>
            <p className="text-gray-400 text-sm">Professionelle Fotografie für besondere Momente</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#galerie" className="hover:text-white transition-colors">Galerie</a></li>
              <li><a href="#projekte" className="hover:text-white transition-colors">Projekte</a></li>
              <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Social Media</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="pt-8 border-t border-dark-accent text-center text-gray-400 text-sm"
        >
          <p>&copy; 2024 JW Media. Alle Rechte vorbehalten.</p>
        </motion.div>
      </div>
    </footer>
  );
}
