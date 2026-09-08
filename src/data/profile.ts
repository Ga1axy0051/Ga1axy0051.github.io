export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export const profile = {
  name: 'Xiangyu Wang',
  title: 'Undergraduate Researcher in Robot Learning & Embodied Intelligence',
  email: 'xy.texwang.cs@gmail.com',
  introduction:
    'I am an undergraduate at UESTC currently conducting full-time, on-site research in robot learning at Shanghai Qi Zhi Institute under the guidance of Prof. Huazhe Xu (Tsinghua University). My current interests center on generative robot policies, action representations, temporal modeling, and learning from real-world interaction.',
  currentPosition: {
    institution: 'Shanghai Qi Zhi Institute',
    role: 'Full-time Researcher',
    mode: 'On-site',
    advisor: 'Prof. Huazhe Xu',
    advisorInstitution: 'Tsinghua University',
  },
  links: [
    { label: 'Email', href: 'mailto:xy.texwang.cs@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/Ga1axy0051', external: true },
    { label: 'CV', href: '/cv/Xiangyu_Wang_CV.pdf', external: true },
  ] satisfies LinkItem[],
  interests: [
    'Robot Learning',
    'Embodied Intelligence',
    'Generative Robot Policies',
    'Reinforcement Learning',
    'Imitation Learning',
    'Action Representation',
    'Temporal Modeling',
    'Real-World Robot Learning',
  ],
  education: {
    institution: 'University of Electronic Science and Technology of China (UESTC)',
    degree: 'B.E. in Computer Science and Technology',
    program: 'National “Everest Plan” Project',
    dates: 'Sep 2024 – Present',
    gpa: '3.61 / 4.0',
    averageScore: '85.46',
  },
  leadership: {
    role: 'Class President',
    organization: 'National “Everest Plan” Cohort, UESTC',
    recognition: 'Excellent Student Leader',
  },
  personalInterests: ['Tennis', 'Drums'],
};
