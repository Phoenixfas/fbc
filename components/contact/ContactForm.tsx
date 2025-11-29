'use client';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';

const services = [
    'Business Strategy',
    'Financial Consulting',
    'Operations Management',
    'Market Research',
    'Digital Transformation',
    'Other',
];

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [hoveredSubmit, setHoveredSubmit] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        console.log('Form submitted:', formData);

        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: '',
            });
            setSubmitted(false);
        }, 4000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const inputVariants = {
        focused: { scale: 1.01, y: -2 },
        unfocused: { scale: 1, y: 0 },
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative p-8 md:p-10 rounded-3xl backdrop-blur-xl overflow-hidden"
            style={{
                backgroundColor: 'rgba(47, 48, 50, 0.6)',
                border: '2px solid rgba(255, 101, 0, 0.2)',
            }}
        >
            {/* Animated Corner Accents */}
            <motion.div
                className="absolute top-0 left-0 w-40 h-40 rounded-br-full"
                style={{
                    background: 'radial-gradient(circle at top left, #ff650030, transparent 70%)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-40 h-40 rounded-tl-full"
                style={{
                    background: 'radial-gradient(circle at bottom right, #f68e1e30, transparent 70%)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />

            <div className="relative z-10">
                {/* Header */}
                <div className="mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center gap-3 mb-2"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles size={24} color="#ff6500" />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl" style={{ color: '#ffffff' }}>
                            Start the Conversation
                        </h2>
                    </motion.div>
                    <p style={{ color: '#f68e1e', opacity: 0.8 }}>
                        Fill in the details below and we'll get back to you promptly
                    </p>
                </div>

                <AnimatePresence mode="wait">
                    {submitted ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="py-20 text-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                            >
                                <motion.div
                                    animate={{
                                        rotate: [0, 10, -10, 0],
                                    }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="inline-block"
                                >
                                    <CheckCircle2 size={80} color="#ff6500" />
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <h3 className="text-3xl mb-4 mt-6" style={{ color: '#f68e1e' }}>
                                    Message Sent Successfully!
                                </h3>
                                <p className="text-xl" style={{ color: '#ffffff', opacity: 0.8 }}>
                                    We've received your message and will respond within 24 hours.
                                </p>
                            </motion.div>

                            {/* Celebration Particles */}
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 rounded-full"
                                    style={{
                                        backgroundColor: i % 2 === 0 ? '#ff6500' : '#f68e1e',
                                        left: '50%',
                                        top: '50%',
                                    }}
                                    initial={{ scale: 0, x: 0, y: 0 }}
                                    animate={{
                                        scale: [0, 1, 0],
                                        x: Math.cos((i * 30 * Math.PI) / 180) * 100,
                                        y: Math.sin((i * 30 * Math.PI) / 180) * 100,
                                    }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >
                            {/* Name */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <label htmlFor="name" className="block mb-2 ml-1" style={{ color: '#f68e1e' }}>
                                    Name
                                </label>
                                <motion.input
                                    variants={inputVariants}
                                    animate={focusedField === 'name' ? 'focused' : 'unfocused'}
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('name')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full px-5 py-4 rounded-xl transition-all duration-300 outline-none"
                                    style={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        color: '#ffffff',
                                        border: `2px solid ${focusedField === 'name' ? '#ff6500' : 'rgba(255, 101, 0, 0.2)'}`,
                                        boxShadow: focusedField === 'name' ? '0 0 20px rgba(255, 101, 0, 0.3)' : 'none',
                                    }}
                                    placeholder="Your full name"
                                />
                            </motion.div>

                            {/* Email and Phone Grid */}
                            <div className="grid md:grid-cols-2 gap-5">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <label htmlFor="email" className="block mb-2 ml-1" style={{ color: '#f68e1e' }}>
                                        Email
                                    </label>
                                    <motion.input
                                        variants={inputVariants}
                                        animate={focusedField === 'email' ? 'focused' : 'unfocused'}
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full px-5 py-4 rounded-xl transition-all duration-300 outline-none"
                                        style={{
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            color: '#ffffff',
                                            border: `2px solid ${focusedField === 'email' ? '#ff6500' : 'rgba(255, 101, 0, 0.2)'}`,
                                            boxShadow: focusedField === 'email' ? '0 0 20px rgba(255, 101, 0, 0.3)' : 'none',
                                        }}
                                        placeholder="your@email.com"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <label htmlFor="phone" className="block mb-2 ml-1" style={{ color: '#f68e1e' }}>
                                        Phone
                                    </label>
                                    <motion.input
                                        variants={inputVariants}
                                        animate={focusedField === 'phone' ? 'focused' : 'unfocused'}
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('phone')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full px-5 py-4 rounded-xl transition-all duration-300 outline-none"
                                        style={{
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            color: '#ffffff',
                                            border: `2px solid ${focusedField === 'phone' ? '#ff6500' : 'rgba(255, 101, 0, 0.2)'}`,
                                            boxShadow: focusedField === 'phone' ? '0 0 20px rgba(255, 101, 0, 0.3)' : 'none',
                                        }}
                                        placeholder="+971 50 123 4567"
                                    />
                                </motion.div>
                            </div>

                            {/* Service */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9 }}
                            >
                                <label htmlFor="service" className="block mb-2 ml-1" style={{ color: '#f68e1e' }}>
                                    Service Required
                                </label>
                                <motion.select
                                    variants={inputVariants}
                                    animate={focusedField === 'service' ? 'focused' : 'unfocused'}
                                    id="service"
                                    name="service"
                                    required
                                    value={formData.service}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('service')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full px-5 py-4 rounded-xl transition-all duration-300 outline-none cursor-pointer"
                                    style={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        color: formData.service ? '#ffffff' : '#999999',
                                        border: `2px solid ${focusedField === 'service' ? '#ff6500' : 'rgba(255, 101, 0, 0.2)'}`,
                                        boxShadow: focusedField === 'service' ? '0 0 20px rgba(255, 101, 0, 0.3)' : 'none',
                                    }}
                                >
                                    <option value="">Select a service</option>
                                    {services.map((service) => (
                                        <option key={service} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                </motion.select>
                            </motion.div>

                            {/* Message */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                            >
                                <label htmlFor="message" className="block mb-2 ml-1" style={{ color: '#f68e1e' }}>
                                    Message
                                </label>
                                <motion.textarea
                                    variants={inputVariants}
                                    animate={focusedField === 'message' ? 'focused' : 'unfocused'}
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    rows={5}
                                    className="w-full px-5 py-4 rounded-xl transition-all duration-300 outline-none resize-none"
                                    style={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        color: '#ffffff',
                                        border: `2px solid ${focusedField === 'message' ? '#ff6500' : 'rgba(255, 101, 0, 0.2)'}`,
                                        boxShadow: focusedField === 'message' ? '0 0 20px rgba(255, 101, 0, 0.3)' : 'none',
                                    }}
                                    placeholder="Tell us about your project or inquiry..."
                                />
                            </motion.div>

                            {/* Submit Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1 }}
                            >
                                <motion.button
                                    type="submit"
                                    onHoverStart={() => setHoveredSubmit(true)}
                                    onHoverEnd={() => setHoveredSubmit(false)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-5 rounded-xl flex items-center justify-center gap-3 relative overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, #ff6500, #f68e1e)',
                                        color: '#ffffff',
                                        boxShadow: hoveredSubmit ? '0 15px 40px rgba(255, 101, 0, 0.4)' : '0 5px 20px rgba(255, 101, 0, 0.3)',
                                    }}
                                >
                                    {/* Animated Background */}
                                    <motion.div
                                        className="absolute inset-0"
                                        animate={{
                                            x: hoveredSubmit ? ['0%', '100%'] : '0%',
                                        }}
                                        transition={{ duration: 0.6 }}
                                        style={{
                                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                                        }}
                                    />

                                    <span className="text-lg relative z-10">Send Message</span>
                                    <motion.div
                                        animate={{
                                            x: hoveredSubmit ? [0, 5, 0] : 0,
                                            rotate: hoveredSubmit ? [0, -15, 0] : 0,
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className="relative z-10"
                                    >
                                        <Send size={22} />
                                    </motion.div>
                                </motion.button>
                            </motion.div>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
