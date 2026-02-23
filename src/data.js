export const data = {
  typewriterLines: [
    'ML Researcher & Deep Learning Enthusiast',
    'Full-Stack Developer',
    'CS + Data Science @ Truman State',
    'MS/PhD Candidate (Seeking Opportunities)',
    'Motovlogger',
  ],

  stats: [
    { num: '2', label: 'Publications' },
    { num: '5000+', label: 'Students Helped' },
    { num: '99%', label: 'Best Model Acc.' },
    { num: '🏆', label: 'TruHacks 2024 Winner' },
  ],

  publications: [
    {
      badge: 'Conference — Published Jun 2025',
      badgeType: 'conf',
      title: 'An Efficient and Effective Network Is All You Need',
      ref: '[C.1]',
      desc: 'Introduced a ConvNet architecture for brain tumor detection by substituting pointwise CNNs with efficient 1D CNNs — cutting computation while pushing accuracy to new highs.',
      metrics: ['99.39% Accuracy', '0.314M Params', '3.52M FLOPs'],
      paperLink: 'https://drive.google.com/file/d/1m83hk_wgMinJe-seoCX4_P3pCgq8NEcf/view?usp=sharing',
    },
    {
      badge: 'Conference — Published Jul 2025',
      badgeType: 'conf',
      title: 'Spatial and Channel Integration with SENet',
      ref: '[C.2]',
      desc: 'Developed SC-SENet integrating spatial and channel attention via Separable SE layers. Tested on lung image segmentation and malaria detection datasets with state-of-the-art results.',
      metrics: ['99.76% Accuracy', '0.58M Params'],
      paperLink: 'https://drive.google.com/file/d/1I7VOqBhkn-C-b7APCA6mzyjBBABMQ8r_/view?usp=sharing',
    },
    {
      badge: 'Under Review',
      badgeType: 'review',
      title: 'Increasing the Efficiency of EfficientNet using Quaternion Neural Networks',
      ref: '[S.1]',
      desc: 'Engineered a lightweight butterfly classification model using quaternion neural networks, achieving a 2.45% accuracy jump over the EfficientNet-B0 baseline — with fewer parameters.',
      metrics: ['98.78% Val Accuracy', '+2.45% over baseline'],
      paperLink: null,
    },
  ],

  experience: [
    {
      title: 'IT Service Center Customer Representative',
      org: 'Truman State University',
      date: 'Mar 2023 — Present',
      desc: 'Assisted 5,000+ students, parents, and faculty with technical issues, achieving a 95% first-contact resolution rate. Troubleshot and documented hardware and software issues, improving tracking efficiency across the board.',
    },
    {
      title: 'Project Lead — Google Developer Group (GDG)',
      org: 'Truman State University / GDG Chapter',
      date: 'Aug 2024 — Jan 2025',
      desc: 'Led a team to design a portfolio website for CS faculty and a club management system. Collaborated with faculty and community stakeholders to align project deliverables with real-world needs.',
    },
    {
      title: 'Academic Peer Tutor — C++ & Calculus',
      org: 'Truman State University',
      date: 'Apr 2023 — Jan 2024',
      desc: 'Ran weekly drop-in tutoring sessions for C++ and Calculus. Maintained professional records to track student progress and adapt to different learning styles.',
    },
  ],

  projects: [
    {
      emoji: '🕵️',
      title: 'DeceptiGuard',
      desc: 'Deepfake detection tool using CNN + OpenCV achieving 95% real-time accuracy. Won TruHacks 2024 🏆. Optimized for lower-end hardware with live alerts.',
      tags: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'Win11toast'],
      link: 'https://devpost.com/software/deceptiguard',
      linkLabel: 'View on DevPost →',
    },
    {
      emoji: '🍱',
      title: 'NohungerZone',
      desc: 'MERN + Firebase platform connecting food donors and NGOs. Matching system pairs donations with recipients by preference — fighting food waste in real time.',
      tags: ['MongoDB', 'Express', 'React', 'Node', 'Firebase'],
      link: 'https://github.com/AnupRijal/NoHungerZone',
      linkLabel: 'View on GitHub →',
    },
    {
      emoji: '🎬',
      title: 'Movie Recommendation System',
      desc: 'Hybrid recommender combining collaborative filtering and content-based filtering with TF-IDF vectorization and cosine similarity on TMDB metadata.',
      tags: ['Python', 'TF-IDF', 'TMDB API', 'Collab. Filter'],
      link: 'https://github.com/AnupRijal/Movie-Recommender-System',
      linkLabel: 'View on GitHub →',
    },
    {
      emoji: '🔥',
      title: 'Wavelet-MobileNetV2',
      desc: 'Custom CNN architecture for wildfire detection using learnable wavelet transforms and selective attention blocks — achieved 97.79% accuracy on satellite imagery.',
      tags: ['PyTorch', 'Wavelet', 'MobileNetV2', 'Satellite Imagery'],
      link: null,
      linkLabel: null,
    },
  ],

  skills: [
    {
      title: 'ML & AI',
      chips: ['PyTorch', 'TensorFlow', 'CNNs', 'NLP', 'LLMs', 'Gen AI', 'Computer Vision', 'AI Agents'],
    },
    {
      title: 'Languages',
      chips: ['Python', 'Java', 'C / C++', 'JavaScript', 'SQL', 'NoSQL', 'R'],
    },
    {
      title: 'Web & Frameworks',
      chips: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Bootstrap'],
    },
    {
      title: 'Cloud & Tools',
      chips: ['AWS', 'Azure', 'Power BI', 'Git / GitHub', 'Linux', 'Excel'],
    },
  ],

  certifications: [
    { name: 'CS50', issuer: 'Harvard University' },
    { name: 'Python for Data Science & AI', issuer: 'IBM' },
    { name: 'Data Analysis with R', issuer: 'Google' },
    { name: 'Mastering DSA', issuer: 'Udemy' },
  ],

  contact: {
    email: 'anup.rijal247@gmail.com',
    linkedin: 'https://linkedin.com/in/anuprijal',
    linkedinLabel: 'linkedin.com/in/anup-rijal',
    github: 'https://github.com/AnupRijal',
    githubLabel: 'github.com/AnupRijal',
    scholar: 'https://scholar.google.com/citations?user=kbW6qwIAAAAJ&hl=en&oi=ao',
  },

  resume: 'https://drive.google.com/file/d/18z8IE0EyVco9VxQOOLlJ1twajL5fjgrR/view?usp=sharing',
  cv: 'https://drive.google.com/file/d/1mui--yAVM9RMX0HFsTTtH2wzLBQkmGZc/view?usp=sharing',
};
