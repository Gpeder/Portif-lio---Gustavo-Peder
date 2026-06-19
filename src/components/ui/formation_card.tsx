import { GraduationCap, BookOpen, Languages } from 'lucide-react';
import { motion } from 'motion/react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import type { FormationCardProps } from '@/types/portifolio';

export default function FormationCard({ academica, cursos_intensivos, idiomas }: FormationCardProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex"
      >
        <Card className="border border-border bg-card rounded-lg flex-1 flex flex-col">
          <CardHeader className="p-6 pb-4">
            <CardTitle className="flex items-center gap-3 text-lg font-bold">
              <GraduationCap className="text-primary" size={24} />
              <span>Formação Acadêmica</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0 flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              {academica.map((item) => (
                <div key={item.curso}>
                  <p className="text-muted-foreground text-sm mb-1">{item.tipo}</p>
                  <p className="font-medium mb-1">{item.curso}</p>
                  <p className="text-sm text-muted-foreground">{item.instituicao}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex"
      >
        <Card className="border border-border bg-card rounded-lg flex-1 flex flex-col">
          <CardHeader className="p-6 pb-4">
            <CardTitle className="flex items-center gap-3 text-lg font-bold">
              <BookOpen className="text-primary" size={24} />
              <span>Cursos Intensivos</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0 flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              {cursos_intensivos.map((curso) => (
                <div key={curso.nome}>
                  <p className="font-medium">{curso.nome}</p>
                  <p className="text-sm text-muted-foreground">{curso.carga_horaria}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex"
      >
        <Card className="border border-border bg-card rounded-lg flex-1 flex flex-col">
          <CardHeader className="p-6 pb-4">
            <CardTitle className="flex items-center gap-3 text-lg font-bold">
              <Languages className="text-primary" size={24} />
              <span>Idiomas</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0 flex-1 flex flex-col justify-between">
            <div className="space-y-3">
              {idiomas.map((idioma) => (
                <div key={idioma.idioma} className="flex justify-between items-center">
                  <p className="font-medium">{idioma.idioma}</p>
                  <p className="text-sm text-muted-foreground">{idioma.nivel}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
