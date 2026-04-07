export type ProjectCategory =
  | 'web'
  | 'mobile'
  | 'automation'
  | 'data'
  | 'fullstack';

export interface Project {
  id:          string;
  typeLabel:   string;
  title:       string;
  description: string;
  impact?:     string;
  tags:        string[];
  category:    ProjectCategory;
  accentColor: string;
  featured:    boolean;
  period:      string;
  links: {
    github?: string;
    demo?:   string;
  };
}

export const projects: Project[] = [
  {
    id:          'trading-bot',
    typeLabel:   'BOT · PYTHON',
    title:       'Trading Algorítmico',
    description: '17 versões de estratégias quantitativas para criptomoedas. Deploy containerizado, paper trading 24/7 na Kraken.',
    impact:      'ADX, MACD, RSI, VWAP implementados. Gestão de risco automatizada por ATR com stop-loss dinâmico.',
    tags:        ['PYTHON', 'FREQTRADE', 'DOCKER', 'TA-LIB', 'PANDAS'],
    category:    'data',
    accentColor: '#e8192c',
    featured:    true,
    period:      'Mar 2025 – presente',
    links: {
      github: 'https://github.com/caiom21/bot-trader',
    },
  },
  {
    id:          'ecommerce',
    typeLabel:   'WEB · REACT',
    title:       'E-commerce de Bordados',
    description: 'Lighthouse 95+, redução de 60% no tempo de carregamento, 85% de cobertura de testes em produção.',
    impact:      'CI/CD via GitHub Actions. Lazy loading, code splitting e otimização de assets.',
    tags:        ['REACT', 'NODE.JS', 'JEST', 'CYPRESS', 'GITHUB ACTIONS'],
    category:    'web',
    accentColor: '#3b82f6',
    featured:    true,
    period:      '2024',
    links: {
      github: 'https://github.com/caiom21/ponto-cruz-ecommerce',
    },
  },
  {
    id:          'gymapp',
    typeLabel:   'MOBILE · REACT NATIVE',
    title:       'AppGymCM',
    description: 'App de academia offline-first: funciona sem internet e sincroniza ao reconectar.',
    impact:      'Autenticação JWT, ORM Prisma, backend Node.js completo.',
    tags:        ['REACT NATIVE', 'EXPO', 'NODE.JS', 'PRISMA', 'JWT'],
    category:    'mobile',
    accentColor: '#8b5cf6',
    featured:    false,
    period:      '2024',
    links: {
      github: 'https://github.com/caiom21/AppGymCM',
    },
  },
  {
    id:          'pipeline',
    typeLabel:   'AUTOMAÇÃO · IA',
    title:       'Pipeline de Conteúdo com IA',
    description: 'Criação automatizada de Reels/Shorts com n8n + Gemini API para geração de roteiros.',
    impact:      'Integração com Pexels e Unsplash. Processamento de vídeo 9:16 com overlay dinâmico.',
    tags:        ['N8N', 'GEMINI API', 'REST APIS', 'AUTOMAÇÃO'],
    category:    'automation',
    accentColor: '#f59e0b',
    featured:    false,
    period:      '2024',
    links: {
      github: 'https://github.com/caiom21/reels_pipeline',
    },
  },
  {
    id:          'barbearia',
    typeLabel:   'WEB · NEXT.JS',
    title:       'Upper Cut Barbearia',
    description: 'Site institucional com sistema de agendamento. SEO técnico com resultado na 1ª página do Google.',
    tags:        ['NEXT.JS', 'TYPESCRIPT', 'TAILWIND', 'SEO'],
    category:    'web',
    accentColor: '#22c55e',
    featured:    false,
    period:      '2024',
    links: {
      github: 'https://github.com/caiom21/Upper-cut-barbearia',
    },
  },
];
