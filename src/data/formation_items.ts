import type { AcademicItem, CursoItem, IdiomaItem } from '@/types/portifolio';

export const academica: AcademicItem[] = [
    {
        tipo: "Bacharelado",
        curso: "Ciência da Computação",
        instituicao: "Universidade Federal de São Paulo (UNIFESP)",
    },
    {
        tipo: "Técnico",
        curso: "Desenvolvimento de Sistemas",
        instituicao: "ETEC - Escola Técnica Estadual",
    },
];

export const cursos_intensivos: CursoItem[] = [
    {
        nome: "Formação React Developer",
        carga_horaria: "120h",
    },
    {
        nome: "Bootcamp Full Stack JavaScript",
        carga_horaria: "500h",
    },
    {
        nome: "AWS Cloud Practitioner",
        carga_horaria: "40h",
    },
    {
        nome: "UI/UX Design Fundamentals",
        carga_horaria: "60h",
    },
];

export const idiomas: IdiomaItem[] = [
    {
        idioma: "Português",
        nivel: "Nativo",
    },
    {
        idioma: "Inglês",
        nivel: "Avançado",
    },
    {
        idioma: "Espanhol",
        nivel: "Intermediário",
    },
];
