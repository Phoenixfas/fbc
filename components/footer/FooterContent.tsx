'use client';
import { motion } from 'motion/react';
import { Building2, Briefcase, Users, FileText, Phone, MapPin, Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { useState } from 'react';

const footerSections = [
  {
    title: 'Services',
    icon: Briefcase,
    links: [
      'Business Strategy',
      'Financial Consulting',
      'Operations Management',
      'Market Research',
      'Digital Transformation',
      'Risk Management',
    ],
  },
  {
    title: 'Company',
    icon: Building2,
    links: [
      'About Us',
      'Our Team',
      'Careers',
      'Case Studies',
      'Testimonials',
      'Partners',
    ],
  },
  {
    title: 'Resources',
    icon: FileText,
    links: [
      'Blog',
      'Insights',
      'Whitepapers',
      'Events',
      'FAQ',
      'Support',
    ],
  },
];

const contactInfo = [
  { icon: MapPin, text: '204 Discovery Tower, Dubai Studio City' },
  { icon: Mail, text: 'connect@thefbc.xyz', link: 'mailto:connect@thefbc.xyz' },
  { icon: Phone, text: '+971 50 108 6538', link: 'tel:+971501086538' },
];

const socialLinks = [
  { icon: Linkedin, name: 'LinkedIn', href: '#' },
  { icon: Twitter, name: 'Twitter', href: '#' },
  { icon: Facebook, name: 'Facebook', href: '#' },
  { icon: Instagram, name: 'Instagram', href: '#' },
];

export function FooterContent() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  return (
    <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
      {/* Company Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="lg:col-span-2"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="mb-6"
        >
          <h3 className="text-2xl md:text-3xl mb-2" style={{ color: '#ff6500' }}>
            Foundation Business Consultancy
          </h3>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 max-w-xs rounded-full mb-4"
            style={{
              background: 'linear-gradient(90deg, #ff6500, #f68e1e, transparent)',
            }}
          />
        </motion.div>

        <p className="mb-6" style={{ color: '#ffffff', opacity: 0.8 }}>
          Empowering businesses to achieve excellence through strategic consulting and innovative solutions.
        </p>

        {/* Contact Info */}
        <div className="space-y-3 mb-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ x: 5 }}
              className="flex items-center gap-3"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(255, 101, 0, 0.2)' }}
              >
                <item.icon size={18} color="#ff6500" />
              </motion.div>
              {item.link ? (
                <a
                  href={item.link}
                  className="hover:underline transition-all"
                  style={{ color: '#ffffff', opacity: 0.9 }}
                >
                  {item.text}
                </a>
              ) : (
                <span style={{ color: '#ffffff', opacity: 0.9 }}>
                  {item.text}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.1, y: -5 }}
              onHoverStart={() => setHoveredSocial(index)}
              onHoverEnd={() => setHoveredSocial(null)}
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 relative overflow-hidden"
              style={{
                backgroundColor: hoveredSocial === index ? '#ff6500' : 'rgba(255, 101, 0, 0.2)',
                boxShadow: hoveredSocial === index ? '0 5px 20px rgba(255, 101, 0, 0.4)' : 'none',
              }}
              aria-label={social.name}
            >
              {hoveredSocial === index && (
                <motion.div
                  layoutId="social-hover"
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, #ff6500, #f68e1e)',
                  }}
                />
              )}
              <social.icon size={20} color="#ffffff" className="relative z-10" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Footer Links Sections */}
      {footerSections.map((section, sectionIndex) => (
        <motion.div
          key={sectionIndex}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + sectionIndex * 0.1 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'rgba(246, 142, 30, 0.2)' }}
            >
              <section.icon size={16} color="#f68e1e" />
            </motion.div>
            <h4 className="text-xl" style={{ color: '#f68e1e' }}>
              {section.title}
            </h4>
          </div>
          <ul className="space-y-3">
            {section.links.map((link, linkIndex) => (
              <motion.li
                key={linkIndex}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + linkIndex * 0.05 }}
              >
                <motion.a
                  href="#"
                  className="inline-block relative"
                  style={{ color: '#ffffff', opacity: 0.8 }}
                  whileHover={{ x: 5, opacity: 1 }}
                  onHoverStart={() => setHoveredLink(`${sectionIndex}-${linkIndex}`)}
                  onHoverEnd={() => setHoveredLink(null)}
                >
                  {hoveredLink === `${sectionIndex}-${linkIndex}` && (
                    <motion.div
                      layoutId="link-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5"
                      style={{ backgroundColor: '#ff6500' }}
                    />
                  )}
                  {link}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
