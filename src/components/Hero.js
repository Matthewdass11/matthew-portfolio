import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative overflow-hidden group">
      {/* Hover background glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-700 bg-gradient-to-r from-teal-400 via-pink-500 to-blue-500 blur-2xl pointer-events-none z-0" />

      <motion.div
        className="relative z-10 h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black text-white text-center px-6"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-300 to-pink-400 bg-clip-text text-transparent"
        >
          MATTHEWDASS
        </motion.h1>

        <motion.p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl">
          Tech Entrepreneur | CTO @ SAPU | Building the future of mobility, one project at a time.
        </motion.p>

        <motion.a
          href="#projects"
          className="mt-10 px-6 py-3 rounded-full text-black font-semibold bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 transition-transform transform hover:scale-105 shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          Explore My Work
        </motion.a>

        <motion.div className="mt-10 animate-bounce text-teal-400">
          <FaArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
