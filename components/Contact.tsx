import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="kontakt" className="py-20 px-4 bg-dark-light">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Kontakt
        </motion.h2>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-dark-accent border border-dark-accent rounded focus:outline-none focus:border-white transition-colors"
              placeholder="Dein Name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-dark-accent border border-dark-accent rounded focus:outline-none focus:border-white transition-colors"
              placeholder="deine@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Nachricht</label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 bg-dark-accent border border-dark-accent rounded focus:outline-none focus:border-white transition-colors resize-none"
              placeholder="Deine Nachricht..."
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full px-6 py-3 bg-white text-dark font-semibold rounded hover:bg-gray-200 transition-colors"
          >
            {submitted ? 'Gesendet! ✓' : 'Nachricht senden'}
          </motion.button>
        </motion.form>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-12 border-t border-dark-accent text-center"
        >
          <p className="text-gray-400 mb-4">Oder kontaktiere mich direkt:</p>
          <div className="space-y-2">
            <p><a href="mailto:info@jwmedia.de" className="hover:text-white transition-colors">info@jwmedia.de</a></p>
            <p><a href="tel:+49123456789" className="hover:text-white transition-colors">+49 (0) 123 45678-9</a></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
