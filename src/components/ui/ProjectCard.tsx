import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import type { ProjectItem } from '@/types/portifolio';

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

interface ProjectCardProps extends ProjectItem {
  onClick: () => void;
}

export default function ProjectCard({
  name,
  description,
  tecnologias,
  link_projeto,
  link_github,
  screenshots,
  onClick,
}: ProjectCardProps) {
  const thumb = screenshots?.[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="cursor-pointer group"
    >
      <Card className="border border-border bg-card rounded-xl overflow-hidden hover:border-accent/40 transition-all pt-0">
        <div className="h-44 bg-secondary overflow-hidden relative">
          {thumb ? (
            <img
              src={thumb}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 text-5xl select-none">
              {'</>'}
            </div>
          )}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[5px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <div
              className="flex items-center gap-2 px-6 py-3 rounded-full text-base font-semibold text-accent"
              style={{ backgroundColor: 'var(--accent-soft)' }}
            >
              Ver detalhes <ArrowUpRight size={18} />
            </div>
          </div>
        </div>

        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-3 mb-2">
            <CardTitle className="text-lg font-normal group-hover:text-accent transition-colors leading-snug">
              {name}
            </CardTitle>
            <div className="flex gap-2 shrink-0 mt-0.5" onClick={(e) => e.stopPropagation()}>
              {link_github && (
                <a
                  href={link_github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <GithubIcon size={18} />
                </a>
              )}
              {link_projeto && (
                <a
                  href={link_projeto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          <CardDescription className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
            {description}
          </CardDescription>

          <div className="flex flex-wrap gap-2">
            {tecnologias.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-accent text-xs rounded-md"
                style={{ backgroundColor: 'var(--accent-soft)' }}
              >
                {tech}
              </span>
            ))}
            {tecnologias.length > 4 && (
              <span className="px-2.5 py-0.5 text-muted-foreground text-xs rounded-md bg-secondary">
                +{tecnologias.length - 4}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
