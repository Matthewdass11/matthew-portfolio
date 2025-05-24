import { AnimatePresence, motion } from 'framer-motion';

export default function ProjectCard({ project, expanded, onClick }) {
  return (
    <motion.div
      layout="position"
      className="relative group overflow-hidden p-6 bg-white/10 backdrop-blur-md rounded-xl text-white shadow-xl transition hover:scale-[1.02] cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition duration-700 blur-2xl pointer-events-none" />

      <div className="flex items-center space-x-4 relative z-10">
        <img
          src={project.image}
          alt={`${project.title} logo`}
          className="w-12 h-12 object-contain rounded"
        />
        <h3 className="text-xl font-bold">{project.title}</h3>
      </div>

      <AnimatePresence initial={false} mode="wait">
        {expanded && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-4 text-sm text-gray-300 space-y-3 overflow-hidden relative z-10"
          >
            <p><strong>Description:</strong> {project.description}</p>
            <p><strong>My Role:</strong> {project.role}</p>
            <p><strong>Tech Stack:</strong> {project.tech}</p>
            <p><strong>Outcome:</strong> {project.outcome}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
