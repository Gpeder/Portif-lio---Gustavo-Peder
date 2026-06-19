import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ProjectItem } from '@/types/portifolio';

interface ProjectModalProps {
    projeto: ProjectItem | null;
    onClose: () => void;
}

export default function ProjectModal({ projeto, onClose }: ProjectModalProps) {
    const [activeImg, setActiveImg] = useState(0);

    useEffect(() => {
        setActiveImg(0);
    }, [projeto]);

    useEffect(() => {
        if (!projeto) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [projeto, onClose]);

    const screenshots = projeto?.screenshots ?? [];
    const hasPrev = activeImg > 0;
    const hasNext = activeImg < screenshots.length - 1;

    return (
        <AnimatePresence>
            {projeto && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                    onClick={onClose}
                >
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

                    <motion.div
                        initial={{ opacity: 0, y: 32, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.97 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-3xl rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
                    >
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 rounded-full bg-black/40 hover:bg-black/60 border-none text-white"
                        >
                            <X size={18} />
                        </Button>

                        <div className="overflow-y-auto max-h-[90vh]" style={{ scrollbarWidth: 'thin' }}>

                            {screenshots.length > 0 && (
                                <div className="relative w-full aspect-video bg-secondary overflow-hidden rounded-t-2xl">
                                    <img
                                        src={screenshots[activeImg]}
                                        alt={`${projeto.name} screenshot ${activeImg + 1}`}
                                        className="w-full h-full object-cover"
                                    />

                                    {hasPrev && (
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => setActiveImg((i) => i - 1)}
                                            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 border-none text-white"
                                        >
                                            <ChevronLeft size={18} />
                                        </Button>
                                    )}
                                    {hasNext && (
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => setActiveImg((i) => i + 1)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 border-none text-white"
                                        >
                                            <ChevronRight size={18} />
                                        </Button>
                                    )}

                                    {screenshots.length > 1 && (
                                        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 px-4">
                                            {screenshots.map((src, i) => (
                                                <button
                                                    key={src}
                                                    onClick={() => setActiveImg(i)}
                                                    className={`w-12 h-8 rounded overflow-hidden border-2 transition-all ${i === activeImg ? 'border-accent opacity-100' : 'border-white/20 opacity-50 hover:opacity-80'
                                                        }`}
                                                >
                                                    <img src={src} alt={`${projeto.name} - screenshot ${i + 1}`} className="w-full h-full object-cover" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="p-6 md:p-8 space-y-6">
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h2 className="text-2xl md:text-3xl">{projeto.name}</h2>
                                            {projeto.status && (
                                                <span
                                                    className="px-3 py-1 text-xs rounded-full text-accent"
                                                    style={{ backgroundColor: 'var(--accent-soft)' }}
                                                >
                                                    {projeto.status}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-muted-foreground">{projeto.description}</p>
                                    </div>

                                    <div className="flex gap-3 shrink-0">
                                        {projeto.link_github && (
                                            <a
                                                href={projeto.link_github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={cn(
                                                    buttonVariants({ variant: 'outline' }),
                                                    'flex items-center gap-2 text-sm'
                                                )}
                                            >
                                                <svg
                                                    className="size-4"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                                </svg>
                                                Código
                                            </a>
                                        )}
                                        {projeto.link_projeto && (
                                            <a
                                                href={projeto.link_projeto}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={cn(
                                                    buttonVariants({ variant: 'default' }),
                                                    'flex items-center gap-2 text-sm bg-primary text-primary-foreground hover:bg-primary/95'
                                                )}
                                            >
                                                <ExternalLink size={16} />
                                                Ver projeto
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="border-t border-border" />

                                {projeto.overview && (
                                    <div>
                                        <h3 className="text-base mb-3 text-foreground/80 uppercase tracking-widest text-xs font-medium">Visão geral</h3>
                                        <p className="text-foreground/80 leading-relaxed">{projeto.overview}</p>
                                    </div>
                                )}

                                {projeto.features && projeto.features.length > 0 && (
                                    <div>
                                        <h3 className="text-base mb-3 text-foreground/80 uppercase tracking-widest text-xs font-medium">Funcionalidades</h3>
                                        <ul className="space-y-2">
                                            {projeto.features.map((f) => (
                                                <li key={f} className="flex items-start gap-3 text-foreground/80">
                                                    <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div>
                                    <h3 className="mb-3 text-foreground/80 uppercase tracking-widest text-xs font-medium">Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {projeto.tecnologias.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-sm rounded-md text-accent"
                                                style={{ backgroundColor: 'var(--accent-soft)' }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
