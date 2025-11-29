'use client';
import { motion } from 'motion/react';
import { MessageSquare, TrendingUp, Zap, Users, Target, Briefcase } from 'lucide-react';

const icons = [
    { Icon: MessageSquare, x: '5%', y: '15%', delay: 0, size: 40 },
    { Icon: TrendingUp, x: '90%', y: '20%', delay: 1, size: 35 },
    { Icon: Zap, x: '8%', y: '70%', delay: 2, size: 45 },
    { Icon: Users, x: '88%', y: '75%', delay: 1.5, size: 38 },
    { Icon: Target, x: '15%', y: '45%', delay: 0.5, size: 42 },
    { Icon: Briefcase, x: '85%', y: '50%', delay: 2.5, size: 36 },
];

export function FloatingIcons() {
    return (
        <div className="fixed inset-0 pointer-events-none">
            {icons.map((item, index) => (
                <motion.div
                    key={index}
                    className="absolute"
                    style={{
                        left: item.x,
                        top: item.y,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 6,
                        delay: item.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <item.Icon
                        size={item.size}
                        color="#ff6500"
                        strokeWidth={1.5}
                    />
                </motion.div>
            ))}
        </div>
    );
}
