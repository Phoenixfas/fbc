'use client'
import { motion } from "motion/react";
import { Target, Eye, Heart, Users, TrendingUp, Lightbulb, Sparkles, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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

                {/* Mission */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="mb-24"
                >
                    <motion.div
                        variants={itemVariants}
                        className="relative rounded-3xl overflow-hidden"
                    >
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1758873269811-4e62e346b4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzY0MzE3MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Business Strategy"
                                className="w-full h-full object-cover"
                            />
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-[#000000]/85" />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#ff6500]/20 via-transparent to-[#f68e1e]/20" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-12 lg:p-20">
                            <div className="max-w-4xl">
                                {/* Icon and Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="flex items-center gap-4 mb-8"
                                >
                                    <div className="p-4 rounded-2xl bg-[#ff6500]/20 backdrop-blur-sm border border-[#ff6500]/30">
                                        <Target className="w-8 h-8 text-[#ff6500]" />
                                    </div>
                                    <div className="px-5 py-2 rounded-full bg-[#ff6500]/10 backdrop-blur-sm border border-[#ff6500]/20">
                                        <span className="text-[#ff6500]">Our Mission</span>
                                    </div>
                                </motion.div>

                                {/* Content Grid */}
                                <div className="grid md:grid-cols-3 gap-8">
                                    {/* Main Content */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="md:col-span-2 space-y-6"
                                    >
                                        <h3 className="text-[#ffffff]">
                                            Empowering Growth Through Expertise
                                        </h3>
                                        <p className="text-[#ffffff]/90 text-lg leading-relaxed">
                                            At FBC, our mission is to empower startups, SMEs, and international companies by delivering expert company formation, consulting, tax, and audit services. We are committed to understanding our clients' unique visions and turning them into reality through tailored, high-quality solutions that drive sustainable growth.
                                        </p>
                                    </motion.div>

                                    {/* Stats/Highlights */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.5 }}
                                        className="space-y-6"
                                    >
                                        <div className="p-6 rounded-2xl bg-[#2f3032]/60 backdrop-blur-sm border border-[#ff6500]/20">
                                            <div className="text-[#ff6500] text-4xl mb-2">Expert</div>
                                            <div className="text-[#ffffff]/80">Formation & Consulting</div>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-[#2f3032]/60 backdrop-blur-sm border border-[#f68e1e]/20">
                                            <div className="text-[#f68e1e] text-4xl mb-2">Growth</div>
                                            <div className="text-[#ffffff]/80">Sustainable Solutions</div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Bottom Features */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.7 }}
                                    className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-[#ffffff]/10"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-[#ff6500]/10 mt-1">
                                            <div className="w-2 h-2 rounded-full bg-[#ff6500]" />
                                        </div>
                                        <div>
                                            <div className="text-[#ffffff] mb-1">Expert Services</div>
                                            <div className="text-[#ffffff]/70">Company formation & consulting</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-[#f68e1e]/10 mt-1">
                                            <div className="w-2 h-2 rounded-full bg-[#f68e1e]" />
                                        </div>
                                        <div>
                                            <div className="text-[#ffffff] mb-1">Tailored Solutions</div>
                                            <div className="text-[#ffffff]/70">High-quality, customized approach</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-[#ff6500]/10 mt-1">
                                            <div className="w-2 h-2 rounded-full bg-[#ff6500]" />
                                        </div>
                                        <div>
                                            <div className="text-[#ffffff] mb-1">Sustainable Growth</div>
                                            <div className="text-[#ffffff]/70">Long-term success focus</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Decorative floating elements */}
                            <motion.div
                                className="absolute top-10 right-10 w-24 h-24 border border-[#ff6500]/20 rounded-full"
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute bottom-10 right-1/4 w-16 h-16 border border-[#f68e1e]/20 rounded-full"
                                animate={{
                                    y: [0, 20, 0],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                            />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Vision */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="mb-24"
                >
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Image Cards */}
                        <motion.div
                            variants={itemVariants}
                            className="lg:col-span-2 space-y-6"
                        >
                            {/* Top Image Card */}
                            <div className="relative rounded-2xl overflow-hidden h-64 group">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                    className="h-full"
                                >
                                    <ImageWithFallback
                                        src="https://images.unsplash.com/photo-1726533765275-a69cfd7f9897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBtb2Rlcm58ZW58MXx8fHwxNzY0Mjk1NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                        alt="Dubai Skyline"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#f68e1e]/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-[#f68e1e]" />
                                            <span className="text-[#ffffff]">Growth in UAE</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Bottom Stat Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    className="p-6 rounded-2xl bg-gradient-to-br from-[#2f3032] to-[#000000] border border-[#f68e1e]/20"
                                >
                                    <Eye className="w-8 h-8 text-[#f68e1e] mb-3" />
                                    <div className="text-[#ffffff]/60 mb-1">Vision</div>
                                    <div className="text-[#ffffff]">Transform Ideas</div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    className="p-6 rounded-2xl bg-gradient-to-br from-[#2f3032] to-[#000000] border border-[#ff6500]/20"
                                >
                                    <Target className="w-8 h-8 text-[#ff6500] mb-3" />
                                    <div className="text-[#ffffff]/60 mb-1">Goal</div>
                                    <div className="text-[#ffffff]">Lasting Impact</div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Content Side */}
                        <motion.div
                            variants={itemVariants}
                            className="lg:col-span-3 flex flex-col justify-center"
                        >
                            <div className="p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[#2f3032] to-[#000000] border border-[#ffffff]/10 relative overflow-hidden">
                                {/* Background decoration */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#f68e1e]/5 rounded-full blur-3xl" />

                                <div className="relative z-10">
                                    {/* Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f68e1e]/10 border border-[#f68e1e]/20 mb-6"
                                    >
                                        <Eye className="w-4 h-4 text-[#f68e1e]" />
                                        <span className="text-[#f68e1e]">Our Vision</span>
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="text-[#ffffff] mb-6"
                                    >
                                        Your Most Trusted Partner
                                    </motion.h3>

                                    {/* Description */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="text-[#ffffff]/90 text-lg leading-relaxed mb-8"
                                    >
                                        To be the most trusted partner for businesses seeking growth and success in the UAE—transforming visionary ideas into lasting achievements through expert guidance and strategic support.
                                    </motion.p>

                                    {/* Features List */}
                                    <div className="space-y-4">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.5 }}
                                            className="flex items-start gap-4 p-4 rounded-xl bg-[#f68e1e]/5 border border-[#f68e1e]/10 hover:border-[#f68e1e]/30 transition-colors"
                                        >
                                            <div className="p-2 rounded-lg bg-[#f68e1e]/10 mt-1">
                                                <TrendingUp className="w-5 h-5 text-[#f68e1e]" />
                                            </div>
                                            <div>
                                                <div className="text-[#ffffff] mb-1">Most Trusted Partner</div>
                                                <div className="text-[#ffffff]/70">Building lasting relationships in the UAE market</div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.6 }}
                                            className="flex items-start gap-4 p-4 rounded-xl bg-[#ff6500]/5 border border-[#ff6500]/10 hover:border-[#ff6500]/30 transition-colors"
                                        >
                                            <div className="p-2 rounded-lg bg-[#ff6500]/10 mt-1">
                                                <Lightbulb className="w-5 h-5 text-[#ff6500]" />
                                            </div>
                                            <div>
                                                <div className="text-[#ffffff] mb-1">Transform Visionary Ideas</div>
                                                <div className="text-[#ffffff]/70">Turning bold visions into measurable achievements</div>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: 0.7 }}
                                            className="flex items-start gap-4 p-4 rounded-xl bg-[#f68e1e]/5 border border-[#f68e1e]/10 hover:border-[#f68e1e]/30 transition-colors"
                                        >
                                            <div className="p-2 rounded-lg bg-[#f68e1e]/10 mt-1">
                                                <Users className="w-5 h-5 text-[#f68e1e]" />
                                            </div>
                                            <div>
                                                <div className="text-[#ffffff] mb-1">Expert Guidance & Support</div>
                                                <div className="text-[#ffffff]/70">Strategic partnership throughout your journey</div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Decorative corner */}
                                <div className="absolute bottom-0 right-0 w-40 h-40 border-r border-b border-[#f68e1e]/20 rounded-tl-full" />
                            </div>
                        </motion.div>
                    </div>
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
                        className="relative rounded-3xl overflow-hidden bg-[#2f3032] border border-[#ffffff]/10"
                    >
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Image Side */}
                            <div className="relative h-[500px] lg:h-auto overflow-hidden group">
                                <motion.div
                                    className="absolute inset-0"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    <ImageWithFallback
                                        src="https://images.unsplash.com/photo-1629124096127-ab7629761f4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN1Y2Nlc3MlMjBlbnRyZXByZW5ldXJ8ZW58MXx8fHwxNzY0MzgwMzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                        alt="Business Success"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-transparent to-transparent lg:opacity-80" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent" />
                                </motion.div>

                                {/* Animated accent elements */}
                                <motion.div
                                    className="absolute top-8 left-8 w-20 h-20 border-2 border-[#ff6500] rounded-full opacity-60"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.6, 0.3, 0.6],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                                <motion.div
                                    className="absolute bottom-12 right-12 w-16 h-16 border-2 border-[#f68e1e] rounded-full opacity-60"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.6, 0.3, 0.6],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1,
                                    }}
                                />
                            </div>

                            {/* Content Side */}
                            <div className="relative p-12 lg:p-16 flex flex-col justify-center">
                                {/* Background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6500]/5 to-[#f68e1e]/5" />

                                <div className="relative z-10">
                                    {/* Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff6500]/20 to-[#f68e1e]/20 border border-[#ff6500]/30 mb-6"
                                    >
                                        <Sparkles className="w-4 h-4 text-[#ff6500]" />
                                        <span className="text-[#ff6500]">Brand Essence</span>
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="text-[#ffffff] mb-6"
                                    >
                                        Empowering Courageous Entrepreneurs
                                    </motion.h3>

                                    {/* Content */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="space-y-6"
                                    >
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="p-2 rounded-lg bg-[#ff6500]/10">
                                                    <Zap className="w-5 h-5 text-[#ff6500]" />
                                                </div>
                                            </div>
                                            <p className="text-[#ffffff]/90 text-lg">
                                                We empower courageous entrepreneurs—those who don't wait for opportunities but create them.
                                            </p>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="p-2 rounded-lg bg-[#f68e1e]/10">
                                                    <Lightbulb className="w-5 h-5 text-[#f68e1e]" />
                                                </div>
                                            </div>
                                            <p className="text-[#ffffff]/90 text-lg">
                                                Through clear strategies and smart financial guidance, we transform complexity into clarity and vision into momentum.
                                            </p>
                                        </div>

                                        {/* Decorative line */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.6 }}
                                            className="h-px bg-gradient-to-r from-[#ff6500] via-[#f68e1e] to-transparent mt-8"
                                        />

                                        {/* Stats or highlights */}
                                        <div className="grid grid-cols-2 gap-6 mt-8">
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.7 }}
                                            >
                                                <div className="text-[#ff6500] text-3xl mb-1">Vision</div>
                                                <div className="text-[#ffffff]/70">
                                                    Transform ideas into achievements
                                                </div>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.8 }}
                                            >
                                                <div className="text-[#f68e1e] text-3xl mb-1">Action</div>
                                                <div className="text-[#ffffff]/70">
                                                    Create momentum that matters
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Corner accent */}
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#ff6500]/10 to-transparent rounded-tl-full" />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
