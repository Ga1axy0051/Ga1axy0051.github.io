export interface ResearchExperience {
  institution: string;
  role: string;
  mode?: string;
  dates: string;
  advisor: string;
  advisorInstitution?: string;
  description: string;
  themes: string[];
  current?: boolean;
}

export const researchExperiences: ResearchExperience[] = [
  {
    institution: 'Shanghai Qi Zhi Institute',
    role: 'Full-time Researcher',
    mode: 'On-site',
    dates: 'Jul 2026 – Jan 2027',
    advisor: 'Prof. Huazhe Xu',
    advisorInstitution: 'Tsinghua University',
    description:
      'Conducting full-time research in robot learning and embodied intelligence, with access to physical robot platforms and real-world experimental environments.',
    themes: [
      'Generative robot policies',
      'Action representation',
      'Temporal modeling',
      'Stochastic and noise modeling',
      'Reinforcement learning',
      'Imitation learning',
      'Real-world manipulation',
    ],
    current: true,
  },
  {
    institution: 'Prof. Zhao Kang’s Research Group, UESTC',
    role: 'Undergraduate Researcher',
    dates: 'Jul 2025 – Jun 2026',
    advisor: 'Prof. Zhao Kang',
    description:
      'Studied parameter-efficient adaptation and evaluation for graph learning, leading to the two works listed below.',
    themes: [
      'Graph representation learning',
      'Parameter-efficient graph adaptation',
      'Graph prompting',
      'Optimal transport',
      'Intrinsic graph geometry',
      'Curvature-aware relational learning',
      'Systematic ML benchmarking',
    ],
  },
];
