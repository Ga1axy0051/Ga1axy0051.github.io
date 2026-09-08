export interface BackgroundEntry {
  institution: string;
  role: string;
  dates: string;
  meta?: string;
  description: string;
}

export const background: BackgroundEntry[] = [
  {
    institution: 'Shanghai Qi Zhi Institute',
    role: 'Full-time Researcher',
    dates: '2026.07 – 2027.01',
    meta: 'On-site · Advised by Prof. Huazhe Xu, Tsinghua University',
    description: 'Researching robot learning and embodied intelligence through physical robot platforms and real-world experiments.',
  },
  {
    institution: 'Prof. Zhao Kang’s Research Group, UESTC',
    role: 'Undergraduate Researcher',
    dates: '2025.07 – 2026.06',
    meta: 'Advised by Prof. Zhao Kang',
    description: 'Studied graph representation learning, graph prompting, optimal transport, and intrinsic graph geometry, leading to the two publications above.',
  },
  {
    institution: 'University of Electronic Science and Technology of China (UESTC)',
    role: 'B.E. in Computer Science and Technology',
    dates: '2024 – Present',
    meta: 'National “Everest Plan” Project',
    description: 'Undergraduate study in computer science and technology.',
  },
];
