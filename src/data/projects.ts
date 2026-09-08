export interface Project {
  title: string;
  institution: string;
  role: string;
  supervisor: string;
  supervisorTitle: string;
  recognition: string[];
  contributions: string[];
}

export const projects: Project[] = [
  {
    title: 'Non-linear Classifiers Generalized from Linear Classifiers',
    institution: 'University of Cambridge',
    role: 'Project Leader',
    supervisor: 'Prof. Jamie Vicary',
    supervisorTitle: 'Professor of Future Computation, University of Cambridge',
    recognition: [
      'Best Team',
      'Best Individual',
      'Highest personal score: 84/100',
      'GPA: 4.5/5.0',
      'Received two written recommendation letters from Prof. Vicary recognizing strong performance in the project',
    ],
    contributions: [
      'Derived optimization equations for minimizing classification error',
      'Implemented a linear classifier',
      'Generalized the mathematical model toward nonlinear classification',
      'Evaluated classification performance on generalized datasets',
    ],
  },
];
