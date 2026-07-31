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
  problem?: string;
  solution?: string;
  impact?: string[]; 
}

export const projects: Project[] = [

  {
  id: "governance-control-tower",
  title: "Enterprise AI Governance Control Tower",
  subtitle: "Multi-agent system that evaluates AI models for production readiness — a fraud model achieving AUC 0.969 is BLOCKED due to fairness violations and drift.",
  category: "Flagship AI",
  techStack: ["Python", "Google ADK", "AsyncIO", "MCP", "FastAPI", "OSFI E-23"],
  repoUrl: "https://github.com/CrillyPienaah/governance-control-tower",
  demoUrl: "https://youtu.be/X6ikEwOH7MQ",
  featured: true,
  description: "Multi-agent AI governance platform coordinating five specialized agents to determine whether an AI model should be deployed — not just how accurate it is.",
  problem: "Financial institutions deploy high-performing models without adequate governance review. Fairness testing is skipped, drift monitoring is absent, and documentation gaps go undetected — until an OSFI examiner finds them after deployment.",
  solution: "Built a Governance Supervisor Agent using Google ADK patterns coordinating five specialized agents: Regulatory Intelligence, Compliance Assessment, Model Risk, Reliability Evaluation, and Benchmarking. All findings feed into a deterministic guardrail engine — no LLM can override the final decision.",
  impact: [
    "Demonstrated that a fraud model achieving AUC 0.969 is BLOCKED due to AIR 0.59 and PSI 0.25",
    "8 deterministic governance rules — llm_override_possible: False",
    "Unifies five live deployed governance systems into a single multi-agent pipeline",
    "Kaggle AI Agents Intensive Capstone 2026 — Agents for Business track",
    "Aligned with OSFI Guideline E-23 model risk management expectations"
  ]
},
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
    solution: "Built a 5-agent system: Funnel Analyst identifies conversion bottlenecks, Experiment Generator suggests improvements, ICE Ranker scores by Impact├ùConfidence├╖Effort, Copywriter creates marketing content, and Explainer provides strategic reasoning. Integrated Slack webhooks for instant delivery.",
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
    id: "pdf-to-sql-pipeline",
    title: "PDF-to-SQL Pipeline",
    subtitle: "AI-powered document extraction API converting unstructured financial PDFs into structured JSON ΓÇö local-first, $0.0005 per document.",
    category: "Data Engineering",
    techStack: ["Python", "Docling OCR", "Gemini Flash-Lite", "FastAPI", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/CrillyPienaah/pdf-to-sql-pipeline",
    featured: true,
    description: "3-layer document intelligence pipeline: local OCR extraction, LLM schema mapping, and deterministic validation ΓÇö designed for regulated financial environments where data sovereignty matters.",
    problem: "Financial institutions processing bank statements, invoices, and clinical notes manually face high error rates, slow turnaround, and data sovereignty risks when sending sensitive documents to cloud OCR services. Existing solutions cost $0.01ΓÇô$0.05 per document and require data to leave the organisation's infrastructure.",
    solution: "Built a 3-layer pipeline: Docling OCR runs locally on CPU (no cloud, no GPU, original PDF never leaves the machine), Gemini Flash-Lite maps extracted text to typed structured JSON via few-shot prompting, and a deterministic validation engine enforces business rules with zero LLM involvement in the trust layer.",
    impact: [
      "Achieved 95.4% accuracy across bank statements, invoices, and clinical notes",
      "Cost of $0.0005 per document ΓÇö 20-100x cheaper than existing cloud OCR solutions",
      "Data sovereignty by design ΓÇö original PDFs never leave the local machine",
      "Supports 7 document types with domain-specific extraction models",
      "FastAPI REST endpoints with Swagger UI for enterprise integration"
    ]
  },

  {
    id: "chrisline-trading",
    title: "CHRiSLINE Algorithmic Trading System",
    subtitle: "Production-grade real-time financial data pipeline with multi-timeframe feature engineering ΓÇö 2.51 Profit Factor, 1.6% max drawdown over 28 months.",
    category: "Data Engineering",
    techStack: ["Python", "MetaTrader 5", "PostgreSQL", "Multi-Timeframe Data", "Feature Engineering"],
    featured: false,
    description: "Real-time financial data ingestion and signal processing system consuming OHLCV tick data across 5 timeframes through a 3-layer feature engineering pipeline with automated performance monitoring.",
    problem: "Manual trading decisions based on single-timeframe analysis miss multi-scale market structure signals. Most algorithmic systems lack rigorous feature engineering, anomaly detection, and production-grade observability for live financial data.",
    solution: "Engineered a real-time data ingestion system consuming multi-timeframe OHLCV tick data (M15/H1/H4/D1/W1) across NAS100 and XAUUSD. Built a 3-layer feature engineering pipeline: structural signal detection (BOS, CHoCH, OB+FVG), conviction scoring with stability gates, and kill-zone scheduling. Automated backtesting engine with anomaly detection, performance monitoring, trade logging, and equity brake alerting.",
    impact: [
      "Profit Factor 2.51 across 262 validated trades over 28 months",
      "1.6% maximum drawdown ΓÇö FTMO compliant for $100K challenge",
      "47.5% win rate with asymmetric risk/reward profile",
      "Processes 55K+ bars across 5 timeframes with real-time signal validation",
      "Autonomous execution with conviction gates preventing low-quality entries"
    ]
  },

  {
    id: "volta-iva",
    title: "Volta IVA ΓÇö World Bank Energy Verification",
    subtitle: "Independent Verification Agent platform for World Bank PAD4401 energy sector programme ΓÇö three-source reconciliation with cryptographic audit trails.",
    category: "Flagship AI",
    techStack: ["Python", "FastAPI", "React", "SHA-256", "Trillian Merkle Tree", "GCP", "RFC 3161"],
    featured: false,
    description: "World Bank-grade data verification platform reconciling official energy utility data from three independent government sources with cryptographically tamper-evident audit trails.",
    problem: "Ghana's energy sector loses GHΓé╡2.95bn annually in unverified revenue. World Bank PAD4401 (US$260M IDA Credit) legally requires Independent Verification Agents under Schedule 2 Section I.D.1 ΓÇö but no existing platform provides multi-source reconciliation with cryptographic integrity guarantees.",
    solution: "Built a three-source reconciliation engine ingesting ECG Zeus billing data, GRIDCo SCADA physical delivery measurements, and GRA treasury receipts simultaneously. Any gap between sources is mathematically visible and cannot be hidden by manipulating any single source. Every reconciled record is hashed with SHA-256 and written to an append-only Trillian Merkle tree with RFC 3161 timestamping.",
    impact: [
      "Identified GHΓé╡2.95bn in unverified revenue across all 12 months of 2024",
      "All 12 months rated CRITICAL risk ΓÇö consistent with Auditor-General's 2024 findings",
      "GHΓé╡246M undeclared revenue per month surfaced through three-source reconciliation",
      "Cryptographic audit trail using SHA-256 + Trillian Merkle tree + RFC 3161 timestamping",
      "First platform in West Africa with multi-source reconciliation and DLI scoring for World Bank PforR programmes"
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
  ,{
    id: "genai-reliability-framework",
    title: "GenAI Reliability Framework",
    subtitle: "Production-grade LLM evaluation harness for regulated medical and financial workflows - OSFI E-23 aligned.",
    category: "Flagship AI",
    techStack: ["Python", "LangGraph", "FastAPI", "Next.js", "OpenAI", "GitHub Actions"],
    imageUrl: "/projects/genai-reliability-cover.png",
    repoUrl: "https://github.com/CrillyPienaah/genai-reliability-framework",
    demoUrl: "https://genai-reliability-framework.vercel.app",
    featured: true,
    description: "Automated validation pipeline that catches LLM hallucinations before they reach production.",
    problem: "Deploying LLMs in regulated industries requires proof that outputs are accurate and traceable.",
    solution: "Built a 5-node LangGraph pipeline with deterministic grounding checks and bootstrapped CI gates.",
    impact: [
      "93.3% medical accuracy with 95% CI [90.8%, 96.0%] across 30 clinical test cases",
      "93.5% financial compliance accuracy [89.2%, 97.0%] across 20 OSFI-framed test cases",
      "100% factual grounding score ΓÇö every entity verified against source documents",
      "OSFI E-23 model risk management alignment for Canadian federally regulated institutions"
    ]
  },
  {
    id: "canfinbench",
    title: "CanFinBench",
    subtitle: "The first public LLM benchmark for Canadian financial regulatory compliance - OSFI E-23, FINTRAC, IFRS 9, Basel III, PIPEDA, and CASL.",
    category: "Flagship AI",
    techStack: ["Python", "Hugging Face", "OSFI E-23", "LLM Evaluation", "Open Source"],
    imageUrl: "/projects/canfinbench-cover.png",
    repoUrl: "https://github.com/CrillyPienaah/CanFinBench",
    demoUrl: "https://huggingface.co/datasets/CrillyPienaah/CanFinBench",
    featured: true,
    description: "The first open LLM benchmark for Canadian financial regulatory compliance ù 57 expert-validated cases across 7 regulatory domains.",
    problem: "No public benchmark existed to evaluate LLMs on Canadian financial regulations before deployment.",
    solution: "Built 57 expert-validated cases across OSFI E-23, FINTRAC, B-20, IFRS 9, Basel III, PIPEDA, and CASL with three task archetypes.",
    impact: [
      "First public Canadian financial regulatory LLM benchmark on Hugging Face",
      "57 expert-validated cases across 7 regulatory domains with primary source citations",
      "eval.yaml for Hugging Face Community Evals automatic leaderboard integration",
      "Directly addresses OSFI E-23 model validation requirements in force May 2027"
    ]
  }
  ,{
    id: "osfi-navigator",
    title: "OSFI Navigator",
    subtitle: "RAG-powered Canadian financial regulatory compliance assistant — grounded answers from OSFI E-23, FINTRAC, B-20, IFRS 9, Basel III, PIPEDA, and CASL.",
    category: "Flagship AI",
    techStack: ["Python", "FastAPI", "LangChain", "RAG", "Next.js", "Railway"],
    imageUrl: "/projects/osfi-navigator-cover.png",
    repoUrl: "https://github.com/CrillyPienaah/osfi-navigator",
    demoUrl: "https://osfi-navigator-frontend.vercel.app",
    featured: true,
    description: "RAG-powered assistant for Canadian financial regulatory compliance — grounded answers from 7 regulatory domains.",
    problem: "No tool existed to query Canadian financial regulations with grounded, cited answers before deployment validation.",
    solution: "Built a RAG pipeline over OSFI E-23, FINTRAC, B-20, IFRS 9, Basel III, PIPEDA, and CASL with hallucination guardrails.",
    impact: [
      "Live production deployment — FastAPI on Railway, Next.js on Vercel",
      "Grounded answers with citations to specific regulatory sections",
      "GPT-4o Mini and GPT-4o model toggle with Pareto frontier scoring",
      "Powered by CanFinBench regulatory corpus"
    ]
  }
  ,{
    id: "osfi-audit-copilot",
    title: "OSFI Audit Copilot",
    subtitle: "AI Governance Compliance Analyzer — OSFI E-23",
    category: "Flagship AI",
    techStack: ["FastAPI", "LangChain", "GPT-4o-mini", "Railway", "Next.js", "Vercel"],
    repoUrl: "https://github.com/CrillyPienaah/osfi-audit-copilot",
    demoUrl: "https://osfi-audit-copilot-frontend.vercel.app",
    featured: true,
    description: "Upload a model card, validation report, or governance policy. Get a structured E-23 compliance report with 100% critical gap detection rate in under 30 seconds.",
    problem: "Model risk managers reviewing AI systems against OSFI E-23 get narrative summaries instead of structured findings they can annotate, override, and sign off on — and sending raw governance documents to an LLM creates its own privacy and auditability risks.",
    solution: "Analyzes documents against 8 OSFI E-23 requirement categories and returns a formal finding register — not a narrative summary. Each finding carries the regulatory source, severity rating, gap description, and remediation recommendation as discrete fields. Pre-LLM PII redaction strips 8 Canadian PII pattern categories (SIN, postal codes, email, phone, card numbers, account numbers, titled names, transaction amounts >$10,000) before any text reaches the model — the LLM never sees raw document text and is never the authorization boundary: access control and PII filtering run in FastAPI before the model is called. The finding register is advisory input to human judgment, not a verdict; critical findings trigger second-line review escalation per the OSFI E-23 three-lines-of-defense model.",
    impact: [
      "100% compliance score band accuracy and 100% critical gap detection rate (eval: 10 E-23 scenarios, gpt-4o-mini, July 2026)",
      "80% risk rating accuracy on the same eval set",
      "Structured JSON finding register: compliance_score, risk_rating, per-finding severity, regulatory_source citations, and pii_redaction_summary",
      "Redaction summary returned in API response for auditability — counts only, never matched values",
      "Known limitations documented in SECURITY.md: pattern-based redaction is not enterprise DLP; no API auth layer"
    ]
  }
];