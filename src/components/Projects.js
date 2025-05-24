import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'SAPU',
    image: '/images/SAPU kuning.png',
    description: 'Ride-sharing for university students focused on affordability and sustainability.',
    role: 'Co-Founder & CTO',
    tech: 'React, Django, Firebase, SHA-3, SQLite',
    outcome: 'Used in UM. Legally compliant alternative to e-hailing.',
  },
  {
    title: 'EZGig',
    image: '/images/ez.png',
    description: 'Student gig marketplace for freelancing opportunities.',
    role: 'Freelance front end developer',
    tech: 'React',
    outcome: 'Operational in 6 public universities, MOA with Aerosim HK.',
  },
  {
    title: 'BarakahFunds',
    image: '/images/barakah.jpg',
    description: 'Transparent Zakat & Sadaqah platform with smart contracts.',
    role: 'Developer (Frontend)',
    tech: 'React',
    outcome: 'Hackathon finalist with working donation tracker & NFT receipts.',
  },
  {
    title: 'HealthHub',
    image: '/images/health hub.png',
    description: 'Mobile health tracking and appointment app for students.',
    role: 'Mobile App Developer',
    tech: 'Android Studio, Java, Firebase',
    outcome: 'Used to schedule and manage university clinic visits.',
  },
  {
    title: 'Makan UM',
    image: '/images/MakanUM.png',
    description: 'UM student community food finder for cheap, halal, & hidden spots.',
    role: 'Research & Outreach Lead',
    tech: 'Canva, Google Forms, Google Sheets',
    outcome: 'Helped 1000+ students explore affordable food spots.',
  },
  {
    title: 'MicroVest',
    image: '/images/microvest.png',
    description: 'Multi-currency expense tracker with Firebase Auth and goal-setting.',
    role: 'Backend & Security Dev',
    tech: 'Java, Firebase, Android Studio',
    outcome: 'Successfully demoed as secure MVP for course project.',
  },
  {
    title: 'Osel Clinic Dashboard',
    image: '/images/osel clinic.png',
    description: 'Interactive dashboard for clinic management, appointment flow, and analytics.',
    role: 'System Analyst & UI Designer',
    tech: 'Oracle APEX, SQL, Data Visualization',
    outcome: 'Successfully developed for database course in UM.',
  },
  {
    title: 'Typathoon Game',
    image: '/images/typhatoon.jpg',
    description: 'Typing game clone inspired by MonkeyType to boost WPM.',
    role: 'Solo Dev',
    tech: 'Apache NetBeans, Java Swing',
    outcome: 'Interactive standalone app submitted as final game dev task.',
  },
  {
    title: 'Hacking the Future (Classroom Clone)',
    image: '/images/hacking the future.jpg',
    description: 'A classroom management platform for university students.',
    role: 'CTO, Designer, Hashing Lead',
    tech: 'JavaFX, SQLite, SHA-3, GUI Dev',
    outcome: 'Secure classroom app with login, quizzes, and event boards.',
  },
  {
  title: 'Hotel Booking Insight Dashboard',
  image: '/images/hotel_dashboard.png',
  description: 'Analyzed hotel booking data to identify ADR/booking trends and predict optimal renovation periods.',
  role: 'Data Scientist',
  tech: 'Python, Pandas, Scikit-learn, Matplotlib',
  outcome: 'Built regression models and created visualizations for pricing strategy and demand forecasting.',
},
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.section
      id="projects"
      className="relative group min-h-screen px-6 py-20 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Hover background shine */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-700 bg-gradient-to-tr from-pink-500 via-teal-400 to-blue-500 blur-2xl pointer-events-none" />

      <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto auto-rows-fr relative z-10">
        {projects.map((proj, index) => (
          <ProjectCard
            key={index}
            project={proj}
            expanded={expandedIndex === index}
            onClick={() => toggleExpand(index)}
          />
        ))}
      </div>
    </motion.section>
  );
}
