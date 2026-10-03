export const projects = [
  {
    id: "01",
    title: "MedAR – AR-Based Medical Training Platform",
    category: "Full-Stack & AR Simulation",
    description: "An AR-based medical training platform designed to provide interactive learning experiences through simulation modules, progress tracking, quizzes, and role-based dashboards.",
    features: [
      "Interactive AR/simulation-based medical training modules",
      "Role-based dashboards for trainees, instructors, and administrators",
      "Quiz and assessment functionality",
      "Module progress tracking",
      "Leaderboard functionality",
      "Backend API integration with MySQL"
    ],
    implementation: "Built the application using a frontend interface connected to Node.js and Express.js backend APIs, with MySQL used for authentication, module management, and application data.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "REST APIs", "Web VR/AR"],
    githubUrl: "", // Configurable: paste repository URL here later
    liveUrl: ""
  },
  {
    id: "02",
    title: "SkillTern – Internship Matching Platform",
    category: "Full-Stack Web App",
    description: "A web-based internship platform designed to connect students with relevant internship opportunities through profiles, filtering, and skill-based matching.",
    features: [
      "Student profile creation & management",
      "Internship opportunity browsing",
      "Internship filtering & search",
      "Skill-based matching logic",
      "Responsive user interface"
    ],
    implementation: "Developed the platform with a responsive frontend and implemented internship filtering and basic skill-based matching logic to help students discover relevant opportunities.",
    technologies: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    githubUrl: "", // Configurable: paste repository URL here later
    liveUrl: ""
  },
  {
    id: "03",
    title: "Farm-to-Market Platform",
    category: "Full-Stack Web App",
    description: "An intelligent farm-to-market platform designed to help farmers make better market decisions and improve coordination between farmers, buyers, and transportation.",
    features: [
      "Farmer and buyer profiles",
      "Market/buyer discovery",
      "Shared transportation coordination",
      "Farm-to-market decision support",
      "Backend API and database integration"
    ],
    implementation: "Engineered a digital platform with RESTful APIs to facilitate price discovery, buyer matching, and shared transportation logistics for local farmers.",
    technologies: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    githubUrl: "", // Configurable: paste repository URL here later
    liveUrl: ""
  },
  {
    id: "04",
    title: "Paddy Yield Prediction",
    category: "AI / Machine Learning",
    description: "A machine-learning project that predicts agricultural crop yield using relevant agricultural and meteorological parameters.",
    features: [
      "Feature engineering on soil & meteorological parameters",
      "Model evaluation across Random Forest, KNN, Decision Tree, & SVM",
      "Predictive analysis pipeline for agricultural decision-making"
    ],
    implementation: "Processed agricultural datasets using Python, Pandas, and NumPy, and evaluated regression and ensemble models in Scikit-Learn for agricultural yield forecasting.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning"],
    models: ["Random Forest", "KNN", "Decision Tree", "SVM"],
    githubUrl: "", // Configurable: paste repository URL here later
    liveUrl: ""
  }
];
