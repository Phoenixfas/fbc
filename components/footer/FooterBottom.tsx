'use client';
import { motion } from 'motion/react';
import { Heart, ArrowUp, Circle } from 'lucide-react';
import { useState } from 'react';

export function FooterBottom() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show scroll to top button when user scrolls
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowScrollTop(window.scrollY > 500);
    });
  }

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="h-px mb-8"
        style={{
          background: 'linear-gradient(90deg, transparent, #ff6500, #f68e1e, transparent)',
          transformOrigin: 'center',
        }}
      />

      {/* Bottom Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="pb-8 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        {/* Copyright */}
        <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
          <p style={{ color: '#ffffff', opacity: 0.7 }}>
            © {currentYear} Foundation Business Consultancy. All rights reserved.
          </p>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Circle size={16} color="#ff6500" fill="#ff6500" />
          </motion.div>
        </div>

        {/* Legal Links */}
        <div className="flex items-center gap-6">
          {['Privacy Policy'].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              className="relative"
              style={{ color: '#ffffff', opacity: 0.7 }}
              whileHover={{ opacity: 1, y: -2 }}
            >
              {item}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-px"
                style={{ backgroundColor: '#ff6500' }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      {/* <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center z-50 cursor-pointer transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #ff6500, #f68e1e)',
          boxShadow: '0 5px 20px rgba(255, 101, 0, 0.4)',
        }}
        aria-label="Scroll to top"
      >
        <motion.div
          animate={{
            y: [-2, 2, -2],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowUp size={24} color="#ffffff" />
        </motion.div> */}

      {/* Pulse Ring */}
      {/* <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: '2px solid #ff6500',
          }}
          animate={{
            scale: [1, 1.5],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.button> */}
    </>
  );
}
