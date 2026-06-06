export const mockResumeAnalysis = {
  resumeScore: 85,
  atsScore: 78,
  jobMatchScore: 82,
  overallFit: "Excellent Match",
};

export const skillGapData = [
  { name: "Present Skills", value: 65, fill: "#3b82f6" },
  { name: "Missing Skills", value: 35, fill: "#8b5cf6" },
];

export const presentSkills = [
  "React.js",
  "TypeScript",
  "Node.js",
  "Python",
  "SQL",
  "REST APIs",
  "Git",
  "Docker",
];

export const missingSkills = [
  "Kubernetes",
  "GraphQL",
  "AWS",
  "Machine Learning",
  "System Design",
  "Microservices",
];

export const suggestions = [
  {
    title: "Add AWS Certification",
    description: "AWS is mentioned in 45% of job postings in your field",
    priority: "high",
    icon: "Cloud",
  },
  {
    title: "Improve System Design Skills",
    description: "System design interviews are critical for senior roles",
    priority: "high",
    icon: "Zap",
  },
  {
    title: "Learn GraphQL",
    description: "GraphQL experience requested in 30% of postings",
    priority: "medium",
    icon: "Code",
  },
  {
    title: "Build Real-World Project",
    description: "Portfolio projects demonstrate practical experience",
    priority: "medium",
    icon: "GitBranch",
  },
];

export const interviewQuestions = [
  {
    id: 1,
    question: "Explain your most complex project and the challenges you faced",
    category: "Experience",
    difficulty: "Medium",
  },
  {
    id: 2,
    question: "How do you approach system design for scalable applications?",
    category: "Technical",
    difficulty: "Hard",
  },
  {
    id: 3,
    question: "Tell us about a time you had to learn a new technology quickly",
    category: "Behavioral",
    difficulty: "Medium",
  },
  {
    id: 4,
    question: "Describe your experience with database optimization",
    category: "Technical",
    difficulty: "Hard",
  },
  {
    id: 5,
    question: "How do you collaborate with non-technical team members?",
    category: "Behavioral",
    difficulty: "Easy",
  },
];

export const careerRoadmap = [
  {
    id: 1,
    year: "2024",
    title: "Junior Developer",
    description: "Build fundamentals in current tech stack",
    status: "completed",
  },
  {
    id: 2,
    year: "2025",
    title: "Mid-Level Developer",
    description: "Master system design and cloud technologies",
    status: "in-progress",
  },
  {
    id: 3,
    year: "2026",
    title: "Senior Developer",
    description: "Lead technical initiatives and mentorship",
    status: "upcoming",
  },
  {
    id: 4,
    year: "2027",
    title: "Tech Lead",
    description: "Architect and scale systems",
    status: "upcoming",
  },
];

export const features = [
  {
    icon: "FileText",
    title: "Resume Analysis",
    description: "AI-powered analysis of your resume for ATS optimization",
  },
  {
    icon: "Target",
    title: "Job Matching",
    description: "Match your skills against real job descriptions",
  },
  {
    icon: "Zap",
    title: "Skill Gap Analysis",
    description: "Identify skills you need to learn for your dream role",
  },
  {
    icon: "TrendingUp",
    title: "Career Roadmap",
    description: "Get personalized career progression recommendations",
  },
  {
    icon: "MessageSquare",
    title: "Interview Prep",
    description: "Practice with AI-generated interview questions",
  },
  {
    icon: "Award",
    title: "Professional Insights",
    description: "Industry benchmarks and market trends",
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    content: "This tool helped me identify exactly what skills I needed. I got promoted within 6 months!",
    avatar: "SC",
  },
  {
    name: "Michael Rodriguez",
    role: "Senior Developer at Meta",
    content: "The career roadmap feature was game-changing. Exactly what I needed to plan my growth.",
    avatar: "MR",
  },
  {
    name: "Emily Watson",
    role: "Tech Lead at Stripe",
    content: "The interview questions are incredibly realistic. Great for preparation.",
    avatar: "EW",
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Upload Resume",
    description: "Simply upload your resume in PDF format",
  },
  {
    step: 2,
    title: "AI Analysis",
    description: "Our AI analyzes your skills and experience",
  },
  {
    step: 3,
    title: "Get Insights",
    description: "Receive personalized recommendations",
  },
  {
    step: 4,
    title: "Grow Your Career",
    description: "Follow the roadmap and succeed",
  },
];
