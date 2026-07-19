import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            Moments in<br />
            <span className="text-gray-400">Light</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light">
            Professionelle Fotografie für besondere Augenblicke
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-white hover:bg-white hover:text-dark transition-all text-lg"
          >
            Projekte entdecken
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
