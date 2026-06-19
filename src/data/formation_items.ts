import type { AcademicItem, CursoItem, IdiomaItem } from '@/types/portifolio';
import portfolioData from '@/data/portfolio_config.json';

export const academica: AcademicItem[] = portfolioData.formacao.academica;
export const cursos_intensivos: CursoItem[] = portfolioData.formacao.cursos_intensivos;
export const idiomas: IdiomaItem[] = portfolioData.formacao.idiomas;
