'use client'
import { motion } from "motion/react";
import { Target, Eye, Heart, Users, TrendingUp, Lightbulb } from "lucide-react";

export function AboutUs() {
    const coreValues = [
        {
            icon: Users,
            title: "Client-Centricity",
            description: "Your goals guide every decision we make.",
        },
        {
            icon: Heart,
            title: "Partnership",
            description: "We walk the path with you, not ahead of you.",
        },
        {
            icon: TrendingUp,
            title: "Integrity",
            description: "Transparency and trust form the foundation of every engagement.",
        },
        {
            icon: Target,
            title: "Commitment to Excellence",
            description: "We deliver solutions that meet the highest professional standards.",
        },
        {
            icon: Lightbulb,
            title: "Courage, Vision & Transformation",
            description: "We help clients choose the bold path, see hidden opportunities, and achieve outcomes beyond the obvious.",
        },
    ];

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
        <section id="about" className="relative py-24 px-6 overflow-hidden bg-[#000000]">
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

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "4rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1 bg-gradient-to-r from-[#ff6500] to-[#f68e1e] mx-auto mb-6"
                    />
                    <h2 className="text-[#ffffff] mb-4">ABOUT US</h2>
                </motion.div>

                {/* Who We Are */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="mb-24"
                >
                    <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
                        <h3 className="text-[#ff6500] mb-6">Who We Are</h3>
                        <div className="space-y-4 text-[#ffffff]/80">
                            <p>
                                Foundation Business Consultancy (FBC) is a professional services firm dedicated to helping businesses turn uncertainty into opportunity. Through expert company formation, accounting, tax, audit, and advisory solutions, we guide organizations from initial concept through long-term growth.
                            </p>
                            <p>
                                We partner with startups, SMEs, and international companies looking to establish or expand their operations in the UAE, Saudi Arabia, and other key markets. Our commitment is simple: understand your vision, align our expertise, and build a foundation for sustainable prosperity.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Mission & Vision */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="grid md:grid-cols-2 gap-8 mb-24"
                >
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="relative p-8 rounded-2xl bg-gradient-to-br from-[#2f3032] to-[#000000] border border-[#ff6500]/20 overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6500]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 rounded-lg bg-[#ff6500]/10">
                                    <Target className="w-6 h-6 text-[#ff6500]" />
                                </div>
                                <h3 className="text-[#ff6500]">Our Mission</h3>
                            </div>
                            <p className="text-[#ffffff]/80">
                                At FBC, our mission is to empower startups, SMEs, and international companies by delivering expert company formation, consulting, tax, and audit services. We are committed to understanding our clients' unique visions and turning them into reality through tailored, high-quality solutions that drive sustainable growth.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="relative p-8 rounded-2xl bg-gradient-to-br from-[#2f3032] to-[#000000] border border-[#f68e1e]/20 overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#f68e1e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 rounded-lg bg-[#f68e1e]/10">
                                    <Eye className="w-6 h-6 text-[#f68e1e]" />
                                </div>
                                <h3 className="text-[#f68e1e]">Our Vision</h3>
                            </div>
                            <p className="text-[#ffffff]/80">
                                To be the most trusted partner for businesses seeking growth and success in the UAE—transforming visionary ideas into lasting achievements through expert guidance and strategic support.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Core Values */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="mb-24"
                >
                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <h3 className="text-[#ffffff] mb-2">Core Values</h3>
                        <p className="text-[#ffffff]/60">The principles that guide everything we do</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                className="relative p-6 rounded-xl bg-[#2f3032] border border-[#ffffff]/5 overflow-hidden group cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6500]/10 via-transparent to-[#f68e1e]/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6500] to-[#f68e1e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                <div className="relative z-10">
                                    <div className="mb-4 inline-block p-3 rounded-lg bg-[#ff6500]/10 group-hover:bg-[#ff6500]/20 transition-colors duration-300">
                                        <value.icon className="w-6 h-6 text-[#ff6500]" />
                                    </div>
                                    <h4 className="text-[#ffffff] mb-2">{value.title}</h4>
                                    <p className="text-[#ffffff]/70">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Brand Essence */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="relative"
                >
                    <motion.div
                        variants={itemVariants}
                        className="relative p-12 rounded-3xl bg-gradient-to-br from-[#ff6500] to-[#f68e1e] overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffffff] rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#000000] rounded-full blur-3xl" />
                        </div>
                        <div className="relative z-10 max-w-4xl mx-auto text-center">
                            <h3 className="text-[#ffffff] mb-6">Brand Essence</h3>
                            <div className="space-y-4">
                                <p className="text-[#ffffff] text-xl">
                                    We empower courageous entrepreneurs—those who don't wait for opportunities but create them.
                                </p>
                                <p className="text-[#ffffff]/90 text-lg">
                                    Through clear strategies and smart financial guidance, we transform complexity into clarity and vision into momentum.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
