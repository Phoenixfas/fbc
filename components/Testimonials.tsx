'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Testimonials() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            quote: "FBC guided us through every step of our UAE expansion. Their clarity and professionalism gave us the confidence to grow.",
            author: "CEO",
            company: "International Trading Firm",
            color: "#ff6500",
        },
        {
            quote: "Their CFO services transformed our financial structure. We finally understand our numbers—and how to act on them.",
            author: "Founder",
            company: "Tech Startup",
            color: "#f68e1e",
        },
        {
            quote: "From formation to tax compliance, FBC has been our trusted partner for years.",
            author: "Director",
            company: "Hospitality Group",
            color: "#ff6500",
        },
    ];

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <div id="clients" className="relative py-32 px-6 overflow-hidden bg-black">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 -right-20 w-96 h-96 bg-[#ff6500] rounded-full opacity-5 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.05, 0.08, 0.05],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 -left-20 w-96 h-96 bg-[#f68e1e] rounded-full opacity-5 blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.05, 0.08, 0.05],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
            </div>

            {/* Client Testimonials */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="relative max-w-7xl mx-auto"
            >
                <div className="relative">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#ff6500]/20 to-[#f68e1e]/20 border border-[#ff6500]/30 mb-6"
                        >
                            <Star className="w-4 h-4 text-[#ff6500]" />
                            <span className="text-[#ff6500]">Client Testimonials</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-[#ffffff] mb-4"
                        >
                            CLIENT TESTIMONIALS
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[#ffffff]/70 max-w-2xl mx-auto"
                        >
                            Hear from our valued clients about their experience working with FBC
                        </motion.p>
                    </div>

                    {/* Testimonial Carousel */}
                    <div className="relative">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Background Image Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="lg:col-span-1 relative rounded-3xl overflow-hidden h-[400px] lg:h-auto"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                    className="h-full"
                                >
                                    <ImageWithFallback
                                        src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzY0Mjk2Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                        alt="Client Success"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent" />
                                </motion.div>

                                {/* Stats Overlay */}
                                <div className="absolute bottom-8 left-8 right-8 space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-xl bg-[#ff6500]/20 backdrop-blur-sm border border-[#ff6500]/30">
                                            <Quote className="w-6 h-6 text-[#ff6500]" />
                                        </div>
                                        <div>
                                            <div className="text-[#ffffff] text-2xl">100+</div>
                                            <div className="text-[#ffffff]/70">Happy Clients</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Animated decorative element */}
                                <motion.div
                                    className="absolute top-8 right-8 w-16 h-16 border-2 border-[#f68e1e] rounded-full opacity-40"
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                            </motion.div>

                            {/* Testimonial Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="lg:col-span-2 relative"
                            >
                                <div className="relative rounded-3xl bg-gradient-to-br from-[#2f3032] to-[#000000] border border-[#ffffff]/10 overflow-hidden p-10 lg:p-14 min-h-[400px] flex flex-col">
                                    {/* Background decoration */}
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#ff6500]/5 to-transparent rounded-full blur-3xl" />

                                    {/* Large quote icon */}
                                    <div className="absolute top-10 right-10 opacity-10">
                                        <Quote className="w-32 h-32 text-[#ff6500]" />
                                    </div>

                                    <div className="relative z-10 flex-1 flex flex-col justify-between">
                                        {/* Testimonial Content */}
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeTestimonial}
                                                initial={{ opacity: 0, y: 20, rotateX: -15 }}
                                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                                exit={{ opacity: 0, y: -20, rotateX: 15 }}
                                                transition={{ duration: 0.5 }}
                                                className="flex-1 flex flex-col justify-center"
                                            >
                                                {/* Stars */}
                                                <div className="flex gap-1 mb-6">
                                                    {[...Array(5)].map((_, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0, scale: 0 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ duration: 0.3, delay: i * 0.1 }}
                                                        >
                                                            <Star className="w-5 h-5 fill-[#ff6500] text-[#ff6500]" />
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                {/* Quote */}
                                                <blockquote className="text-[#ffffff] text-2xl lg:text-3xl leading-relaxed mb-8">
                                                    "{testimonials[activeTestimonial].quote}"
                                                </blockquote>

                                                {/* Author */}
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <div className="text-[#ffffff] mb-1">
                                                            {testimonials[activeTestimonial].author}
                                                        </div>
                                                        <div className="text-[#ffffff]/60">
                                                            {testimonials[activeTestimonial].company}
                                                        </div>
                                                    </div>

                                                    {/* Color indicator */}
                                                    <motion.div
                                                        animate={{
                                                            scale: [1, 1.2, 1],
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            ease: "easeInOut",
                                                        }}
                                                        className="w-3 h-3 rounded-full"
                                                        style={{ backgroundColor: testimonials[activeTestimonial].color }}
                                                    />
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>

                                        {/* Navigation and Dots */}
                                        <div className="flex items-center justify-between mt-8 pt-8 border-t border-[#ffffff]/10">
                                            {/* Dots */}
                                            <div className="flex gap-2">
                                                {testimonials.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => setActiveTestimonial(index)}
                                                        className="group relative"
                                                    >
                                                        <motion.div
                                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeTestimonial
                                                                ? "bg-[#ff6500] w-8"
                                                                : "bg-[#ffffff]/20 group-hover:bg-[#ffffff]/40"
                                                                }`}
                                                            whileHover={{ scale: 1.2 }}
                                                        />
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Navigation Buttons */}
                                            <div className="flex gap-2">
                                                <motion.button
                                                    onClick={prevTestimonial}
                                                    whileHover={{ scale: 1.1, x: -2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="p-3 rounded-xl bg-[#ff6500]/10 border border-[#ff6500]/20 text-[#ff6500] hover:bg-[#ff6500]/20 transition-colors"
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                </motion.button>
                                                <motion.button
                                                    onClick={nextTestimonial}
                                                    whileHover={{ scale: 1.1, x: 2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="p-3 rounded-xl bg-[#ff6500]/10 border border-[#ff6500]/20 text-[#ff6500] hover:bg-[#ff6500]/20 transition-colors"
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
