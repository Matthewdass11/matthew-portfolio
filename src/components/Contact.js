import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(false);

    emailjs.sendForm('service_506nuii', 'template_h6vp91w', form.current, 'T4eBfTRdWQRkc9jpa')
      .then(() => {
        toast.success("✅ Message sent!");
        setSent(true);
        form.current.reset();
      }, (error) => {
        console.error("EmailJS Error:", error);
        toast.error("❌ Failed to send. Check console.");
      });
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen px-10 py-20 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />

      <motion.h2
        className="text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500"
      >
        Let's Connect
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-4 max-w-xl mx-auto"
      >
        <input
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-teal-400 to-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-500 hover:to-teal-400 transition"
        >
          Send Message
        </button>
      </motion.form>

      {sent && (
        <motion.div
          className="flex justify-center mt-10 text-teal-400"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <FaCheckCircle className="text-5xl" />
          <span className="ml-3 text-xl text-white">Email sent successfully!</span>
        </motion.div>
      )}
    </motion.section>
  );
}
