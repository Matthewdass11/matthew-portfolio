import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm px-8 py-4 flex justify-between items-center shadow-lg"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-xl font-bold text-white tracking-wider"
        whileHover={{
          textShadow: '0px 0px 8px #0ff',
          color: '#38bdf8'
        }}
      >
        MATTHEWDASS
      </motion.h1>

      <div className="space-x-8 flex items-center">
        {['about', 'projects', 'contact'].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="relative group text-white text-sm font-medium uppercase tracking-wide transition duration-300"
          >
            {item}
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-teal-400 group-hover:w-full transition-all duration-500"></span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
