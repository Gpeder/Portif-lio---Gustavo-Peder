import { type ComponentType } from 'react';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './icons';

interface RedeSocial {
    plataforma: string;
    url: string;
    exibir_como: string;
}

interface ContactLinksProps {
    email: string;
    telefone: string;
    redes_sociais: RedeSocial[];
}

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
    GitHub: GithubIcon,
    LinkedIn: LinkedinIcon,
    Instagram: InstagramIcon,
};

export default function ContactLinks({ email, telefone, redes_sociais }: ContactLinksProps) {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
            >
                <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-4 p-4 border border-border bg-card rounded-lg hover:border-primary transition-all group"
                >
                    <Mail className="text-primary group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-foreground">{email}</span>
                </a>

                <a
                    href={`tel:${telefone.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 p-4 border border-border bg-card rounded-lg hover:border-primary transition-all group"
                >
                    <Phone className="text-primary group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-foreground">{telefone}</span>
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
            >
                {redes_sociais.map((rede) => {
                    const Icon = iconMap[rede.plataforma];
                    return (
                        <a
                            key={rede.plataforma}
                            href={rede.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 border border-border bg-card rounded-lg hover:border-primary transition-all group"
                        >
                            {Icon && <Icon className="text-primary group-hover:scale-110 transition-transform" size={24} />}
                            <span className="text-foreground">{rede.exibir_como}</span>
                        </a>
                    );
                })}
            </motion.div>
        </div>
    );
}
