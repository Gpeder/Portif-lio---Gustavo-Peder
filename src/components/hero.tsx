import { motion } from 'motion/react';
import { Circle } from 'lucide-react';
import AnimatedBackground from './ui/animated_bg';
import { heroData } from '../data/hero_items';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative pt-20 md:pt-0 border-b border-border">
            <AnimatedBackground />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                {heroData.titulos.map((titulo, i) => (
                                    <span
                                        key={i}
                                        className={`block ${i === heroData.titulos.length - 1 ? 'text-primary' : ''}`}
                                    >
                                        {titulo}
                                    </span>
                                ))}
                            </h1>

                            {heroData.disponivel && (
                                <div className="flex items-center gap-2 text-primary">
                                    <Circle size={12} className="fill-current animate-pulse" />
                                    <span className="text-sm">{heroData.disponivel_texto}</span>
                                </div>
                            )}

                            <p className="text-lg text-foreground/90 leading-relaxed max-w-xl">
                                {heroData.descricao.split(new RegExp(`(${heroData.destaques.join('|')})`)).map((parte, i) =>
                                    heroData.destaques.includes(parte) ? (
                                        <strong key={i} className="text-primary font-bold">{parte}</strong>
                                    ) : (
                                        <span key={i}>{parte}</span>
                                    )
                                )}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 flex items-center justify-center">
                                <div className="w-56 h-56 md:w-80 md:h-80 rounded-full bg-muted flex items-center justify-center text-6xl">
                                    🦊
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
