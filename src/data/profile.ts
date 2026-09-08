export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
  identity?: boolean;
}

export const profile = {
  formalName: 'Xiangyu Wang',
  displayName: 'Xiangyu (Xavier) Wang',
  title: 'Undergraduate researcher working on robot learning and embodied intelligence.',
  email: 'xy.texwang.cs@gmail.com',
  biography: [
    'I am an undergraduate at the University of Electronic Science and Technology of China (UESTC), currently conducting full-time, on-site research at Shanghai Qi Zhi Institute. Advised by Prof. Huazhe Xu of Tsinghua University, I work on robot learning and embodied intelligence with physical robots and real-world experimentation.',
    'Previously, I worked with Prof. Zhao Kang at UESTC on graph machine learning, graph prompting, optimal transport, and intrinsic graph geometry. This research led to a TPAMI paper at Major Revision and a NeurIPS 2026 submission currently under review.',
    'My current interests include generative robot policies, action representation, temporal modeling, reinforcement and imitation learning, and learning through real-world interaction.',
  ],
  currentPosition: {
    institution: 'Shanghai Qi Zhi Institute',
    role: 'Full-time',
    mode: 'On-site',
    advisor: 'Prof. Huazhe Xu',
    advisorInstitution: 'Tsinghua University',
  },
  links: [
    { label: 'Email', href: 'mailto:xy.texwang.cs@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/Ga1axy0051', external: true, identity: true },
    { label: 'CV', href: '/cv/Xiangyu_Wang_CV.pdf', external: true },
  ] satisfies LinkItem[],
  leadership: {
    role: 'Class President',
    organization: 'National “Everest Plan” Cohort, UESTC',
    recognition: 'Excellent Student Leader',
  },
  personalInterests: ['Tennis', 'Drums'],
};
