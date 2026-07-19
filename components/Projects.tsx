import { motion } from 'framer-motion';

const PROJECTS = [
  {
    id: 1,
    title: 'Hochzeitsreportage',
    description: 'Ein Tag voller Emotionen und Momente - professionell dokumentiert',
    date: '2024',
  },
  {
    id: 2,
    title: 'Fashion Shoot',
    description: 'Editorial Photography für internationale Modemagazine',
    date: '2024',
  },
  {
    id: 3,
    title: 'Unternehmensportrait',
    description: 'Corporate Fotografie für globale Unternehmen',
    date: '2023',
  },
];

export default function Projects() {
  return (
    <section id="projekte" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Ausgewählte Projekte
        </motion.h2>
        
        <div className="space-y-12">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="flex-1 h-80 bg-dark-accent rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
              </div>
              
              <div className="flex-1">
                <p className="text-gray-400 text-sm mb-2">{project.date}</p>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-white border-b border-white pb-2 hover:text-gray-400 transition-colors"
                >
                  Mehr erfahren →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
