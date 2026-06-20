// items do projeto
export interface ProjectItem {
    name: string;
    description: string;
    overview: string;
    tecnologias: string[];
    features: string[];
    link_projeto: string;
    link_github: string;
    status: string;
    screenshots: string[];
}

// items experiência
export interface ExperienceItem {
    years: string;
    company: string;
    role: string;
    description: string;
    tecnologias: string[];
}

// Sub-itens detalhados da formação
export interface AcademicItem {
    tipo: string;
    curso: string;
    instituicao: string;
}

export interface CursoItem {
    nome: string;
    carga_horaria: string;
}

export interface IdiomaItem {
    idioma: string;
    nivel: string;
}

export interface FormationCardProps {
    academica: AcademicItem[];
    cursos_intensivos: CursoItem[];
    idiomas: IdiomaItem[];
}
