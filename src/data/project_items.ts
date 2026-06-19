import type { ProjectItem } from "@/types/portifolio";

export const projetos: ProjectItem[] = [
  {
    name: "E-commerce Moderno",
    description: "Plataforma completa de e-commerce com painel administrativo e integração com gateway de pagamento.",
    overview: "Uma solução completa de e-commerce desenvolvida do zero, focada em performance e experiência do usuário. O projeto inclui painel administrativo para gestão de produtos, pedidos e clientes, além de integração com gateway de pagamento Stripe para transações seguras.",
    tecnologias: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS", "JWT"],
    features: [
      "Painel administrativo completo com dashboard de métricas",
      "Carrinho de compras com persistência de sessão",
      "Integração com Stripe para pagamentos seguros",
      "Sistema de autenticação JWT com refresh tokens",
      "Gestão de estoque em tempo real",
      "Relatórios de vendas exportáveis em CSV/PDF",
    ],
    link_projeto: "https://exemplo.com",
    link_github: "https://github.com/usuario/projeto",
    status: "Em produção",
    screenshots: [
      "https://images.unsplash.com/photo-1757301714935-c8127a21abc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGludGVyZmFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3ODE3ODI4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1674027392838-d85710a5121d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGludGVyZmFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3ODE3ODI4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    name: "Dashboard Analytics",
    description: "Dashboard interativo para visualização de dados em tempo real com gráficos e métricas personalizáveis.",
    overview: "Plataforma de analytics com visualização de dados em tempo real, desenvolvida para equipes de marketing e produto. Suporta múltiplas fontes de dados e oferece relatórios automatizados configuráveis por período.",
    tecnologias: ["Vue.js", "TypeScript", "Chart.js", "Firebase", "Pinia", "Vite"],
    features: [
      "Gráficos interativos com zoom e filtros por período",
      "Atualizações em tempo real via WebSocket",
      "Widgets de métricas arrastáveis e redimensionáveis",
      "Exportação de relatórios em PDF e Excel",
      "Alertas configuráveis por threshold",
      "Modo claro/escuro com preferência salva",
    ],
    link_projeto: "https://exemplo.com",
    link_github: "https://github.com/usuario/projeto",
    status: "Concluído",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHAlMjBkYXNoYm9hcmQlMjB1aSUyMGRhcmt8ZW58MXx8fHwxNzgxNzgyODI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1720962158813-29b66b8e23e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3ZWIlMjBhcHAlMjBkYXNoYm9hcmQlMjB1aSUyMGRhcmt8ZW58MXx8fHwxNzgxNzgyODI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1625838144804-300f3907c110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3ZWIlMjBhcHAlMjBkYXNoYm9hcmQlMjB1aSUyMGRhcmt8ZW58MXx8fHwxNzgxNzgyODI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    name: "App de Produtividade",
    description: "Aplicativo mobile para gerenciamento de tarefas com sincronização em nuvem e notificações push.",
    overview: "Aplicativo mobile cross-platform focado em produtividade pessoal e colaboração em equipe. Utiliza metodologia GTD (Getting Things Done) adaptada com suporte a projetos, tags e prioridades.",
    tecnologias: ["React Native", "Redux", "Firebase", "Expo", "TypeScript"],
    features: [
      "Gerenciamento de tarefas com sub-tarefas e dependências",
      "Sincronização em tempo real entre dispositivos",
      "Notificações push agendadas e por geolocalização",
      "Modo offline com sync automático ao reconectar",
      "Relatório semanal de produtividade por email",
      "Integração com Google Calendar e Notion",
    ],
    link_projeto: "",
    link_github: "https://github.com/usuario/projeto",
    status: "Em desenvolvimento",
    screenshots: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBwcm9kdWN0aXZpdHklMjBzY3JlZW58ZW58MXx8fHwxNzgxNzgyODMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2JpbGUlMjBhcHAlMjBwcm9kdWN0aXZpdHklMjBzY3JlZW58ZW58MXx8fHwxNzgxNzgyODMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
];
