// data/projects.ts
export type ProjectCategory = 
  | "Flagship AI" 
  | "Data Engineering" 
  | "Machine Learning" 
  | "Product Strategy";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  techStack: string[];
  imageUrl?: string; 
  repoUrl?: string;
  demoUrl?: string; 
  featured: boolean;
  description: string; 

  // CASE STUDY FIELDS
  problem?: string;
  solution?: string;
  impact?: string[]; 
}

export const projects: Project[] = [
  {
    id: "sme-growth-copilot",
    title: "SME Growth Co-Pilot",
    subtitle: "Multi-agent AI system analyzing business KPIs and generating growth strategies with ICE prioritization.",
    category: "Flagship AI",
    techStack: ["FastAPI", "Google Gemini 2.0", "LangGraph", "Python", "Slack API", "PostgreSQL"],
    imageUrl: "/projects/sme-growth-landing.png",
    repoUrl: "https://github.com/CrillyPienaah/sme-growth-copilot",
    demoUrl: "https://www.kaggle.com/code/christophercrilly/sme-growth-copilot-enterprise-agent",
    featured: true,
    description: "Autonomous AI team that analyzes business funnels, generates experiments, and delivers Slack-ready growth plans in 60 seconds.",
    problem: "Small businesses need strategic growth analysis but can't afford $10K/month consultants. They have data but lack expertise to identify bottlenecks and prioritize high-impact experiments.",
    solution: "Built a 5-agent system: Funnel Analyst identifies conversion bottlenecks, Experiment Generator suggests improvements, ICE Ranker scores by Impact×Confidence÷Effort, Copywriter creates marketing content, and Explainer provides strategic reasoning. Integrated Slack webhooks for instant delivery.",
    impact: [
      "Competed in Google Kaggle AI Agents Competition (11,494 participants)",
      "100% success rate with 1ms average response time in production testing",
      "Identified $135K revenue opportunity in real business case (90% funnel drop)",
      "Achieved 69% code coverage with 18 automated tests for reliability"
    ]
  },

  {
    id: "luminamed",
    title: "LuminaMed AI",
    subtitle: "Multi-Agent clinical intelligence platform for patient triage and decision support.",
    category: "Flagship AI",
    techStack: ["FastAPI", "React", "LangChain", "PostgreSQL", "OpenAI"],
    imageUrl: "/projects/luminamed-patient-portal.png", 
    repoUrl: "https://github.com/CrillyPienaah/luminamed-ai", 
    featured: true,
    description: "Orchestrating autonomous AI agents to securely handle medical data workflows.",
    problem: "Radiologists are overwhelmed by volume, and patients struggle to understand complex medical reports. Existing tools lack the context awareness to safely triage cases or simplify language for non-experts.",
    solution: "I architected a multi-agent system where a 'Triage Agent' prioritizes scans based on urgency and a 'Patient Education Agent' translates technical jargon into plain English. The system uses RAG (Retrieval Augmented Generation) to ground answers in verified medical protocols.",
    impact: [
      "Reduced report analysis time by 40% in initial tests.",
      "Achieved 92% accuracy in triage severity classification.",
      "Successfully integrated HL7/FHIR standards for interoperability."
    ]
  },
  
  {
    id: "daavi",
    title: "Daavi",
    subtitle: "Verification-first real estate platform restoring trust for the African diaspora.",
    category: "Flagship AI",
    techStack: ["Next.js", "NestJS", "TypeORM", "PostGIS"],
    repoUrl: "https://github.com/CrillyPienaah/daavi",
    featured: true,
    imageUrl: "/projects/daavi-cover.png", 
    description: "Solving the cross-border trust deficit in African real estate through verifiable data and AI-driven discovery.",
    problem: "The African real estate market suffers from a massive 'trust deficit.' Diaspora investors lose millions annually to fraud, unverified listings, and lack of transparency, making cross-border investment risky and inefficient.",
    solution: "I built a verification-first marketplace that uses geolocation (PostGIS) and verified vendor data to ensure listing authenticity. The platform includes an AI recommendation engine that matches investors to properties based on investment goals rather than just keywords.",
    impact: [
      "Engineered a scalable trust architecture using NestJS and TypeORM.",
      "Designed a verification workflow that filters out 95% of fraudulent listings.",
      "Created a seamless cross-border UX tailored for diaspora users in North America and Europe."
    ]
  },

  // NEW: Self-Healing Data Pipeline Platform (Replaces Hyperlocal Ad Optimizer)
  {
    id: "self-healing-pipelines",
    title: "Self-Healing Data Pipeline Platform",
    subtitle: "Autonomous pipeline remediation system that detects and fixes data issues in under 30 seconds.",
    category: "Flagship AI",
    techStack: ["FastAPI", "React", "PostgreSQL", "GPT-4", "AWS App Runner", "Multi-Agent AI", "Docker"],
    imageUrl: "/projects/self-healing-dashboard.png",
    repoUrl: "https://github.com/CrillyPienaah/self-healing-pipelines",
    demoUrl: "https://self-healing-dashboard-6372.s3-website.us-east-2.amazonaws.com",
    featured: true,
    description: "Multi-agent AI system that autonomously detects and fixes data pipeline issues - eliminating 3am alerts for data teams.",
    problem: "Data engineers spend 60% of their time fixing pipeline failures - schema drifts, null spikes, row count anomalies. Traditional tools only detect and alert. Teams still manually write fixes, often at 3am, spending 2-8 hours per incident.",
    solution: "Built multi-agent AI system where Detective Agent analyzes root cause, Fixer Agent generates production-ready SQL/Python code, and Critic Agent validates safety - all in under 30 seconds. Deployed on AWS (App Runner + RDS) with 40 production-grade test scenarios. Human approves with one click or system auto-executes if confidence >95%.",
    impact: [
      "Reduces incident resolution from 2-8 hours to <1 minute (95%+ time reduction)",
      "Saves enterprise teams $1.5-2M annually in engineering time",
      "Eliminates 3am alerts and weekend firefighting through autonomous remediation",
      "Achieves 85-92% confidence on generated fixes with 100% safety validation rate",
      "First autonomous pipeline remediation platform - deployed and running on AWS"
    ]
  },

  {
    id: "customer-churn",
    title: "Customer Churn Prediction",
    subtitle: "Banking ML model predicting customer attrition with 86.93% accuracy and intelligent segmentation.",
    category: "Machine Learning",
    techStack: ["R", "Python", "Random Forest", "K-Means", "PCA", "Decision Trees"],
    imageUrl: "/projects/churn-feature-importance.png",
    featured: true,
    description: "Predicting banking customer churn using Random Forest, improving sensitivity from 23% to 46.48%.",
    problem: "Customer churn directly impacts bank revenue and profitability. Acquiring new customers costs 5-7x more than retaining existing ones. Banks need predictive models to identify at-risk customers proactively and implement targeted retention strategies.",
    solution: "Built and compared Logistic Regression, Decision Trees, and Random Forest models on 10,000 customers with 14 demographic, financial, and behavioral features. Applied K-Means clustering for customer segmentation into risk groups, PCA to reduce multicollinearity, and feature engineering to enhance predictive power.",
    impact: [
      "Achieved 86.93% accuracy with Random Forest (best model)",
      "Improved churn detection sensitivity from 23.08% to 46.48% (2x improvement)",
      "Identified Balance, Age, and Active Membership as top predictors",
      "Segmented customers into Low/Moderate/High-risk groups for targeted retention",
      "Germany region showed 45% churn rate requiring region-specific strategies"
    ]
  },

  {
    id: "propensity-modeling",
    title: "Propensity Modeling for Bank Marketing",
    subtitle: "Predicting customer response to term deposit campaigns with 93% AUC using XGBoost.",
    category: "Machine Learning",
    techStack: ["Python", "XGBoost", "Random Forest", "Scikit-Learn", "Feature Engineering", "SMOTE"],
    imageUrl: "/projects/propensity-roc-curve.png",
    featured: true,
    description: "ML-driven campaign targeting that increases conversion rates 3x through precision customer selection.",
    problem: "Direct marketing campaigns suffer from low conversion rates (11.3%) due to broad, non-targeted outreach. Banks waste resources contacting unlikely customers, causing inefficiency and customer disengagement.",
    solution: "Built propensity model using XGBoost, Random Forest, and Logistic Regression to predict term deposit subscription likelihood on 11,162 customers. Applied feature engineering (long_call indicator, age groups, previous_success flags) and handled class imbalance through stratified sampling and scale_pos_weight tuning.",
    impact: [
      "Achieved 93% AUC with XGBoost (outperformed Random Forest at 92%, Logistic at 91%)",
      "Targeting top 20% of customers yields 3x higher conversion than random outreach",
      "Identified call duration, previous success, and campaign timing as top predictors",
      "Feature engineering improved XGBoost AUC from 0.89 to 0.93 (+4.5% lift)"
    ]
  },

  {
    id: "hud-inspections",
    title: "HUD Inspection Analytics",
    subtitle: "Predictive modeling for housing inspection scores and failure rates.",
    category: "Machine Learning",
    techStack: ["R", "Tableau", "Scikit-Learn"],
    imageUrl: "/projects/hud-inspections-cover.png",
    featured: true,
    description: "Predictive modeling for housing inspection scores and failure rates.",
    problem: "HUD housing inspections are reactive, leading to costly emergency repairs and safety violations that could have been prevented.",
    solution: "Built a regression model to predict inspection scores based on historical data, property characteristics, and maintenance records, enabling proactive intervention.",
    impact: [
      "Achieved 87% accuracy in predicting inspection failures.",
      "Enabled $500K+ in preventative maintenance savings.",
      "Created interactive Tableau dashboards for property managers."
    ]
  },

  {
    id: "techcrunch-data",
    title: "TechCrunch Funding Normalization",
    subtitle: "Designing a 3NF relational schema for robust venture capital analytics.",
    category: "Data Engineering",
    techStack: ["SQL", "Data Modeling", "ERD Design", "Normalization"],
    featured: false,
    description: "Transformed raw funding data into a highly optimized 3rd Normal Form database to enable complex investment trend analysis.",
    problem: "Raw venture capital data is often unstructured and denormalized, making it impossible to answer complex questions like 'Which investors co-invest most frequently in Series B HealthTech startups?' without expensive queries.",
    solution: "I decomposed the raw dataset into a strict 3rd Normal Form (3NF) relational schema. I designed an Entity Relationship Diagram (ERD) that handles many-to-many relationships between Investors, Companies, and Funding Rounds, enforcing referential integrity.",
    impact: [
      "Eliminated data redundancy, reducing storage footprint by 35%.",
      "Optimized query performance for complex joins across 5+ tables.",
      "Enabled granular trend analysis on investor cohorts and startup sectors."
    ]
  }
];