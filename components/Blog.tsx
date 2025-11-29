'use client';
import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, FileText, Search } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function Blog() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const blogPosts = [
        {
            id: 1,
            title: "Understanding UAE Tax Compliance in 2024",
            excerpt: "Navigate the latest tax regulations and compliance requirements for businesses operating in the UAE.",
            image: "https://images.unsplash.com/photo-1762152212840-3ec91c031d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBwbGFubmluZyUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjQzNDEzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "Tax",
            date: "Nov 15, 2024",
            readTime: "5 min read",
            color: "#ff6500",
        },
        {
            id: 2,
            title: "Starting Your Business in Dubai: Complete Guide",
            excerpt: "Everything you need to know about company formation, licensing, and getting started in the UAE market.",
            image: "https://images.unsplash.com/photo-1733826544831-ad71d05c8423?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBmb3JtYXRpb24lMjBzdGFydHVwfGVufDF8fHx8MTc2NDM4NDgxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "Formation",
            date: "Nov 10, 2024",
            readTime: "8 min read",
            color: "#f68e1e",
        },
        {
            id: 3,
            title: "CFO Services: When Does Your Startup Need One?",
            excerpt: "Discover the right time to bring in CFO expertise and how it can transform your financial strategy.",
            image: "https://images.unsplash.com/photo-1762319007311-31597c44aad8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFjY291bnRpbmclMjBmaW5hbmNlfGVufDF8fHx8MTc2NDM4NDgxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "Advisory",
            date: "Nov 5, 2024",
            readTime: "6 min read",
            color: "#ff6500",
        },
        {
            id: 4,
            title: "Audit Preparation: Essential Checklist for UAE Businesses",
            excerpt: "Prepare your business for a smooth audit process with our comprehensive checklist and expert tips.",
            image: "https://images.unsplash.com/photo-1753955900083-b62ee8d97805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGF1ZGl0JTIwY29tcGxpYW5jZXxlbnwxfHx8fDE3NjQzODQ4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "Audit",
            date: "Oct 28, 2024",
            readTime: "7 min read",
            color: "#f68e1e",
        },
        {
            id: 5,
            title: "Strategic Financial Planning for Growth",
            excerpt: "Learn how strategic financial planning can accelerate your business growth and improve profitability.",
            image: "https://images.unsplash.com/photo-1744473755637-e09f0c2fab41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBncm93dGglMjBjaGFydHxlbnwxfHx8fDE3NjQzMjE1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "Advisory",
            date: "Oct 20, 2024",
            readTime: "5 min read",
            color: "#ff6500",
        },
        {
            id: 6,
            title: "Bookkeeping Best Practices for SMEs",
            excerpt: "Master the fundamentals of bookkeeping and maintain accurate financial records for your business.",
            image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc2NDM3MjY3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            category: "Accounting",
            date: "Oct 15, 2024",
            readTime: "4 min read",
            color: "#f68e1e",
        },
    ];

    const categories = ["All", "Tax", "Formation", "Advisory", "Audit", "Accounting"];

    const filteredPosts = selectedCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="blogs" className="pt-24 bg-[#000000] relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6500]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f68e1e]/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#ff6500]/20 to-[#f68e1e]/20 border border-[#ff6500]/30 mb-6"
                    >
                        <BookOpen className="w-4 h-4 text-[#ff6500]" />
                        <span className="text-[#ff6500]">Insights & Updates</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[#ffffff] mb-4"
                    >
                        Latest from FBC
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[#ffffff]/70 max-w-2xl mx-auto"
                    >
                        Expert insights, industry trends, and practical guidance for your business success
                    </motion.p>
                </div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-3 mb-16"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-full transition-all duration-300 ${selectedCategory === category
                                ? "bg-gradient-to-r from-[#ff6500] to-[#f68e1e] text-[#ffffff] shadow-lg shadow-[#ff6500]/20"
                                : "bg-[#2f3032] text-[#ffffff]/70 hover:bg-[#2f3032]/80 border border-[#ffffff]/10"
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Featured Post */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="mb-16"
                >
                    <motion.div
                        variants={itemVariants}
                        className="relative rounded-3xl overflow-hidden group cursor-pointer"
                        onMouseEnter={() => setHoveredCard(0)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="grid lg:grid-cols-2 gap-0 bg-gradient-to-br from-[#2f3032] to-[#000000] border border-[#ffffff]/10">
                            {/* Image Side */}
                            <div className="relative h-[400px] lg:h-auto overflow-hidden">
                                <motion.div
                                    animate={{
                                        scale: hoveredCard === 0 ? 1.1 : 1,
                                    }}
                                    transition={{ duration: 0.6 }}
                                    className="w-full h-full"
                                >
                                    <ImageWithFallback
                                        src={filteredPosts[0]?.image}
                                        alt={filteredPosts[0]?.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-transparent to-transparent opacity-60" />
                                </motion.div>

                                {/* Category Badge on Image */}
                                <div className="absolute top-6 left-6">
                                    <div className="px-4 py-2 rounded-full bg-[#ff6500]/90 backdrop-blur-sm border border-[#ff6500]/30">
                                        <span className="text-[#ffffff]">Featured</span>
                                    </div>
                                </div>

                                {/* Animated corner accent */}
                                <motion.div
                                    className="absolute bottom-6 right-6 w-16 h-16 border-2 border-[#ff6500] rounded-lg opacity-60"
                                    animate={{
                                        rotate: hoveredCard === 0 ? 180 : 0,
                                    }}
                                    transition={{ duration: 0.6 }}
                                />
                            </div>

                            {/* Content Side */}
                            <div className="p-10 lg:p-12 flex flex-col justify-center relative">
                                {/* Background gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6500]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    {/* Meta Info */}
                                    <div className="flex flex-wrap items-center gap-4 mb-6">
                                        <div className="px-3 py-1 rounded-full bg-[#ff6500]/10 border border-[#ff6500]/20">
                                            <span className="text-[#ff6500]">{filteredPosts[0]?.category}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[#ffffff]/60">
                                            <Calendar className="w-4 h-4" />
                                            <span>{filteredPosts[0]?.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[#ffffff]/60">
                                            <Clock className="w-4 h-4" />
                                            <span>{filteredPosts[0]?.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-[#ffffff] mb-4 group-hover:text-[#ff6500] transition-colors duration-300">
                                        {filteredPosts[0]?.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-[#ffffff]/80 mb-8 leading-relaxed">
                                        {filteredPosts[0]?.excerpt}
                                    </p>

                                    {/* Read More Button */}
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="inline-flex items-center gap-2 text-[#ff6500] group/btn"
                                    >
                                        <span>Read Full Article</span>
                                        <motion.div
                                            animate={{
                                                x: hoveredCard === 0 ? 5 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ArrowRight className="w-5 h-5" />
                                        </motion.div>
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Blog Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={containerVariants}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredPosts.slice(1).map((post, index) => (
                        <motion.article
                            key={post.id}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredCard(post.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className="group cursor-pointer"
                        >
                            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#2f3032] to-[#000000] border border-[#ffffff]/10 hover:border-[#ff6500]/30 transition-all duration-500 h-full flex flex-col">
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <motion.div
                                        animate={{
                                            scale: hoveredCard === post.id ? 1.1 : 1,
                                        }}
                                        transition={{ duration: 0.6 }}
                                        className="w-full h-full"
                                    >
                                        <ImageWithFallback
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent" />
                                    </motion.div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <div
                                            className="px-3 py-1 rounded-full backdrop-blur-sm border"
                                            style={{
                                                backgroundColor: `#00000040`,
                                                borderColor: `${post.color}40`
                                            }}
                                        >
                                            <span style={{ color: post.color }}>{post.category}</span>
                                        </div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredCard === post.id ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 bg-gradient-to-t from-[#ff6500]/60 to-transparent flex items-center justify-center"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: hoveredCard === post.id ? 1 : 0 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                            className="p-4 rounded-full bg-[#ffffff] text-[#ff6500]"
                                        >
                                            <ArrowRight className="w-6 h-6" />
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    {/* Meta */}
                                    <div className="flex items-center gap-4 mb-4 text-[#ffffff]/60">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h4 className="text-[#ffffff] mb-3 group-hover:text-[#ff6500] transition-colors duration-300 flex-1">
                                        {post.title}
                                    </h4>

                                    {/* Excerpt */}
                                    <p className="text-[#ffffff]/70 mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    {/* Read More Link */}
                                    <motion.div
                                        className="flex items-center gap-2 text-[#ff6500]"
                                        animate={{
                                            x: hoveredCard === post.id ? 5 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <span>Read More</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.div>
                                </div>

                                {/* Bottom Border Accent */}
                                <motion.div
                                    className="h-1"
                                    style={{ backgroundColor: post.color, transformOrigin: "left" }}
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: hoveredCard === post.id ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Load More Button */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-[#ff6500] to-[#f68e1e] text-[#ffffff] shadow-lg shadow-[#ff6500]/20 hover:shadow-[#ff6500]/40 transition-all duration-300 inline-flex items-center gap-2"
                    >
                        <FileText className="w-5 h-5" />
                        <span>View All Articles</span>
                    </motion.button>
                </motion.div> */}
            </div>
        </section>
    );
}
