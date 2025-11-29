'use client';
import { motion } from 'motion/react';
import { FooterContent } from './FooterContent';
// import { FooterNewsletter } from './FooterNewsletter';
import { FooterBottom } from './FooterBottom';

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Top Gradient Line */}
      <motion.div
        className="h-1 relative overflow-hidden"
        style={{ backgroundColor: '#2f3032' }}
      >
        <motion.div
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent, #ff6500, #f68e1e, transparent)',
          }}
        />
      </motion.div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, #ff650020, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, #f68e1e20, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        {/* <FooterNewsletter /> */}

        {/* Main Footer Content */}
        <FooterContent />

        {/* Bottom Bar */}
        <FooterBottom />
      </div>
    </footer>
  );
}
