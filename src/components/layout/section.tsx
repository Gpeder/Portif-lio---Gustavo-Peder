import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  description?: string | ReactNode;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, description, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 border-b border-border ${className}`}>
      <div className="container mx-auto px-6">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
            {description && (
              <div className="text-muted-foreground text-lg max-w-3xl">
                {description}
              </div>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

