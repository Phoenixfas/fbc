'use client'
import { motion } from "motion/react";
import { useState } from "react";
import {
    Building2,
    DollarSign,
    BookOpen,
    Receipt,
    Shield,
    Lightbulb,
    FileText,
    ChevronRight,
    Check,
} from "lucide-react";

export function Services() {
    const [expandedService, setExpandedService] = useState<number | null>(null);

    const services = [
        {
            icon: Building2,
            title: "Company Formation",
            subtitle: "Build your business on a solid foundation with seamless, compliant, and strategic setup solutions.",
            color: "#ff6500",
            coverage: [
                "UAE Freezones – Tailored packages with licensing, visas, and compliance support.",
                "UAE Mainland – Flexible structures for commercial, professional, and industrial licenses.",
                "Saudi Arabia (KSA) – Full setup guidance for foreign-owned and local entities.",
            ],
            services: [
                "Business structure selection",
                "Trade name registration",
                "Licensing & compliance",
                "Bank account assistance",
                "Visa services",
                "Ongoing PRO & government liaison support",
            ],
        },
        {
            icon: DollarSign,
            title: "CFO Services",
            subtitle: "Strategic financial leadership without the cost of a full-time executive.",
            color: "#f68e1e",
            services: [
                "Cash flow management",
                "Financial forecasting & modeling",
                "Budget planning",
                "Pricing & margin strategy",
                "Investment readiness & fundraising preparation",
                "Performance dashboards & reporting",
            ],
        },
        {
            icon: BookOpen,
            title: "Accounting & Bookkeeping",
            subtitle: "Accurate, compliant financial management that supports smart decision-making.",
            color: "#ff6500",
            services: [
                "Monthly bookkeeping",
                "Accounts payable/receivable",
                "Payroll management",
                "Financial statements",
                "VAT-compliant recordkeeping",
            ],
        },
        {
            icon: Receipt,
            title: "Tax Services",
            subtitle: "Ensure compliance while optimizing your tax position across all regulatory frameworks.",
            color: "#f68e1e",
            services: [
                "Corporate tax registration & filing",
                "VAT registration, filing & advisory",
                "Tax planning & structuring",
                "Tax audit support",
                "ESR & transfer pricing guidance",
            ],
        },
        {
            icon: Shield,
            title: "Audit Services",
            subtitle: "Independent assurance that builds trust and strengthens your financial credibility.",
            color: "#ff6500",
            services: [
                "External audit",
                "Internal audit & risk review",
                "Compliance audits",
                "Agreed-upon procedures",
                "Financial controls assessment",
            ],
        },
        {
            icon: Lightbulb,
            title: "Advisory Services",
            subtitle: "Clarity-driven strategies that move your business forward.",
            color: "#f68e1e",
            services: [
                "Business setup advisory",
                "Market entry strategy",
                "Feasibility studies",
                "Financial restructuring",
                "Performance improvement",
                "Operational and cost optimization",
            ],
        },
        {
            icon: FileText,
            title: "Business Support & PRO Services",
            subtitle: "A dedicated partner for all government, licensing, and compliance matters.",
            color: "#ff6500",
            services: [
                "Document clearing",
                "Government approvals",
                "Visa processing",
                "License renewals",
                "Regulatory updates & reminders",
            ],
        },
    ];

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
        <section id="services" className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#000000] to-[#2f3032]">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-40 right-1/4 w-72 h-72 bg-[#ff6500] rounded-full opacity-5 blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-40 left-1/4 w-72 h-72 bg-[#f68e1e] rounded-full opacity-5 blur-3xl"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
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
                    <h2 className="text-[#ffffff] mb-4">OUR SERVICES</h2>
                    <p className="text-[#ffffff]/70 max-w-2xl mx-auto">
                        Comprehensive solutions designed to guide your business from concept to sustained growth
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            onClick={() => setExpandedService(expandedService === index ? null : index)}
                            className="relative group cursor-pointer"
                        >
                            <div className="relative h-full p-8 rounded-2xl bg-[#2f3032] border border-[#ffffff]/5 overflow-hidden transition-all duration-500">
                                {/* Hover gradient overlay */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `linear-gradient(135deg, ${service.color}15, transparent)`,
                                    }}
                                />

                                {/* Top accent line */}
                                <div
                                    className="absolute top-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                                    style={{ backgroundColor: service.color }}
                                />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <motion.div
                                        className="mb-6 inline-flex p-4 rounded-xl transition-all duration-300"
                                        style={{
                                            backgroundColor: `${service.color}15`,
                                        }}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        <service.icon className="w-8 h-8" style={{ color: service.color }} />
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-[#ffffff] mb-3">{service.title}</h3>

                                    {/* Subtitle */}
                                    <p className="text-[#ffffff]/70 mb-4">{service.subtitle}</p>

                                    {/* Expand indicator */}
                                    <div className="flex items-center gap-2 text-sm" style={{ color: service.color }}>
                                        <span>View details</span>
                                        <ChevronRight
                                            className={`w-4 h-4 transition-transform duration-300 ${expandedService === index ? "rotate-90" : ""
                                                }`}
                                        />
                                    </div>

                                    {/* Expanded content */}
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{
                                            height: expandedService === index ? "auto" : 0,
                                            opacity: expandedService === index ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-6 mt-6 border-t border-[#ffffff]/10">
                                            {service.coverage && (
                                                <div className="mb-4">
                                                    <h5 className="text-[#ffffff] mb-3">Coverage:</h5>
                                                    <div className="space-y-2">
                                                        {service.coverage.map((item, i) => (
                                                            <div key={i} className="flex gap-2">
                                                                <div
                                                                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                                                    style={{ backgroundColor: service.color }}
                                                                />
                                                                <p className="text-[#ffffff]/70">{item}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            <div>
                                                <h5 className="text-[#ffffff] mb-3">
                                                    {service.coverage ? "What We Provide:" : "Services:"}
                                                </h5>
                                                <div className="space-y-2">
                                                    {service.services.map((item, i) => (
                                                        <div key={i} className="flex items-start gap-2">
                                                            <Check
                                                                className="w-4 h-4 mt-0.5 flex-shrink-0"
                                                                style={{ color: service.color }}
                                                            />
                                                            <span className="text-[#ffffff]/70">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-20 text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#ff6500] to-[#f68e1e] text-[#ffffff] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6500]/25"
                    >
                        Get Started Today
                    </motion.button>
                    <p className="mt-4 text-[#ffffff]/60">
                        Ready to build your foundation for success?
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
