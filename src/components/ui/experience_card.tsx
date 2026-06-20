import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardContent } from "@/components/ui/card";
import type { ExperienceItem } from '@/types/portifolio';


export default function ProfessionalExperienceCard({
  years,
  company,
  role,
  description,
  tecnologias,
}: ExperienceItem) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>

      <Card className="border border-border bg-card rounded-lg hover:border-primary/50 transition-all group">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
            <Calendar size={16} />
            <span>{years}</span>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <Briefcase className="text-primary mt-1 flex-shrink-0" size={20} />
            <div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {role}
              </h3>
              <p className="text-muted-foreground">{company}</p>
            </div>
          </div>

          <p className="text-foreground/90 mb-4 leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tecnologias.map((tech) => (
              <span key={tech} className="px-3 py-1 text-accent text-sm rounded-md bg-accent-soft">
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
