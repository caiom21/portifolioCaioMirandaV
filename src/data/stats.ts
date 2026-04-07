export interface Stat {
  value:   number;
  suffix:  string;
  prefix:  string;
  label:   string;
}

export const stats: Stat[] = [
  { value: 5,  suffix: '+',      prefix: '', label: 'Projetos entregues'    },
  { value: 95, suffix: '+',      prefix: '', label: 'Lighthouse score'      },
  { value: 60, suffix: '%',      prefix: '', label: 'Redução de load time'  },
  { value: 17, suffix: '',       prefix: '', label: 'Versões iteradas (bot)' },
  { value: 85, suffix: '%',      prefix: '', label: 'Cobertura de testes'   },
  { value: 1,  suffix: 'ª pág',  prefix: '', label: 'Google SEO'            },
];
