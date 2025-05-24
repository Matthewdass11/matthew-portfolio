import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative group min-h-screen px-10 py-20 bg-gradient-to-b from-gray-900 to-black text-white flex flex-col md:flex-row items-center gap-10"
    >
      {/* Background shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-700 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 blur-2xl pointer-events-none rounded-2xl" />

      {/* Profile Section */}
      <motion.div
        className="md:w-1/3 relative z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative">
          <img
            src="/images/me1.jpg"
            alt="Matthew Dass"
            className="rounded-full w-60 h-60 object-cover shadow-xl border-4 border-white mx-auto ring-4 ring-blue-500"
          />
          <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full shadow-md animate-pulse">
            CTO @ SAPU
          </div>
        </div>
        <div className="text-center mt-6">
          <a
            href="/Matthew Intern Resume.pdf"
            download
            className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        className="md:w-2/3 text-center md:text-left relative z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-extrabold mb-6 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
          Meet Matthew Dass
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          I’m <strong className="text-white">Matthew Dass</strong>, a tech entrepreneur passionate about transforming student mobility and driving innovation. As the Co-Founder & CTO of <strong className="text-white">SAPU</strong>, I’ve built platforms that prioritize affordability, sustainability, and user experience.
          <br /><br />
          Beyond SAPU, I lead youth empowerment programs and develop AI-driven fintech and community solutions — all with a mission to make technology serve people better.
        </p>
      </motion.div>
    </motion.section>
  );
}
