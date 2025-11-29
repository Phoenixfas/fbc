'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { ContactCards } from './ContactCards';
import { ContactForm } from './ContactForm';
// import { FloatingIcons } from './FloatingIcons';
import { useRef } from 'react';

export function ContactSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <div id="contact" ref={containerRef} className="relative flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
            {/* <FloatingIcons /> */}

            <motion.div
                style={{ y, opacity }}
                className="max-w-7xl w-full relative z-10"
            >
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="inline-block mb-6"
                    >
                        <motion.div
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="relative w-20 h-20 mx-auto"
                        >
                            <div
                                className="absolute inset-0 rounded-full blur-lg"
                                style={{ backgroundColor: '#ff6500', opacity: 0.5 }}
                            />
                            <div
                                className="absolute inset-2 rounded-full"
                                style={{
                                    background: `conic-gradient(from 0deg, #ff6500, #f68e1e, #ff6500)`,
                                }}
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h1
                            className="text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
                            style={{ color: '#ffffff' }}
                            animate={{
                                textShadow: [
                                    '0 0 20px rgba(255, 101, 0, 0.3)',
                                    '0 0 40px rgba(255, 101, 0, 0.5)',
                                    '0 0 20px rgba(255, 101, 0, 0.3)',
                                ],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            Let's Connect
                        </motion.h1>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-1 max-w-xs mx-auto mb-6 rounded-full overflow-hidden"
                            style={{ backgroundColor: '#2f3032' }}
                        >
                            <motion.div
                                animate={{
                                    x: ['-100%', '200%'],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="h-full w-1/2"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, #ff6500, #f68e1e, transparent)',
                                }}
                            />
                        </motion.div>

                        <p
                            className="text-xl md:text-2xl max-w-2xl mx-auto"
                            style={{ color: '#f68e1e', opacity: 0.9 }}
                        >
                            Ready to transform your business? We're here to help
                        </p>
                    </motion.div>
                </div>

                {/* Company Name Banner */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-12 relative"
                >
                    <div
                        className="p-6 rounded-2xl backdrop-blur-xl relative overflow-hidden"
                        style={{
                            backgroundColor: 'rgba(47, 48, 50, 0.4)',
                            border: '1px solid rgba(255, 101, 0, 0.2)',
                        }}
                    >
                        <motion.div
                            animate={{
                                x: ['0%', '100%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute top-0 left-0 h-full w-1/3"
                            style={{
                                background: 'linear-gradient(90deg, transparent, rgba(255, 101, 0, 0.1), transparent)',
                            }}
                        />
                        <h2
                            className="text-2xl md:text-4xl text-center tracking-wide"
                            style={{ color: '#ff6500' }}
                        >
                            Foundation Business Consultancy
                        </h2>
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Contact Cards - 2 columns */}
                    <div className="lg:col-span-2">
                        <ContactCards />
                    </div>

                    {/* Contact Form - 3 columns */}
                    <div className="lg:col-span-3">
                        <ContactForm />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
