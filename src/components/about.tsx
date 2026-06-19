import { motion } from 'motion/react';
import Section from './layout/section';
import { aboutData } from '../data/about_items';

export default function About() {
    return (
        <Section
            id={aboutData.id_secao}
            title={aboutData.titulo_secao}
            description={aboutData.descricao}
        >
            <motion.div
                className="max-w-3xl space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <p className="text-foreground/80 leading-relaxed text-lg">
                    {aboutData.paragrafo_1}
                </p>
                <p className="text-foreground/80 leading-relaxed text-lg">
                    {aboutData.paragrafo_2}
                </p>

                <div className="pt-2">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium">
                        Stack principal
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        {aboutData.stack_principal.map((tech) => (
                            <div
                                key={tech.nome}
                                className="flex flex-col items-center gap-1.5 py-3 bg-card border border-border rounded-lg hover:border-accent/40 transition-colors duration-200"
                            >
                                <img
                                    src={`https://cdn.simpleicons.org/${tech.slug}/E8E6E1`}
                                    alt={tech.nome}
                                    className="w-5 h-5"
                                    loading="lazy"
                                />
                                <span className="text-xs text-muted-foreground text-center leading-tight">
                                    {tech.nome}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
