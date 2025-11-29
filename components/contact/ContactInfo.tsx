'use client';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const contactDetails = [
    {
        icon: MapPin,
        title: 'Our Location',
        content: ['204 Discovery Tower', 'Dubai Studio City', 'United Arab Emirates'],
        delay: 0.2
    },
    {
        icon: Mail,
        title: 'Email Us',
        content: ['connect@thefbc.xyz'],
        link: 'mailto:connect@thefbc.xyz',
        delay: 0.3
    },
    {
        icon: Phone,
        title: 'Call Us',
        content: ['+971 50 108 6538'],
        link: 'tel:+971501086538',
        delay: 0.4
    },
    {
        icon: Clock,
        title: 'Business Hours',
        content: ['Sunday – Friday', '9:00 AM – 6:00 PM'],
        delay: 0.5
    }
];

export function ContactInfo() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
        >
            {/* Company Name */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
            >
                <h2 className="text-3xl mb-2" style={{ color: '#ff6500' }}>
                    Foundation Business Consultancy
                </h2>
                <p style={{ color: '#ffffff', opacity: 0.7 }}>
                    Your partner in business excellence
                </p>
            </motion.div>

            {/* Contact Details */}
            <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: detail.delay }}
                        whileHover={{ x: 10, transition: { duration: 0.2 } }}
                        className="flex gap-4 p-6 rounded-lg transition-all duration-300"
                        style={{ backgroundColor: '#2f3032' }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                        >
                            <div
                                className="w-12 h-12 rounded-lg flex items-center justify-center"
                                style={{ backgroundColor: '#ff6500' }}
                            >
                                <detail.icon size={24} color="#ffffff" />
                            </div>
                        </motion.div>
                        <div className="flex-1">
                            <h3 className="mb-2" style={{ color: '#f68e1e' }}>
                                {detail.title}
                            </h3>
                            <div className="space-y-1">
                                {detail.content.map((line, i) => (
                                    detail.link && i === 0 ? (
                                        <a
                                            key={i}
                                            href={detail.link}
                                            className="block hover:underline transition-all"
                                            style={{ color: '#ffffff', opacity: 0.9 }}
                                        >
                                            {line}
                                        </a>
                                    ) : (
                                        <p key={i} style={{ color: '#ffffff', opacity: 0.8 }}>
                                            {line}
                                        </p>
                                    )
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Decorative Element */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-8 p-6 rounded-lg relative overflow-hidden"
                style={{ backgroundColor: '#2f3032' }}
            >
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(circle at center, #ff6500, transparent 70%)`,
                    }}
                />
                <div className="relative z-10">
                    <p className="text-center" style={{ color: '#ffffff', opacity: 0.9 }}>
                        We typically respond within 24 hours
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}
