export interface StackCategory {
  id:    string;
  label: string;
  items: string[];
}

export const stackCategories: StackCategory[] = [
  {
    id:    'frontend',
    label: 'FRONTEND',
    items: ['React', 'Next.js', 'Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Astro'],
  },
  {
    id:    'backend',
    label: 'BACKEND',
    items: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'Prisma ORM'],
  },
  {
    id:    'mobile',
    label: 'MOBILE',
    items: ['React Native', 'Expo'],
  },
  {
    id:    'automation',
    label: 'AUTOMAÇÃO & IA',
    items: ['n8n', 'Gemini API', 'REST APIs'],
  },
  {
    id:    'python',
    label: 'PYTHON & DATA',
    items: ['Pandas', 'TA-Lib', 'Freqtrade'],
  },
  {
    id:    'devops',
    label: 'DEVOPS',
    items: ['Docker', 'GitHub Actions', 'Linux', 'Git Flow'],
  },
];
