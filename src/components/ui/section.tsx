import * as React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function Section({ id, title, description, children, ...props }: SectionProps) {
  return (
    <section id={id} className="py-20 border-b border-border relative overflow-hidden" {...props}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display">{title}</h2>
          {description && (
            <p className="text-muted-foreground text-lg font-normal leading-relaxed">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
