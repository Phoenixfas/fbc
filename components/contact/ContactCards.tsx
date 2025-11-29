'use client';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { useState } from 'react';

const contactItems = [
    {
        icon: MapPin,
        title: 'Visit Us',
        lines: ['204 Discovery Tower', 'Dubai Studio City', 'United Arab Emirates'],
        color: '#ff6500',
        delay: 0.6,
    },
    {
        icon: Mail,
        title: 'Email',
        lines: ['connect@thefbc.xyz'],
        color: '#f68e1e',
        link: 'mailto:connect@thefbc.xyz',
        delay: 0.7,
    },
    {
        icon: Phone,
        title: 'Call',
        lines: ['+971 50 108 6538'],
        color: '#ff6500',
        link: 'tel:+971501086538',
        delay: 0.8,
    },
    {
        icon: Clock,
        title: 'Hours',
        lines: ['Sunday – Friday', '9:00 AM – 6:00 PM'],
        color: '#f68e1e',
        delay: 0.9,
    },
];

export function ContactCards() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="space-y-4">
            {contactItems.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50, rotateY: -90 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: item.delay,
                        type: "spring",
                        stiffness: 100,
                    }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="relative"
                >
                    <motion.div
                        animate={{
                            scale: hoveredIndex === index ? 1.02 : 1,
                            rotateX: hoveredIndex === index ? 5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="relative p-6 rounded-2xl backdrop-blur-xl overflow-hidden cursor-pointer"
                        style={{
                            backgroundColor: 'rgba(47, 48, 50, 0.6)',
                            border: `2px solid ${hoveredIndex === index ? item.color : 'rgba(255, 101, 0, 0.2)'}`,
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        {/* Animated Background Gradient */}
                        <motion.div
                            className="absolute inset-0"
                            animate={{
                                opacity: hoveredIndex === index ? 0.1 : 0,
                            }}
                            style={{
                                background: `radial-gradient(circle at 50% 50%, ${item.color}, transparent 70%)`,
                            }}
                        />

                        {/* Shine Effect */}
                        <motion.div
                            className="absolute inset-0"
                            animate={{
                                x: hoveredIndex === index ? ['0%', '200%'] : '0%',
                            }}
                            transition={{ duration: 0.6 }}
                            style={{
                                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                            }}
                        />

                        <div className="relative z-10 flex items-start gap-4">
                            {/* Icon */}
                            <motion.div
                                animate={{
                                    rotate: hoveredIndex === index ? 360 : 0,
                                    scale: hoveredIndex === index ? 1.1 : 1,
                                }}
                                transition={{ duration: 0.5 }}
                                className="flex-shrink-0"
                            >
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center relative"
                                    style={{
                                        background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                                        boxShadow: hoveredIndex === index ? `0 10px 30px ${item.color}60` : 'none',
                                    }}
                                >
                                    <item.icon size={26} color="#ffffff" strokeWidth={2} />

                                    {/* Pulse Effect */}
                                    {hoveredIndex === index && (
                                        <motion.div
                                            className="absolute inset-0 rounded-xl"
                                            initial={{ scale: 1, opacity: 1 }}
                                            animate={{ scale: 1.5, opacity: 0 }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                            style={{
                                                border: `2px solid ${item.color}`,
                                            }}
                                        />
                                    )}
                                </div>
                            </motion.div>

                            {/* Content */}
                            <div className="flex-1">
                                <motion.h3
                                    className="mb-2 tracking-wide"
                                    style={{ color: item.color }}
                                    animate={{
                                        x: hoveredIndex === index ? 5 : 0,
                                    }}
                                >
                                    {item.title}
                                </motion.h3>
                                <div className="space-y-1">
                                    {item.lines.map((line, lineIndex) => (
                                        item.link && lineIndex === 0 ? (
                                            <motion.a
                                                key={lineIndex}
                                                href={item.link}
                                                className="block pointer-events-auto"
                                                style={{ color: '#ffffff', opacity: 0.9 }}
                                                animate={{
                                                    x: hoveredIndex === index ? 5 : 0,
                                                }}
                                                transition={{ delay: lineIndex * 0.05 }}
                                                whileHover={{ opacity: 1, x: 10 }}
                                            >
                                                {line}
                                            </motion.a>
                                        ) : (
                                            <motion.p
                                                key={lineIndex}
                                                style={{ color: '#ffffff', opacity: 0.8 }}
                                                animate={{
                                                    x: hoveredIndex === index ? 5 : 0,
                                                }}
                                                transition={{ delay: lineIndex * 0.05 }}
                                            >
                                                {line}
                                            </motion.p>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            ))}

            {/* Quick Response Badge */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="relative p-6 rounded-2xl backdrop-blur-xl text-center overflow-hidden"
                style={{
                    backgroundColor: 'rgba(47, 48, 50, 0.6)',
                    border: '2px solid rgba(246, 142, 30, 0.3)',
                }}
            >
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle, #f68e1e, transparent 70%)',
                    }}
                />
                <div className="relative z-10">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="w-3 h-3 rounded-full mx-auto mb-2"
                        style={{ backgroundColor: '#ff6500' }}
                    />
                    <p style={{ color: '#ffffff', opacity: 0.9 }}>
                        24-hour response time
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
