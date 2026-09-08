export interface PublicationLink {
  label: 'Paper' | 'Code' | 'Project Page';
  href: string;
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  status: string;
  year?: string;
  secondaryStatus?: string;
  summary: string;
  links: PublicationLink[];
}

export const publications: Publication[] = [
  {
    title: 'Preserving Geometric Integrity in Graph Prompting via Measure-Constrained Optimal Transport',
    authors: ['Xiangyu Wang*', 'Shuo Wang*', 'Ruiyi Fang', 'Zhao Kang'],
    venue: 'IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)',
    status: 'Major Revision',
    year: '2026',
    summary: 'Graph prompting often makes locally plausible routing decisions that nevertheless collapse onto a small prompt bank globally. MINT uses fixed-marginal optimal transport to control prompt capacity while preserving semantic compatibility; a variance decomposition clarifies the resulting geometry, and complementary topology adaptation supports gains across homophilic and heterophilic benchmarks.',
    links: [],
  },
  {
    title: 'The Post-GCN Decade Revisited: Curvature-Stratified Evaluation of Relational Learning',
    authors: ['Shuo Wang*', 'Xiangyu Wang*', 'Quanxin Wang', 'Bailin Wu', 'Bokui Wang', 'Shunyang Huang', 'Boyan Deng', 'Haonan Liu', 'Ruiyi Fang', 'Zhenxiang Xu', 'Boyu Wang', 'Zhao Kang'],
    venue: 'NeurIPS 2026',
    status: 'Under Review',
    secondaryStatus: 'arXiv preprint',
    summary: 'This work asks how intrinsic graph geometry changes the evaluation of relational learning. Across 18 models and 14 datasets stratified by curvature, model rankings and trade-offs vary with geometric regime, showing how a flat leaderboard can hide meaningful structure.',
    links: [{ label: 'Paper', href: 'https://arxiv.org/abs/2606.06397' }],
  },
];
