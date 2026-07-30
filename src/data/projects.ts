import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Reinforcement Learning for Hospital Readmission Planning",
    category: "Healthcare Analytics",
    status: "Course capstone project",
    description:
      "A public course capstone repository exploring sequential decision-making methods for hospital readmission planning. This portfolio entry stays at repository-summary level and does not reproduce data or restricted materials.",
    methods: [
      "Dynamic programming",
      "Temporal-difference learning",
      "SARSA",
      "Q-learning",
      "Deep Q-Network"
    ],
    technologies: ["Python"],
    repository: "https://github.com/christianahjemiyo/EECS590_Capstone_RL",
    evidence:
      "The public README describes a versioned workflow with scripts, tests, outputs, and result summaries.",
    featured: true,
    privacyNote:
      "No datasets, patient-level details, or restricted project files are copied into this website."
  },
  {
    title: "Tabular and Deep Reinforcement Learning Experiments",
    category: "Artificial Intelligence",
    status: "Course project",
    description:
      "A reinforcement-learning mini project implementing tabular and deep reinforcement-learning methods to study learning behaviour in stochastic environments.",
    methods: ["SARSA(lambda)", "Q-learning", "Deep Q-Network", "Performance evaluation"],
    technologies: ["Python"],
    repository: "https://github.com/christianahjemiyo/EECS590_mini_project3",
    evidence:
      "The public README documents project scripts, figures, plots, and evaluation artifacts.",
    featured: true
  },
  {
    title: "Markov Decision Process Modelling",
    category: "Artificial Intelligence",
    status: "Course project",
    description:
      "A mini project extending Markov process foundations into full Markov Decision Processes with value functions, Q-values, and dynamic programming methods.",
    methods: ["Markov Decision Processes", "Value functions", "Q-values", "Dynamic programming"],
    technologies: ["Python"],
    repository: "https://github.com/christianahjemiyo/EECS590_mini_project2",
    evidence: "The public README describes the modelling focus and method scope.",
    featured: true
  },
  {
    title: "Markov Processes and Value Iteration",
    category: "Artificial Intelligence",
    status: "Course project",
    description:
      "A mini project exploring Markov Reward Processes and value iteration through a documented Grid World environment.",
    methods: [
      "Markov Reward Processes",
      "Bellman equation",
      "Value iteration",
      "Grid World modelling"
    ],
    technologies: ["Python", "TeX"],
    repository: "https://github.com/christianahjemiyo/EECS590_mini_project1",
    evidence: "The public README documents the Grid World framework and Markov-process focus."
  },
  {
    title: "Reinforcement Learning Study Dashboard",
    category: "Education",
    status: "Public study tool",
    description:
      "An interactive Streamlit dashboard for reinforcement-learning quiz practice and algorithm comparison study support.",
    methods: [
      "Instructional design",
      "Quiz interaction",
      "Immediate feedback",
      "Study-guide organization"
    ],
    technologies: ["Python", "Streamlit"],
    repository: "https://github.com/christianahjemiyo/Exercises-for-RL-Course",
    demo: "https://exercises-for-rl-course-7m4ysvwnmdj6pdlmqoxs55.streamlit.app/",
    evidence:
      "The public README documents the live dashboard, quiz format, and study-guide features."
  }
];

export const excludedProjectNotes = [
  "All-of-Us-Project was not included because the public README is too brief for a project-card description and the repository topic may involve controlled health-data workflows.",
  "Exercises-for-Data-Visualization-Course was not included because the public README indicates course-study materials and more confirmation is needed before presenting it as a portfolio project.",
  "agent-mastery was not included because the public README does not provide enough detail for an accurate project description."
];
