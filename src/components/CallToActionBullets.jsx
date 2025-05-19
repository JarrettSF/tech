import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const bullets = [
  {
    id: 1,
    title: '🖥️ Donate Technology',
    description:
      'We will come to you! Pick up your old gear, and securely erase any data containing deveices using industry-standard data wiping protocols, meeting or exceeding NAID (National Association for Information Destruction) best practices, and provide a certificate of destruction by request. 🔐 Every device is then responsibly refurbished or recycled to support digital access in underserved communities. ♻️',
    icon: '/g.jpg',
  },
  {
    id: 2,
    title: 'Web Design & Digital Growth 🌐📈',
    description:
      'We build custom websites and digital tools for nonprofits and small businesses, and offer low-cost classes so you can level up your own digital game.',
    icon: '/j.jpg',
  },
  {
    id: 3,
    title: 'Meet Tech Support 🔧💻 & Founder',
    description:'I am the people we are impacting together.',
    icon: '/M.jpg',
  },
  
];

export default function CallToActionBullets({ onArrowClick }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      {bullets.map(({ id, title, description, icon }) => (
        <motion.div
          key={id}
          className="flex flex-col items-center text-center mb-24 relative group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <h3 className="text-3xl font-bold glow-green text-green-400 drop-shadow-[0_0_20px_rgba(0,255,0,0.8)] tracking-wide mb-4">
            {title}
          </h3>

          <p className="text-lg text-pink-400 max-w-md">{description}</p>

          <img
            src={icon}
            alt={`${title} icon`}
            className="w-80 h-70 mt-6 object-contain flicker filter drop-shadow-lg"
          />

          <button
            onClick={() => onArrowClick(id)}
            aria-label={`Go to impact ${id}`}
            className="absolute right-[-3rem] top-1/2 -translate-y-1/2 text-cyan-400 hover:text-cyan-300 transition-transform duration-300 hover:scale-150"
          >
            <ArrowRight className="w-12 h-12 drop-shadow-[0_0_20px_#0ff] animate-pulse" />
          </button>
        </motion.div>
      ))}
    </section>
  );
}
