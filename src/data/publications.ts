export interface PublicationLink {
  label: 'Paper' | 'Code' | 'Project Page';
  href: string;
}

export interface Publication {
  title: string;
  authors: string[];
  equalContribution: string[];
  venue: string;
  status: string;
  year?: string;
  secondaryStatus?: string;
  summary: string;
  details: string[];
  links: PublicationLink[];
}

export const publications: Publication[] = [
  {
    title: 'Preserving Geometric Integrity in Graph Prompting via Measure-Constrained Optimal Transport',
    authors: ['Xiangyu Wang*', 'Shuo Wang*', 'Ruiyi Fang', 'Zhao Kang'],
    equalContribution: ['Xiangyu Wang*', 'Shuo Wang*'],
    venue: 'IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)',
    status: 'Major Revision',
    year: '2026',
    summary:
      'Identifies graph-wide prompt allocation as an under-modeled problem in graph prompting and introduces MINT, a measure-constrained optimal transport framework that globally couples node-to-prompt assignments through fixed marginals while preserving local semantic compatibility.',
    details: [
      'Exact variance decomposition connecting prompt allocation, prompt geometry, and barycentric mixing',
      'Complementary topology adaptation',
      'Evaluation across homophilic and heterophilic benchmarks for few-shot graph adaptation',
    ],
    links: [],
  },
  {
    title: 'The Post-GCN Decade Revisited: Curvature-Stratified Evaluation of Relational Learning',
    authors: [
      'Shuo Wang*',
      'Xiangyu Wang*',
      'Quanxin Wang',
      'Bailin Wu',
      'Bokui Wang',
      'Shunyang Huang',
      'Boyan Deng',
      'Haonan Liu',
      'Ruiyi Fang',
      'Zhenxiang Xu',
      'Boyu Wang',
      'Zhao Kang',
    ],
    equalContribution: ['Shuo Wang*', 'Xiangyu Wang*'],
    venue: 'NeurIPS 2026',
    status: 'Under Review',
    secondaryStatus: 'arXiv preprint',
    summary:
      'Studies intrinsic graph geometry as a latent factor behind model performance and introduces curvature-stratified evaluation across positive, negative, and near-zero curvature regimes.',
    details: [
      '14 datasets and 18 representative models',
      'Geometry-dependent model rankings and performance trade-offs',
      'Evidence of the limitations of conventional flat leaderboards',
    ],
    links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2606.06397' }],
  },
];
