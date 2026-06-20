import { motion } from 'motion/react';

const w = window.innerWidth;
const h = window.innerHeight;

const PARTICLES = Array.from({ length: 20 }, () => ({
    initial: { x: Math.random() * w, y: Math.random() * h },
    animate: {
        x: [Math.random() * w, Math.random() * w, Math.random() * w],
        y: [Math.random() * h, Math.random() * h, Math.random() * h],
        opacity: [0, 1, 0],
    },
    duration: Math.random() * 10 + 10,
}));

export default function AnimatedBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {PARTICLES.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/30 rounded-full"
                    initial={p.initial}
                    animate={p.animate}
                    transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
                />
            ))}

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        </div>
    );
}
