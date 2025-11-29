'use client';
import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    console.log('Newsletter subscription:', email);

    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16"
    >
      <div
        className="p-8 md:p-12 rounded-3xl backdrop-blur-xl relative overflow-hidden"
        style={{
          backgroundColor: 'rgba(47, 48, 50, 0.6)',
          border: '2px solid rgba(255, 101, 0, 0.2)',
        }}
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, #ff650020, transparent 50%)',
              'radial-gradient(circle at 100% 100%, #f68e1e20, transparent 50%)',
              'radial-gradient(circle at 0% 0%, #ff650020, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #ff6500, #f68e1e)',
                }}
              >
                <Mail size={24} color="#ffffff" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl" style={{ color: '#ffffff' }}>
                Stay Updated
              </h3>
            </div>
            <p style={{ color: '#f68e1e', opacity: 0.9 }}>
              Subscribe to our newsletter for business insights, industry trends, and exclusive updates.
            </p>
          </motion.div>

          {/* Right - Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {subscribed ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-6"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: '#ff6500' }}
                >
                  <Mail size={32} color="#ffffff" />
                </motion.div>
                <p className="text-xl" style={{ color: '#f68e1e' }}>
                  Thanks for subscribing!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-4 rounded-xl outline-none transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: '#ffffff',
                    border: '2px solid rgba(255, 101, 0, 0.2)',
                  }}
                  onFocus={(e) => {
                    e.target.style.border = '2px solid #ff6500';
                    e.target.style.boxShadow = '0 0 20px rgba(255, 101, 0, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.border = '2px solid rgba(255, 101, 0, 0.2)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  className="px-8 py-4 rounded-xl flex items-center gap-2 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #ff6500, #f68e1e)',
                    color: '#ffffff',
                    boxShadow: isHovered ? '0 10px 30px rgba(255, 101, 0, 0.4)' : '0 5px 15px rgba(255, 101, 0, 0.3)',
                  }}
                >
                  <span>Subscribe</span>
                  <motion.div
                    animate={{
                      x: isHovered ? [0, 5, 0] : 0,
                    }}
                    transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
