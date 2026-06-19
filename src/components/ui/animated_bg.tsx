import { motion } from 'motion/react';

export default function AnimatedBackground() {
    const particles = Array.from({ length: 20 });

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/30 rounded-full"
                    initial={{
                        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                    }}
                    animate={{
                        x: [
                            Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                        ],
                        y: [
                            Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                            Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                            Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                        ],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        </div>
    );
}
