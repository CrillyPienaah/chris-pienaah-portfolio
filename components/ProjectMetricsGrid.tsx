'use client';

import React, { useState } from 'react';
import { Cpu, Database, Layers, Github, ExternalLink, GitBranch, Terminal, Play, CheckCircle2, Award, Zap, Code2, Plus, Minus, ShieldCheck, HeartPulse, MapPin, BadgePercent, Coins, Table } from 'lucide-react';

interface ProjectCardData {
  id: string;
  title: string;
  headline: string;
  dedication?: string;
  badges: { label: string; value: string; color: 'blue' | 'emerald' | 'purple' | 'orange' | 'red' }[];
  techStack: string[];
  metrics: { value: string; label: string }[];
  description: string;
  architecture: string[];
  links?: { label: string; url: string; icon?: React.ReactNode }[];
  hasDeepDive?: boolean;
}

const projectsData: ProjectCardData[] = [
  {
    id: 'governance-ops',
    title: 'GovernanceOps',
    headline: 'A governance decision, made once by a risk officer, becomes a runtime-enforced AI control — verified end-to-end against live production infrastructure, not just in a test suite.',
    badges: [
      { label: 'Test Coverage', value: '213 Tests', color: 'purple' },
      { label: 'Verification', value: 'Live Production', color: 'emerald' }
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Next.js', 'Railway', 'OSFI E-23'],
    metrics: [
      { value: '213', label: 'Automated Tests, Both Repos' },
      { value: '2', label: 'Real Bugs Found & Fixed Live' },
      { value: 'SHA-256', label: 'Versioned Policy Hashing' }
    ],
    description: 'A two-service closed-loop AI assurance platform. GovernanceOps Inventory is the system of record for OSFI E-23 model governance decisions — risk tier, autonomy level, permitted/forbidden tools, confidence thresholds. GovernanceOps Agent is a zero-dependency Python runtime library that fetches that policy directly over HTTPS, enforces it inside a live agent process, and reports enforcement evidence back to Inventory, each event tied to the exact policy version and SHA-256 hash that produced it.',
    architecture: [
      'Risk officer approves a policy in Inventory (autonomy, tools, thresholds)',
      'Agent fetches the policy live over HTTPS — nothing hand-entered on the agent side',
      'A prohibited action is blocked; the decision is signed and timestamped',
      'Enforcement evidence is reported back to Inventory, tied to a policy version + hash'
    ],
    links: [
      { label: 'governanceops-inventory', url: 'https://github.com/CrillyPienaah/governanceops-inventory', icon: <Github className="w-3.5 h-3.5" /> },
      { label: 'governanceops-agent', url: 'https://github.com/CrillyPienaah/governanceops-agent', icon: <Github className="w-3.5 h-3.5" /> }
    ],
    hasDeepDive: true
  },
  {
    id: 'governance-control-tower',
    title: 'Governance Control Tower',
    headline: 'Multi-agent supervisor orchestrating specialized auditing workers using Google ADK.',
    badges: [
      { label: 'Orchestrator', value: 'Google ADK', color: 'purple' },
      { label: 'Audit Standard', value: 'OSFI E-23', color: 'blue' }
    ],
    techStack: ['Google ADK', 'Python', 'FastAPI', 'ChromaDB', 'BigQuery', 'Docker'],
    metrics: [
      { value: 'Multi-Agent', label: 'Orchestrator Stack' },
      { value: 'OSFI E-23', label: 'Compliance Gate' },
      { value: 'Tamper-Proof', label: 'Audit Logs' }
    ],
    description: 'A multi-agent supervisor coordinating specialist auditing agents via Google ADK to enforce model compliance with OSFI E-23 and SR 11-7 model risk management guidelines.',
    architecture: [
      'Supervisor coordinates auditing checks',
      'Regulatory agent parses guidelines',
      'Model risk agent audits bias',
      'Reliability agent detects drift'
    ],
    links: [
      { label: 'OSFI Navigator Portal', url: 'https://osfi-navigator-frontend.vercel.app', icon: <ExternalLink className="w-3.5 h-3.5" /> },
      { label: 'OSFI Audit Copilot', url: 'https://osfi-audit-copilot-frontend.vercel.app', icon: <ExternalLink className="w-3.5 h-3.5" /> }
    ]
  },
  {
    id: 'model-risk-dashboard',
    title: 'Model Risk Dashboard',
    headline: 'Continuous model monitoring aligned to OSFI E-23 Â§4 â€” drift, performance, and bias surveillance.',
    badges: [
      { label: 'Standard', value: 'OSFI E-23 Â§4', color: 'blue' },
      { label: 'Metrics', value: 'PSI, AUC, Parity', color: 'emerald' }
    ],
    techStack: ['FastAPI', 'scipy', 'pandas', 'Next.js', 'Recharts', 'Railway', 'Vercel'],
    metrics: [
      { value: 'PSI + AUC', label: 'Drift & Performance' },
      { value: 'Parity + EO', label: 'Bias Metrics' },
      { value: '15/Critical', label: 'Story Endpoint Score' }
    ],
    description: 'Continuous model monitoring aligned to OSFI E-23 Â§4: PSI drift detection, AUC performance tracking, demographic parity and equal opportunity bias metrics, and a monthly surveillance log. Ships with a synthetic 6-month credit model dataset â€” drift appears at month 4, bias emerges at month 5, and the compliance score drops from stable to 15/Critical as the story unfolds.',
    architecture: [
      'PSI drift detection on feature distributions',
      'AUC performance tracking per surveillance month',
      'Demographic parity & equal opportunity bias metrics',
      'Monthly surveillance log drives compliance score'
    ],
    links: [
      { label: 'Model Risk Dashboard â€” OSFI E-23', url: 'https://model-risk-dashboard.vercel.app', icon: <ExternalLink className="w-3.5 h-3.5" /> },
      { label: 'GitHub Repository', url: 'https://github.com/CrillyPienaah/model-risk-dashboard', icon: <Github className="w-3.5 h-3.5" /> }
    ]
  },
  {
    id: 'can-fraud-bench',
    title: 'CanFraudBench',
    headline: 'Open-source Canadian identity-fraud benchmark datasets and calibration drift monitors.',
    badges: [
      { label: 'Calibration ECE', value: '< 0.015', color: 'purple' },
      { label: 'Drift Gates', value: 'Active', color: 'orange' }
    ],
    techStack: ['Hugging Face', 'FastAPI', 'PostgreSQL', 'Scikit-learn', 'XGBoost'],
    metrics: [
      { value: '< 0.015 ECE', label: 'Expected Calibration Error' },
      { value: '12+ Types', label: 'Identity Fraud Scenarios' },
      { value: 'OSS', label: 'GitHub / Hugging Face' }
    ],
    description: 'An open-source identity-fraud benchmark designed specifically for Canadian regulated environments. Features automated drift alerts and Expected Calibration Error (ECE) tracking logs to audit financial verification pipelines.',
    architecture: [
      'CanFraud dataset repository (Hugging Face)',
      'Drift monitoring pipeline (PSI calculations)',
      'FastAPI benchmark scoring endpoints',
      'XGBoost baseline calibration classifiers'
    ],
    links: [
      { label: 'CanFinBench Dataset', url: 'https://huggingface.co/datasets/CrillyPienaah/CanFinBench', icon: <GitBranch className="w-3.5 h-3.5" /> },
      { label: 'SFT Llama Model', url: 'https://huggingface.co/CrillyPienaah/CanFinBench-SFT-Llama3.2-1B', icon: <Cpu className="w-3.5 h-3.5" /> },
      { label: 'Fine-Tuning Notebook', url: 'https://www.kaggle.com/code/christophercrilly/canfinbench-sft-fine-tuning-llama-3-2-on-canadian', icon: <ExternalLink className="w-3.5 h-3.5" /> }
    ]
  },
  {
    id: 'osfi-navigator',
    title: 'OSFI Navigator',
    headline: 'Multi-domain regulatory RAG framework mapping Canadian financial audit regulations.',
    badges: [
      { label: 'Reg Domains', value: '7 Domains', color: 'blue' },
      { label: 'Retrieval F1', value: '92.4%', color: 'emerald' }
    ],
    techStack: ['Next.js', 'FastAPI', 'ChromaDB', 'Gemini Flash', 'Citation Parser'],
    metrics: [
      { value: '7 Domains', label: 'Regulatory Mappings' },
      { value: 'ChromaDB', label: 'Access-Controlled VDB' },
      { value: 'Citation', label: 'Deterministic Validation' }
    ],
    description: 'A multi-domain RAG framework mapping 7 Canadian regulatory domains (including OSFI E-23 and SR 11-7 guidelines). Features access-controlled vector stores and strict citation verification checking pipelines to prevent LLM hallucinations.',
    architecture: [
      'PDF OCR parser with metadata tagging',
      'ChromaDB Vector Store with IAM role scopes',
      'HyDE retrieval enhancement pipeline',
      'Citation verification supervisor'
    ],
    links: [
      { label: 'OSFI Navigator Demo', url: 'https://osfi-navigator-frontend.vercel.app', icon: <ExternalLink className="w-3.5 h-3.5" /> },
      { label: 'Model Risk Dashboard â€” OSFI E-23', url: 'https://model-risk-dashboard.vercel.app', icon: <ExternalLink className="w-3.5 h-3.5" /> }
    ]
  },
  {
    id: 'osfi-audit-copilot',
    title: 'OSFI Audit Copilot',
    headline: 'AI Governance Compliance Analyzer â€” OSFI E-23. Upload a model card, validation report, or governance policy; get a structured E-23 compliance report with 100% critical gap detection rate and 3/3 injection attacks blocked in under 30 seconds.',
    badges: [
      { label: 'Critical Gap Detection', value: '100%', color: 'emerald' },
      { label: 'PII Redaction', value: 'Pre-LLM', color: 'red' }
    ],
    techStack: ['FastAPI', 'LangChain', 'GPT-4o-mini', 'Railway', 'Next.js', 'Vercel'],
    metrics: [
      { value: '100%', label: 'Score Band Accuracy' },
      { value: '100%', label: 'Critical Gap Detection' },
      { value: '80%', label: 'Risk Rating Accuracy' },
      { value: '3/3', label: 'Injection Attacks Blocked' }
    ],
    description: 'Analyzes documents against 8 OSFI E-23 requirement categories and returns a formal finding register â€” not a narrative summary. Each finding carries regulatory source, severity rating, gap description, and remediation recommendation as discrete fields a model risk manager can annotate, override, and sign off on. Critical findings escalate to second-line review per the E-23 three-lines-of-defense model. Eval: 10 E-23 scenarios, gpt-4o-mini, July 2026.',
    architecture: [
      'Pattern-based PII redaction before LLM call (8 Canadian categories)',
      'LLM never sees raw text â€” redacted excerpt + static E-23 citation corpus',
      'XML delimiters isolate document content from prompt instructions',
      'Adversarial test: 3 attack vectors (score inflation, role confusion, instruction hijacking)',
      'Pre-fix 1/3 blocked â†’ post-fix 3/3 blocked after XML delimiter fix',
      'Finding register JSON: compliance_score, risk_rating, pii_redaction_summary',
      'Advisory output only â€” human sign-off required; LLM is never the authorization boundary'
    ],
    links: [
      { label: 'Live Demo', url: 'https://osfi-audit-copilot-frontend.vercel.app', icon: <ExternalLink className="w-3.5 h-3.5" /> },
      { label: 'GitHub Repository', url: 'https://github.com/CrillyPienaah/osfi-audit-copilot', icon: <Github className="w-3.5 h-3.5" /> }
    ]
  },
  {
    id: 'pdf-to-sql-pipeline',
    title: 'PDF-to-SQL Pipeline',
    headline: 'Local-first document intelligence API converting unstructured financial PDFs into structured schemas.',
    badges: [
      { label: 'Accuracy', value: '95.4%', color: 'emerald' },
      { label: 'Infrastructure', value: 'Local CPU-Only', color: 'blue' }
    ],
    techStack: ['Python', 'Docling OCR', 'Gemini 2.5 Flash-Lite', 'FastAPI', 'PostgreSQL', 'Docker', 'Pydantic v2', 'google-genai SDK'],
    metrics: [
      { value: '95.4%', label: 'OCR Accuracy' },
      { value: '$0.0005', label: 'Per Document Cost' },
      { value: '20-100x', label: 'Cost Reduction' }
    ],
    description: 'A 3-layer document intelligence pipeline designed for regulated financial environments where data sovereignty is mandatory. It processes statements locally on CPU with zero cloud OCR outbound calls.',
    architecture: [
      'Docling OCR extracts layout blocks locally',
      'Gemini Flash-Lite maps blocks to typed JSON',
      'Pydantic validates fields deterministically',
      'FastAPI serves Swagger schema endpoints'
    ],
    links: [
      { label: 'API Swagger Docs', url: 'https://daavi-production.up.railway.app/api/docs', icon: <Terminal className="w-3.5 h-3.5" /> },
      { label: 'document_github', url: 'https://github.com/CrillyPienaah/pdf-to-sql-pipeline', icon: <Github className="w-3.5 h-3.5" /> }
    ],
    hasDeepDive: true
  },
  {
    id: 'daavi',
    title: 'Daavi',
    headline: 'Intelligent Property Discovery & Verification Platform.',
    dedication: "Named in honor of my late mother, Felicia Pienaah 'Daavi' â€” embodying absolute trust and safety.",
    badges: [
      { label: 'Fraud Filter', value: '95% Rate', color: 'red' },
      { label: 'Target Market', value: 'NA/EU Diaspora', color: 'blue' }
    ],
    techStack: ['Next.js 14', 'NestJS', 'TypeORM', 'PostgreSQL', 'PostGIS', 'Socket.io', 'Python', 'OpenAI Embeddings', 'JWT'],
    metrics: [
      { value: '95%', label: 'Fraud Filter Rate' },
      { value: 'PostGIS', label: 'Geospatial Verification' },
      { value: 'USD/GHS', label: 'Multi-Currency Gate' }
    ],
    description: 'A verification-first real estate marketplace solving the diaspora trust deficit in cross-border property investments through PostGIS geospatial mapping, raw SQL verification gates, and vector similarity search.',
    architecture: [
      '3-tier property checks pipeline',
      'PostGIS land registry verification engine',
      'OpenAI pgvector matching similarity index',
      'Real-time multi-currency price dashboard'
    ],
    links: [
      { label: 'Live Demo', url: 'https://daavi.vercel.app', icon: <ExternalLink className="w-3.5 h-3.5" /> },
      { label: 'diaspora_github', url: 'https://github.com/CrillyPienaah/daavi', icon: <Github className="w-3.5 h-3.5" /> }
    ],
    hasDeepDive: true
  },
  {
    id: 'luminamed-v2',
    title: 'LuminaMed AI v2.0',
    headline: 'Multi-Agent clinical intelligence platform for secure radiology workflows & patient portals.',
    badges: [
      { label: 'Radiology AI', value: 'v2.0 Release', color: 'emerald' },
      { label: 'Compliance', value: 'HIPAA-aligned design', color: 'blue' }
    ],
    techStack: ['LangGraph', 'Gemini 2.5 Flash', 'FastAPI', 'Qdrant', 'Next.js 15', 'Streamlit', 'Redis', 'PostgreSQL', 'Docker'],
    metrics: [
      { value: '92%', label: 'Internal verification-agent metric' },
      { value: '8%', label: 'Internal verification-agent metric' }
    ],
    description: 'A multi-agent clinical intelligence platform orchestrating specialized AI workers to ingest scans, draft impressions, generate billing codes, and simplify complex diagnostic terminology for patients.',
    architecture: [
      'Findings Agent reads visual scan segments',
      'Impression Agent synthesizes diagnostic summaries',
      'Coding Agent generates ICD-10 & CPT codes',
      'Verification Agent audits for hallucinations'
    ],
    links: [
      { label: 'LuminaMed - Radiologist Portal', url: 'https://radiologist-portal-production.up.railway.app', icon: <ExternalLink className="w-3.5 h-3.5" /> },
      { label: 'LuminaMed Patient Portal', url: 'https://patient-portal-production-1b11.up.railway.app', icon: <ExternalLink className="w-3.5 h-3.5" /> },
      { label: 'LuminaMed-AI - Swagger UI', url: 'https://luminamed-ai-production.up.railway.app/docs', icon: <Terminal className="w-3.5 h-3.5" /> }
    ],
    hasDeepDive: true
  },
  {
    id: 'sme-growth-copilot',
    title: 'SME Growth Co-Pilot',
    headline: 'Multi-agent AI system that analyzes business KPIs and generates growth strategies.',
    badges: [
      { label: 'Kaggle AI Agents', value: '11,494 Teams', color: 'purple' },
      { label: 'Validation', value: '18 tests pass', color: 'emerald' }
    ],
    techStack: ['LangGraph', 'Gemini 2.0', 'FastAPI', 'Python', 'Slack API', 'PostgreSQL', 'Pandas', 'Tenacity'],
    metrics: [
      { value: '18 Tests', label: 'Passing Tests' },
      { value: 'Funnel Math', label: 'Calculates revenue-opportunity' },
      { value: '11,494 Teams', label: 'Google Intensive Competitor' }
    ],
    description: 'A production 6-agent LangGraph system built for the Kaggle Ã— Google AI Agents Intensive (11,494 teams). It analyzes revenue-opportunity from funnel drop-offs, ranks marketing ideas via the ICE scoring engine, and generates content routed directly to Slack.',
    architecture: [
      'Funnel Analyst identifies drop-offs',
      'Experiment Generator generates suggestions',
      'ICE Ranker scores impact & effort',
      'Copywriter & Explainer build outputs'
    ],
    links: [
      { label: 'Live Demo', url: 'https://web-production-a0573.up.railway.app/', icon: <ExternalLink className="w-3.5 h-3.5" /> },
      { label: 'API Documentation', url: 'https://web-production-a0573.up.railway.app/docs', icon: <Terminal className="w-3.5 h-3.5" /> },
      { label: 'GitHub Repository', url: 'https://github.com/CrillyPienaah/sme-growth-copilot', icon: <Github className="w-3.5 h-3.5" /> }
    ],
    hasDeepDive: true
  },
  {
    id: 'genai-reliability',
    title: 'GenAI Reliability Framework',
    headline: 'Hallucination tracking and calibration scoring across LLMs with Pareto frontier optimization.',
    badges: [
      { label: 'Medical Acc', value: '93.3%', color: 'emerald' },
      { label: 'Financial Acc', value: '93.5%', color: 'blue' }
    ],
    techStack: ['Python', 'PyTorch', 'LangChain', 'Pareto Optimization', 'F1 Metrics'],
    metrics: [
      { value: '93.3% / 93.5%', label: 'Accuracy Intervals' },
      { value: '< 2.1%', label: 'Hallucination Rate' },
      { value: 'Pareto', label: 'Frontier Scoring' }
    ],
    description: 'A mathematical evaluation framework tracking hallucinations and calibration errors across open-source and commercial LLM backends, determining the optimal cost-accuracy trade-offs via multi-objective Pareto optimization.',
    architecture: [
      'Evaluation Dataset ingestion layer',
      'LLM Prompt-variance testing engine',
      'Calibration scoring (ECE calculation)',
      'Pareto frontier solver algorithms'
    ],
    links: [
      { label: 'Reliability Framework Portal', url: 'https://genai-reliability-framework.vercel.app', icon: <ExternalLink className="w-3.5 h-3.5" /> }
    ]
  },
  {
    id: 'self-healing-pipeline',
    title: 'Self-Healing ML Pipeline',
    headline: 'Autonomous pipeline remediation monitoring system running test scenarios to validate fixes.',
    badges: [
      { label: 'Validation Engine', value: '40 Scenarios', color: 'emerald' },
      { label: 'AWS Deploy', value: 'App Runner + RDS', color: 'blue' }
    ],
    techStack: ['AWS App Runner', 'AWS RDS', 'Airflow', 'MLflow', 'Docker', 'AsyncIO', 'Python'],
    metrics: [
      { value: '40', label: 'Test Scenarios' },
      { value: 'AWS Stack', label: 'App Runner + RDS' },
      { value: '< 30s', label: 'Anomaly Remediation' }
    ],
    description: 'An automated self-healing pipeline processor deployed on AWS (App Runner + RDS) to audit data pipeline flows. Cuts time-to-resolution from hours to under a minute by spinning up isolated Docker containers to validate fixes before promotion.',
    architecture: [
      'Airflow logs ingestion via AWS CloudWatch',
      'Detective Agent diagnostics block',
      'Isolated Docker testing sandbox container',
      'Auto-rollback DB deployment gate'
    ],
    links: [
      { label: 'Platform Demo', url: 'https://chris-pienaah-portfolio.vercel.app', icon: <ExternalLink className="w-3.5 h-3.5" /> }
    ]
  }
];

const historicalSystems = [
  {
    title: 'CHRiSLINE Trading Bot',
    headline: 'XAU/USD Algorithmic trading engine with MetaTrader 5 integration.',
    techStack: ['Python', 'MT5 API', 'Pandas', 'NumPy', 'Technical Indicators', 'Websockets'],
    description: 'An automated scalping bot executing positions on gold (XAU/USD) via the MetaTrader 5 API interface. Features trailing stop-loss, risk management boundaries, and local log alerts.'
  },
  {
    title: 'NeighborCart',
    headline: 'DTTP Hackathon Top 6 Hyperlocal Commerce MVP.',
    techStack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Leaflet', 'Docker', 'WebSockets'],
    description: 'A hyperlocal merchant matching system built for the DTTP Hackathon, ranking in the Top 6. Facilitates neighborhood store listings, geolocation maps, and instant order broadcast.'
  }
];

export default function ProjectMetricsGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deepDiveTab, setDeepDiveTab] = useState<'tab1' | 'tab2' | 'tab3' | 'tab4'>('tab1');

  const getBadgeColor = (color: string) => {
    switch (color) {
      case 'emerald': return 'bg-emerald-500/10 border-emerald-500/35 text-emerald-400 font-extrabold shadow-sm';
      case 'purple': return 'bg-purple-500/10 border-purple-500/35 text-purple-400 font-extrabold shadow-sm';
      case 'orange': return 'bg-orange-500/10 border-orange-500/35 text-orange-400 font-extrabold shadow-sm';
      case 'red': return 'bg-red-500/10 border-red-500/35 text-red-400 font-extrabold shadow-sm';
      default: return 'bg-blue-500/10 border-blue-500/35 text-blue-400 font-extrabold shadow-sm';
    }
  };

  const toggleDeepDive = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
      setDeepDiveTab('tab1'); // Reset to first tab
    }
  };

  // Dynamic tab configuration based on project
  const getTabConfig = (id: string) => {
    if (id === 'sme-growth-copilot') {
      return [
        { id: 'tab1', label: 'The Architecture', icon: <Layers className="w-3.5 h-3.5" /> },
        { id: 'tab2', label: 'Technical Implementation', icon: <Code2 className="w-3.5 h-3.5" /> },
        { id: 'tab3', label: 'Product Interfaces', icon: <Play className="w-3.5 h-3.5" /> },
        { id: 'tab4', label: 'The ICE Framework', icon: <Award className="w-3.5 h-3.5" /> }
      ];
    } else if (id === 'luminamed-v2') {
      return [
        { id: 'tab1', label: 'Supervisor Orchestration', icon: <Cpu className="w-3.5 h-3.5" /> },
        { id: 'tab2', label: 'Knowledge Store (RAG)', icon: <Database className="w-3.5 h-3.5" /> },
        { id: 'tab3', label: 'Dual-Portal Architecture', icon: <Play className="w-3.5 h-3.5" /> },
        { id: 'tab4', label: 'Security Infrastructure', icon: <ShieldCheck className="w-3.5 h-3.5" /> }
      ];
    } else if (id === 'daavi') {
      return [
        { id: 'tab1', label: 'Progressive Roadmap', icon: <MapPin className="w-3.5 h-3.5" /> },
        { id: 'tab2', label: 'Geospatial Validation', icon: <Code2 className="w-3.5 h-3.5" /> },
        { id: 'tab3', label: 'AI Investment Matching', icon: <Cpu className="w-3.5 h-3.5" /> },
        { id: 'tab4', label: 'Anti-Fraud System', icon: <BadgePercent className="w-3.5 h-3.5" /> }
      ];
    } else if (id === 'pdf-to-sql-pipeline') {
      return [
        { id: 'tab1', label: '3-Layer Architecture', icon: <Layers className="w-3.5 h-3.5" /> },
        { id: 'tab2', label: 'Multi-Schema Support', icon: <Code2 className="w-3.5 h-3.5" /> },
        { id: 'tab3', label: 'Cost Benchmark', icon: <Table className="w-3.5 h-3.5" /> },
        { id: 'tab4', label: 'Lightweight Footprint', icon: <Zap className="w-3.5 h-3.5" /> }
      ];
    } else if (id === 'governance-ops') {
      return [
        { id: 'tab1', label: 'The Architecture', icon: <Layers className="w-3.5 h-3.5" /> },
        { id: 'tab2', label: 'Policy Versioning', icon: <Cpu className="w-3.5 h-3.5" /> },
        { id: 'tab3', label: 'Live Round-Trip', icon: <Code2 className="w-3.5 h-3.5" /> },
        { id: 'tab4', label: 'Evidence Return', icon: <ShieldCheck className="w-3.5 h-3.5" /> }
      ];
    }
    return [];
  };

  return (
    <section className="w-full py-16 bg-zinc-950 border-t border-zinc-900 font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        
        {/* Flagship Section Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>Verifiable Systems Grid</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Applied ML &amp; Reliability Frameworks
          </h2>
          <p className="text-zinc-400 max-w-3xl text-sm md:text-base leading-relaxed">
            Technical summaries of deep-dive systems, benchmarking architectures, and self-healing data infrastructure built for enterprise reliability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => {
            const isExpanded = expandedId === project.id;
            const tabs = getTabConfig(project.id);
            return (
              <div 
                key={project.id}
                className={`bg-zinc-900/10 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 group hover:shadow-2xl hover:shadow-black/40 ${
                  isExpanded ? 'md:col-span-2 hover:scale-100' : 'hover:scale-[1.01]'
                }`}
              >
                <div className="space-y-6">
                  
                  {/* Header: Title & Badges */}
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 tracking-tight flex items-center gap-2">
                        {project.title}
                        {project.id === 'governance-ops' && (
                          <span className="p-1 bg-purple-500/10 border border-purple-500/20 rounded text-purple-400 text-[9px] font-mono tracking-widest uppercase">
                            GovernanceOps
                          </span>
                        )}
                        {project.id === 'governance-control-tower' && (
                          <span className="p-1 bg-blue-500/10 border border-blue-500/20 rounded text-blue-400 text-[9px] font-mono tracking-widest uppercase">
                            ADK Supervisor
                          </span>
                        )}
                        {project.id === 'model-risk-dashboard' && (
                          <span className="p-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-emerald-400 text-[9px] font-mono tracking-widest uppercase">
                            Model Risk
                          </span>
                        )}
                        {project.id === 'pdf-to-sql-pipeline' && (
                          <span className="p-1 bg-blue-500/10 border border-blue-500/20 rounded text-blue-450 text-[9px] font-mono tracking-widest uppercase">
                            Data Eng
                          </span>
                        )}
                        {project.id === 'daavi' && (
                          <span className="p-1 bg-red-500/10 border border-red-500/20 rounded text-red-500 text-[9px] font-mono tracking-widest uppercase">
                            Verification
                          </span>
                        )}
                        {project.id === 'luminamed-v2' && (
                          <span className="p-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-emerald-500 text-[9px] font-mono tracking-widest uppercase">
                            Healthcare
                          </span>
                        )}
                        {project.id === 'sme-growth-copilot' && (
                          <span className="p-1 bg-yellow-500/10 border border-yellow-500/20 rounded text-yellow-500 text-[9px] font-mono tracking-widest uppercase">
                            Flagship
                          </span>
                        )}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.badges.map((b, i) => (
                          <span 
                            key={i} 
                            className={`inline-block border px-2.5 py-0.5 rounded-full text-[10px] tracking-wider uppercase ${getBadgeColor(b.color)}`}
                          >
                            {b.label}: {b.value}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.dedication ? (
                      <p className="text-xs text-zinc-500 italic leading-normal font-sans">{project.dedication}</p>
                    ) : (
                      <p className="text-xs text-zinc-400 leading-normal font-sans">{project.headline}</p>
                    )}
                  </div>

                  {/* Metrics Blocks */}
                  <div className="grid grid-cols-3 gap-2 border-y border-zinc-900 py-4 font-mono text-center md:text-left">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <span className="block text-sm md:text-base font-extrabold text-white tracking-tight">{m.value}</span>
                        <span className="text-[9px] text-zinc-500 uppercase tracking-widest block leading-tight">{m.label}</span>
                      </div>
                    ))}
                    {project.id === 'sme-growth-copilot' && (
                      <>
                        <div className="hidden md:block space-y-0.5">
                          <span className="block text-sm md:text-base font-extrabold text-emerald-400 tracking-tight">18</span>
                          <span className="text-[9px] text-zinc-500 uppercase tracking-widest block leading-tight">Passing Tests</span>
                        </div>
                        <div className="hidden md:block space-y-0.5">
                          <span className="block text-sm md:text-base font-extrabold text-purple-400 tracking-tight font-sans">Funnel Math</span>
                          <span className="text-[9px] text-zinc-500 uppercase tracking-widest block leading-tight">Drop-Off Calculations</span>
                        </div>
                      </>
                    )}
                    {project.id === 'luminamed-v2' && (
                      <>
                        <div className="hidden md:block space-y-0.5">
                          <span className="block text-sm md:text-base font-extrabold text-emerald-400 tracking-tight">FHIR R4</span>
                          <span className="text-[9px] text-zinc-500 uppercase tracking-widest block leading-tight">Standardized Integration</span>
                        </div>
                        <div className="hidden md:block space-y-0.5">
                          <span className="block text-sm md:text-base font-extrabold text-purple-400 tracking-tight font-sans">HIPAA-aligned</span>
                          <span className="text-[9px] text-zinc-500 uppercase tracking-widest block leading-tight">Design</span>
                        </div>
                      </>
                    )}
                    {project.id === 'daavi' && (
                      <>
                        <div className="hidden md:block space-y-0.5">
                          <span className="block text-sm md:text-base font-extrabold text-emerald-400 tracking-tight">100%</span>
                          <span className="text-[9px] text-zinc-500 uppercase tracking-widest block leading-tight">Verified Catalog</span>
                        </div>
                        <div className="hidden md:block space-y-0.5">
                          <span className="block text-sm md:text-base font-extrabold text-purple-400 tracking-tight">Diaspora</span>
                          <span className="text-[9px] text-zinc-500 uppercase tracking-widest block leading-tight">NA/EU Focus</span>
                        </div>
                      </>
                    )}
                    {project.id === 'pdf-to-sql-pipeline' && (
                      <>
                        <div className="hidden md:block space-y-0.5">
                          <span className="block text-sm md:text-base font-extrabold text-emerald-400 tracking-tight">Sovereign</span>
                          <span className="text-[9px] text-zinc-500 uppercase tracking-widest block leading-tight">Data By Design</span>
                        </div>
                        <div className="hidden md:block space-y-0.5">
                          <span className="block text-sm md:text-base font-extrabold text-purple-400 tracking-tight font-sans">CPU-Only</span>
                          <span className="text-[9px] text-zinc-500 uppercase tracking-widest block leading-tight">Zero-GPU</span>
                        </div>
                      </>
                    )}
                    {project.id === 'governance-ops' && (
                      <>
                        <div className="hidden md:block space-y-0.5">
                          <span className="block text-sm md:text-base font-extrabold text-emerald-400 tracking-tight font-sans">Zero-LLM</span>
                          <span className="text-[9px] text-zinc-500 uppercase tracking-widest block leading-tight">Override</span>
                        </div>
                        <div className="hidden md:block space-y-0.5">
                          <span className="block text-sm md:text-base font-extrabold text-purple-400 tracking-tight">OSFI E-23</span>
                          <span className="text-[9px] text-zinc-500 uppercase tracking-widest block leading-tight">Governance Gate</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs leading-relaxed font-sans">{project.description}</p>

                  {/* Architecture List */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-zinc-700" />
                      system_components.log
                    </span>
                    <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-3.5 space-y-1.5 font-mono text-[10px] text-zinc-400">
                      {project.architecture.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <span className="text-blue-400 font-bold select-none">&gt;</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deep-Dive Spec Drawer Toggle */}
                  {project.hasDeepDive && (
                    <div className="pt-2">
                      <button
                        onClick={() => toggleDeepDive(project.id)}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-xs font-semibold text-zinc-300 hover:text-white rounded-lg transition-colors cursor-pointer"
                      >
                        {isExpanded ? (
                          <>
                            <Minus className="w-3.5 h-3.5 text-red-400" />
                            <span>Hide Deep-Dive Specs</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 text-blue-400" />
                            <span>Interactive Deep-Dive Specs</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  {/* Expanded Deep-Dive Specs Layout */}
                  {isExpanded && tabs.length > 0 && (
                    <div className="border border-zinc-850 bg-zinc-950 rounded-2xl p-6 mt-4 space-y-6 animate-fade-in shadow-inner">
                      
                      {/* Deep-Dive Tabs */}
                      <div className="flex flex-wrap gap-2 border-b border-zinc-900 pb-3">
                        {tabs.map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setDeepDiveTab(tab.id as any)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                              deepDiveTab === tab.id 
                                ? 'bg-blue-600/10 border border-blue-500/30 text-blue-400' 
                                : 'bg-zinc-900 border border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800'
                            }`}
                          >
                            {tab.icon}
                            <span>{tab.label}</span>
                          </button>
                        ))}
                      </div>

                      {/* Tab Contents */}
                      <div className="space-y-4 animate-fade-in font-sans text-xs">
                        
                        {/* ==============================================
                            GOVERNANCEOPS DEEP DIVE TABS
                            ============================================== */}
                        {project.id === 'governance-ops' && (
                          <>
                            {deepDiveTab === 'tab1' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">From Governance Decision to Runtime Enforcement</h4>
                                <p className="text-zinc-400 leading-relaxed font-sans">
                                  Inventory is the system of record: a risk officer sets autonomy level, permitted/forbidden tools, and thresholds. Agent fetches that policy live over HTTPS and enforces it inside a running agent process -- verified end-to-end against a real deployed instance.
                                </p>
                                <div className="p-4 bg-zinc-900 border border-zinc-850 rounded-xl space-y-2">
                                  <span className="font-bold text-white block flex items-center gap-1.5">
                                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                                    Enforcement Decisions
                                  </span>
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-[10px] font-mono mt-2">
                                    <div className="p-2 border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 rounded">
                                      ALLOW
                                      <span className="block text-[8px] text-zinc-555 mt-0.5">Confidence + tier meet threshold</span>
                                    </div>
                                    <div className="p-2 border border-orange-500/20 bg-orange-500/5 text-orange-400 rounded">
                                      REQUIRE_APPROVAL
                                      <span className="block text-[8px] text-zinc-555 mt-0.5">No rule matched -- safe default</span>
                                    </div>
                                    <div className="p-2 border border-red-500/20 bg-red-500/5 text-red-400 rounded">
                                      BLOCK
                                      <span className="block text-[8px] text-zinc-555 mt-0.5">Tool forbidden per Inventory record</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {deepDiveTab === 'tab2' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">Six Governance Primitives + SHA-256 Policy Versioning</h4>
                                <p className="text-zinc-400 leading-relaxed font-sans">
                                  Every runtime-policy change gets a version number and a content hash, so an enforcement decision is traceable to the exact policy state that produced it -- not just "the policy" as it looks today.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="p-3 bg-zinc-900 border border-zinc-850 rounded-xl space-y-1.5 font-mono text-[10px]">
                                    <span className="font-bold text-white block text-xs font-sans">Governance Primitives</span>
                                    <div className="space-y-1 text-zinc-400">
                                      <div className="border-b border-zinc-800/60 pb-1">Autonomy Tiering (L0-L4)</div>
                                      <div className="border-b border-zinc-800/60 pb-1">Tool Permission Scoping</div>
                                      <div className="border-b border-zinc-800/60 pb-1">Confidence Gating</div>
                                      <div className="border-b border-zinc-800/60 pb-1">HITL Checkpoints</div>
                                      <div className="border-b border-zinc-800/60 pb-1">Kill Switch</div>
                                      <div>Hash-Chained Audit Log</div>
                                    </div>
                                  </div>

                                  <div className="p-3 bg-zinc-900 border border-zinc-850 rounded-xl flex flex-col justify-center">
                                    <span className="font-bold text-white block text-xs mb-1">Versioned + Tamper-Evident</span>
                                    <p className="text-zinc-500 text-[11px] leading-relaxed font-sans">
                                      Lists are sorted before hashing so functionally-identical policies always hash identically. Every audit entry is HMAC-signed and hash-chained on the agent side.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}

                            {deepDiveTab === 'tab3' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">A Real, Live-Verified HTTPS Integration</h4>
                                <p className="text-zinc-400 leading-relaxed font-sans">
                                  Not a mockup: this is the actual call used to verify the round-trip against a production deployment.
                                </p>
                                <div className="space-y-1 bg-zinc-900 border border-zinc-850 p-3.5 rounded-xl font-mono text-[9px] text-zinc-300">
                                  <span className="text-[10px] text-zinc-550 uppercase tracking-wider block font-semibold mb-1">AgentGovernor.from_governanceops()</span>
                                  <pre className="overflow-x-auto">
{`governor = AgentGovernor.from_governanceops(
    ai_system_record_id="...",
    inventory_base_url="https://your-inventory.example.com/api/v1",
    secret_key="...", inventory_token="...",
)
outcome = governor.evaluate_action(
    "wire_transfer_x", confidence=0.99,
    autonomy_level=AutonomyLevel.L4_FULL_AUTONOMY,
    tool_name="wire_transfer",
)
# outcome.allowed is False -- forbidden per Inventory's record`}
                                  </pre>
                                </div>
                              </div>
                            )}

                            {deepDiveTab === 'tab4' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">Closing the Loop: Evidence Returned to Inventory</h4>
                                <div className="bg-zinc-900 border border-zinc-855 p-4 rounded-xl space-y-2 font-mono text-[11px]">
                                  <span className="text-zinc-500 font-bold block uppercase tracking-wider text-xs font-sans">The Return Path</span>
                                  <pre className="overflow-x-auto text-[10px] text-zinc-350 bg-zinc-950 p-3 border border-zinc-800 rounded">
{`# After a denial, report it back as evidence
governor.report_event(governor.audit_log.entries[-1])
# POST /models/RECORD_ID/runtime-events on Inventory's side --
# stores the event, tied to the policy version + hash
# that actually governed the decision.`}
                                  </pre>
                                </div>
                              </div>
                            )}
                          </>
                        )}

                        {/* ==============================================
                            PDF-TO-SQL PIPELINE DEEP DIVE TABS
                            ============================================== */}
                        {project.id === 'pdf-to-sql-pipeline' && (
                          <>
                            {deepDiveTab === 'tab1' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">The 3-Layer Local-First Document Intelligence Flow</h4>
                                <p className="text-zinc-400 leading-relaxed font-sans">
                                  Ingests sensitive files safely on a local CPU context without shipping data to external cloud OCR APIs.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                                  <div className="p-4 bg-zinc-900 border border-zinc-850 rounded-xl space-y-1">
                                    <span className="font-bold text-blue-400 block text-xs">Layer 1: Docling OCR</span>
                                    <p className="text-zinc-500 text-[11px] leading-relaxed">
                                      Executes layout-structure extraction locally on host CPU. No internet outbound required.
                                    </p>
                                  </div>
                                  <div className="p-4 bg-zinc-900 border border-zinc-850 rounded-xl space-y-1">
                                    <span className="font-bold text-purple-400 block text-xs">Layer 2: Gemini Flash-Lite</span>
                                    <p className="text-zinc-500 text-[11px] leading-relaxed">
                                      Parses dense layouts and table strings to raw JSON formats via structured prompting schemas ($0.10/1M tokens).
                                    </p>
                                  </div>
                                  <div className="p-4 bg-zinc-900 border border-zinc-850 rounded-xl space-y-1">
                                    <span className="font-bold text-emerald-400 block text-xs">Layer 3: Deterministic Validator</span>
                                    <p className="text-zinc-500 text-[11px] leading-relaxed">
                                      Performs balance math audits (reconciles sum rows against cell elements) via Pydantic v2 schemas.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}

                            {deepDiveTab === 'tab2' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">Multi-Schema Support (Pydantic v2 Types)</h4>
                                <p className="text-zinc-400 leading-relaxed font-sans">
                                  Supports three distinct enterprise document structures out-of-the-box.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                                  <div className="p-3 bg-zinc-900 border border-zinc-850 rounded-xl">
                                    <span className="font-bold text-white block text-xs">Bank Statements</span>
                                    <span className="text-[10px] text-zinc-500 block mt-1">Tracks transactions, balance values, and deposits.</span>
                                  </div>
                                  <div className="p-3 bg-zinc-900 border border-zinc-850 rounded-xl">
                                    <span className="font-bold text-white block text-xs">Invoices</span>
                                    <span className="text-[10px] text-zinc-550 block mt-1">Reconciles line-item totals and tax fields.</span>
                                  </div>
                                  <div className="p-3 bg-zinc-900 border border-zinc-850 rounded-xl">
                                    <span className="font-bold text-white block text-xs">Clinical Notes</span>
                                    <span className="text-[10px] text-zinc-555 block mt-1">Extracts diagnoses codes and provider records.</span>
                                  </div>
                                </div>
                              </div>
                            )}

                            {deepDiveTab === 'tab3' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">Cost Benchmark Comparison</h4>
                                <p className="text-zinc-400 leading-relaxed font-sans">
                                  Calculates annual savings comparing this pipeline against cloud endpoints based on 10,000 document extractions.
                                </p>
                                <div className="border border-zinc-900 bg-zinc-950 rounded-xl overflow-hidden mb-2">
                                  <table className="w-full text-left border-collapse text-[11px] font-mono">
                                    <thead>
                                      <tr className="bg-zinc-900 border-b border-zinc-800 text-zinc-400">
                                        <th className="p-2.5 font-bold">API Provider</th>
                                        <th className="p-2.5 font-bold">Price per Page</th>
                                        <th className="p-2.5 font-bold text-right">Cost per 10K docs</th>
                                      </tr>
                                    </thead>
                                    <tbody className="text-zinc-350 divide-y divide-zinc-900">
                                      <tr>
                                        <td className="p-2.5">Google Document AI</td>
                                        <td className="p-2.5">$0.06 / page</td>
                                        <td className="p-2.5 text-right text-red-400 font-semibold">$2,400.00</td>
                                      </tr>
                                      <tr>
                                        <td className="p-2.5">AWS Textract</td>
                                        <td className="p-2.5">$0.015 / page</td>
                                        <td className="p-2.5 text-right text-red-400 font-semibold">$600.00</td>
                                      </tr>
                                      <tr className="bg-blue-600/5 text-blue-300">
                                        <td className="p-2.5 font-bold">This Pipeline (Docling + Gemini)</td>
                                        <td className="p-2.5 font-bold">$0.0002 / page ($0.0008/doc)</td>
                                        <td className="p-2.5 text-right font-bold text-emerald-400">$8.00</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <span className="text-[10px] text-zinc-550 font-mono italic block text-center">
                                  Annual savings: $2,392.00+ relative to Google Doc AI (based on 10,000 files/yr)
                                </span>
                              </div>
                            )}

                            {deepDiveTab === 'tab4' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">Lightweight SDK Footprint</h4>
                                <p className="text-zinc-400 leading-relaxed font-sans">
                                  Migrating dependencies to clean the build pipeline.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="p-4 bg-zinc-900 border border-zinc-850 rounded-xl space-y-1.5">
                                    <span className="font-bold text-white block">google-genai SDK Migration</span>
                                    <p className="text-zinc-550 text-[11px] leading-relaxed">
                                      Upgraded codebases to use the modern, lightweight `google-genai` SDK rather than legacy enterprise SDKs, preventing bloat.
                                    </p>
                                  </div>
                                  <div className="p-4 bg-zinc-900 border border-zinc-850 rounded-xl space-y-1.5">
                                    <span className="font-bold text-white block">Dependency Graph Reduction</span>
                                    <div className="flex items-center justify-between text-[11px] font-mono border-b border-zinc-800 pb-2 mb-2">
                                      <span className="text-zinc-550">Legacy Dependencies:</span>
                                      <span className="text-red-400 font-bold">200+</span>
                                    </div>
                                    <div className="flex items-center justify-between text-[11px] font-mono">
                                      <span className="text-zinc-550">New Direct Dependencies:</span>
                                      <span className="text-emerald-400 font-bold">12</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </>
                        )}

                        {/* ==============================================
                            DAAVI DEEP DIVE TABS
                            ============================================== */}
                        {project.id === 'daavi' && (
                          <>
                            {deepDiveTab === 'tab1' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">The Progressive Development Roadmap</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                  <div className="p-4 bg-zinc-900 border border-zinc-850 rounded-xl space-y-1">
                                    <span className="font-bold text-white block text-xs">Phase 1: Trust Infrastructure</span>
                                    <p className="text-zinc-555 text-[11px] leading-relaxed">
                                      Developing a 3-tier validation checklist mapping properties against government spatial zones, ensuring zero duplicate land claims.
                                    </p>
                                  </div>
                                  <div className="p-4 bg-zinc-900 border border-zinc-850 rounded-xl space-y-1">
                                    <span className="font-bold text-white block text-xs">Phase 2: Discovery &amp; Intelligence</span>
                                    <p className="text-zinc-555 text-[11px] leading-relaxed">
                                      Integrating interactive Leaflet maps with custom PostGIS querying, paired with recommendations suggesting similar properties based on spatial boundaries.
                                    </p>
                                  </div>
                                  <div className="p-4 bg-zinc-900 border border-zinc-850 rounded-xl space-y-1">
                                    <span className="font-bold text-white block text-xs">Phase 3/4: Scaling &amp; Fractions</span>
                                    <p className="text-zinc-555 text-[11px] leading-relaxed">
                                      Fractional real estate tokens mapping shared investments, combined with regression models predicting long-term neighborhood value appreciation.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}

                            {deepDiveTab === 'tab2' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">Geospatial Validation Queries (PostGIS)</h4>
                                <p className="text-zinc-400 leading-relaxed">
                                  Validates user-submitted coordinate points against official land registry polygons inside NestJS via raw TypeORM queries.
                                </p>
                                <div className="space-y-1 bg-zinc-900 border border-zinc-850 p-3.5 rounded-xl font-mono text-[9px] text-zinc-300">
                                  <span className="text-[10px] text-zinc-550 uppercase tracking-wider block font-semibold mb-1">ST_Contains Coordinate Validation</span>
                                  <pre className="overflow-x-auto">
{`async validatePropertyBoundaries(latitude: number, longitude: number): Promise<boolean> {
  // Query returns true if property coordinate falls within official zone polygons
  const result = await this.connection.query(\`
    SELECT ST_Contains(
      zone.geom, 
      ST_SetSRID(ST_Point(\$1, \$2), 4326)
    ) as "isValid"
    FROM official_land_zones zone
    WHERE zone.status = 'VERIFIED_ACTIVE'
    LIMIT 1;
  \`, [longitude, latitude]);

  return result[0]?.isValid || false;
}`}
                                  </pre>
                                </div>
                              </div>
                            )}

                            {deepDiveTab === 'tab3' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">AI Investment Matching Engine (pgvector)</h4>
                                <p className="text-zinc-400 leading-relaxed">
                                  Matches investor profiles against property descriptions using OpenAI embeddings and postgres distance operators.
                                </p>
                                <div className="space-y-1 bg-zinc-900 border border-zinc-850 p-3.5 rounded-xl font-mono text-[9px] text-zinc-300">
                                  <span className="text-[10px] text-zinc-550 uppercase tracking-wider block font-semibold mb-1">pgvector Cosine Distance Query</span>
                                  <pre className="overflow-x-auto">
{`// Querying Qdrant / pgvector database inside custom match engine
const matchingProperties = await this.propertyRepository
  .createQueryBuilder('property')
  .orderBy('property.embedding <=> :investorProfileEmbedding') // Cosine distance operator
  .setParameter('investorProfileEmbedding', JSON.stringify(embeddingArray))
  .limit(5)
  .getMany();`}
                                  </pre>
                                </div>
                              </div>
                            )}

                            {deepDiveTab === 'tab4' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">Anti-Fraud Transparency &amp; Currency Matrix</h4>
                                <p className="text-zinc-400 leading-relaxed">
                                  Standardizes property values using the Price/Sqft index and real-time conversions to prevent overpricing fraud.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="bg-zinc-900/40 border border-zinc-850 rounded-xl p-4 space-y-2 font-mono">
                                    <div className="flex items-center gap-1 text-white">
                                      <Coins className="w-4 h-4 text-yellow-500" />
                                      <span>Real-Time Currency Conversion Matrix</span>
                                    </div>
                                    <div className="text-[10px] space-y-1 text-zinc-555">
                                      <div>1 USD = 14.80 GHS (Ghana Cedi)</div>
                                      <div>1 USD = 131.50 KES (Kenya Shilling)</div>
                                      <div>1 USD = 1,480.00 NGN (Nigeria Naira)</div>
                                      <div>1 USD = 18.50 ZAR (South Africa Rand)</div>
                                    </div>
                                  </div>
                                  <div className="bg-zinc-900/40 border border-zinc-850 rounded-xl p-4 flex flex-col justify-center space-y-1">
                                    <span className="font-bold text-white block">Price/Sqft Verification Metric</span>
                                    <p className="text-zinc-555 text-[11px] leading-relaxed">
                                      Compares average listing price per square foot against neighboring historical records. Overpricing deviations exceeding 15% are auto-flagged for human review.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </>
                        )}

                        {/* ==============================================
                            LUMINAMED AI v2.0 DEEP DIVE TABS
                            ============================================== */}
                        {project.id === 'luminamed-v2' && (
                          <>
                            {deepDiveTab === 'tab1' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">The Supervisor Orchestration (4-Agent Loop)</h4>
                                <p className="text-zinc-400 leading-relaxed">
                                  Coordinates clinical image parsing and diagnostics. A validation loop audits output for hallucinations.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-2 font-mono text-[10px] text-zinc-450 text-center mb-4">
                                  <div className="border border-zinc-855 bg-zinc-900/60 p-2.5 rounded-lg flex flex-col justify-center">
                                    <span className="font-bold text-blue-400 block mb-1">1. Findings Agent</span>
                                    VLM visual scan checks
                                  </div>
                                  <div className="border border-zinc-855 bg-zinc-900/60 p-2.5 rounded-lg flex flex-col justify-center">
                                    <span className="font-bold text-purple-400 block mb-1">2. Impression Agent</span>
                                    Draft diagnostic summary
                                  </div>
                                  <div className="border border-zinc-855 bg-zinc-900/60 p-2.5 rounded-lg flex flex-col justify-center">
                                    <span className="font-bold text-orange-400 block mb-1">3. Coding Agent</span>
                                    ICD-10 &amp; CPT billing code
                                  </div>
                                  <div className="border border-zinc-855 bg-zinc-900/60 p-2.5 rounded-lg flex flex-col justify-center">
                                    <span className="font-bold text-emerald-400 block mb-1">4. Verification Agent</span>
                                    Checks for hallucinations
                                  </div>
                                </div>

                                <div className="space-y-1 bg-zinc-900 border border-zinc-855 p-3.5 rounded-xl font-mono text-[9px] text-zinc-300">
                                  <span className="text-[10px] text-zinc-550 uppercase tracking-wider block font-semibold mb-1">AgentSupervisor LangGraph Definition</span>
                                  <pre className="overflow-x-auto">
{`class AgentSupervisorState(TypedDict):
    messages: Annotated[Sequence[BaseMessage], operator.add]
    next_step: str
    clinical_findings: dict
    hallucination_score: float

# Routing node logic
def route_next_agent(state: AgentSupervisorState):
    if state["hallucination_score"] > 0.05:
        return "verifier"
    elif not state["clinical_findings"]:
        return "findings_agent"
    return "impression_agent"`}
                                  </pre>
                                </div>
                              </div>
                            )}

                            {deepDiveTab === 'tab2' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">Qdrant Vector Database Knowledge Store (RAG)</h4>
                                <p className="text-zinc-400 leading-relaxed">
                                  Sovereign clinical data mapping holding verified medical protocols, mapped to FastAPI.
                                </p>
                                <div className="bg-zinc-900 border border-zinc-855 p-4 rounded-xl space-y-3 font-mono text-[11px] text-zinc-400">
                                  <div className="flex items-center gap-2 text-white">
                                    <Database className="w-4 h-4 text-emerald-400" />
                                    <span>Knowledge Ingestion Pipeline Flow</span>
                                  </div>
                                  <p className="text-xs text-zinc-550 font-sans leading-relaxed">
                                    Diagnostic guidelines and FHIR schemas are chunked, embedded using domain-specific models, and uploaded to a local Qdrant instance. FastAPI queries vectors to check LLM impressions for clinical soundness.
                                  </p>
                                  <div className="p-2 bg-zinc-950 rounded border border-zinc-800 text-[10px] text-blue-400">
                                    GET /api/v2/rag/query?db=qdrant&amp;threshold=0.88
                                  </div>
                                </div>
                              </div>
                            )}

                            {deepDiveTab === 'tab3' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">Dual-Portal Production Channels</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="p-4 bg-zinc-900 border border-zinc-855 rounded-xl space-y-2">
                                    <span className="font-bold text-white block flex items-center gap-1.5">
                                      <Zap className="w-4 h-4 text-orange-400" />
                                      Radiologist Portal (Streamlit)
                                    </span>
                                    <p className="text-zinc-550 text-[11px] leading-relaxed">
                                      Streamlit dashboard integrating Plotly mapping tools. Allows clinicians to upload chest X-rays, audit agent ICD-10 drafts, and check confidence intervals.
                                    </p>
                                  </div>

                                  <div className="p-4 bg-zinc-900 border border-zinc-855 rounded-xl space-y-2">
                                    <span className="font-bold text-white block flex items-center gap-1.5">
                                      <HeartPulse className="w-4 h-4 text-emerald-400" />
                                      Patient Portal (Next.js 15)
                                    </span>
                                    <p className="text-zinc-555 text-[11px] leading-relaxed font-sans">
                                      Tailwind UI translating dense medical records. Provides 3 reading levels:
                                      <br />
                                      <strong className="text-zinc-300">â€¢ Basic</strong> (non-technical summaries)
                                      <br />
                                      <strong className="text-zinc-300">â€¢ Intermediate</strong> (vocabulary assistance)
                                      <br />
                                      <strong className="text-zinc-300">â€¢ Advanced</strong> (original radiology text)
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}

                            {deepDiveTab === 'tab4' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">Healthcare Security &amp; Compliance</h4>
                                <p className="text-zinc-400 leading-relaxed">
                                  Ensuring data sovereignty and HIPAA-aligned design in clinical environments.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                                  <div className="p-3 bg-zinc-900 border border-zinc-855 rounded-xl">
                                    <span className="font-bold text-white block text-xs">Zero PHI Storage</span>
                                    <span className="text-[10px] text-zinc-550 block mt-1">Payloads de-identified on upload; no patient credentials stored.</span>
                                  </div>
                                  <div className="p-3 bg-zinc-900 border border-zinc-855 rounded-xl">
                                    <span className="font-bold text-white block text-xs">Sovereignty Design</span>
                                    <span className="text-[10px] text-zinc-555 block mt-1">Local container setup prevents leaks to external servers.</span>
                                  </div>
                                  <div className="p-3 bg-zinc-900 border border-zinc-855 rounded-xl">
                                    <span className="font-bold text-white block text-xs">End-to-End Encryption</span>
                                    <span className="text-[10px] text-zinc-555 block mt-1">All messages encrypted in transit (TLS 1.3/AES-256).</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </>
                        )}

                        {/* ==============================================
                            SME GROWTH CO-PILOT DEEP DIVE TABS
                            ============================================== */}
                        {project.id === 'sme-growth-copilot' && (
                          <>
                            {deepDiveTab === 'tab1' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">5-Agent LangGraph Orchestrator Flow</h4>
                                <p className="text-zinc-400 leading-relaxed">
                                  A cyclic supervisor workflow coordinating five independent agents, storing global business variables dynamically.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2 font-mono text-[10px] text-zinc-450 text-center">
                                  <div className="border border-zinc-850 bg-zinc-900/60 p-2.5 rounded-lg flex flex-col justify-center min-h-[90px]">
                                    <span className="font-bold text-blue-400 block mb-1">1. Funnel Analyst</span>
                                    Locates data drop-offs
                                  </div>
                                  <div className="border border-zinc-850 bg-zinc-900/60 p-2.5 rounded-lg flex flex-col justify-center min-h-[90px]">
                                    <span className="font-bold text-purple-400 block mb-1">2. Experimenter</span>
                                    Generates suggestions
                                  </div>
                                  <div className="border border-zinc-850 bg-zinc-900/60 p-2.5 rounded-lg flex flex-col justify-center min-h-[90px]">
                                    <span className="font-bold text-orange-400 block mb-1">3. ICE Ranker</span>
                                    Ranks marketing ideas
                                  </div>
                                  <div className="border border-zinc-850 bg-zinc-900/60 p-2.5 rounded-lg flex flex-col justify-center min-h-[90px]">
                                    <span className="font-bold text-emerald-400 block mb-1">4. Copywriter</span>
                                    Creates Slack copies
                                  </div>
                                  <div className="border border-zinc-850 bg-zinc-900/60 p-2.5 rounded-lg flex flex-col justify-center min-h-[90px]">
                                    <span className="font-bold text-white block mb-1">5. Explainer</span>
                                    Compiles strategic CV
                                  </div>
                                </div>
                              </div>
                            )}

                            {deepDiveTab === 'tab2' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">Production Code Snippets</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="space-y-1 bg-zinc-900 border border-zinc-855 p-3.5 rounded-xl font-mono text-[9px] text-zinc-300">
                                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-semibold mb-1">LangGraph Graph Setup</span>
                                    <pre className="overflow-x-auto">
{`from langgraph.graph import StateGraph

# Initialize state compiler
workflow = StateGraph(GrowthAgentState)

# Nodes mapping
workflow.add_node("analyst", run_funnel_agent)
workflow.add_node("generator", run_ideas_agent)
workflow.add_node("ranker", run_ice_agent)

# Conditional flow entry
workflow.set_entry_point("analyst")
workflow.add_edge("analyst", "generator")
workflow.add_edge("generator", "ranker")`}
                                    </pre>
                                  </div>

                                  <div className="space-y-1 bg-zinc-900 border border-zinc-855 p-3.5 rounded-xl font-mono text-[9px] text-zinc-300">
                                    <span className="text-[10px] text-zinc-550 uppercase tracking-wider block font-semibold mb-1">Tenacity Retry &amp; Slack Webhook</span>
                                    <pre className="overflow-x-auto">
{`from tenacity import retry, stop_after_attempt, wait_exponential

@retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=2, max=10))
def dispatch_slack_alert(webhook_url: str, payload: dict):
    # Dispatch HTTP post request
    response = requests.post(
        webhook_url, 
        json={"text": payload["summary"]},
        headers={"Content-Type": "application/json"}
    )
    response.raise_for_status()
    return response.json()`}
                                    </pre>
                                  </div>
                                </div>
                              </div>
                            )}

                            {deepDiveTab === 'tab3' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">Core Interface Components</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="p-3 bg-zinc-900 border border-zinc-855 rounded-xl space-y-1">
                                    <span className="font-bold text-white block">1. Consumer Landing Page</span>
                                    <p className="text-zinc-550 text-[11px] leading-relaxed">Sleek client-facing page explaining benefits, pipeline outputs, and consultant-free consulting.</p>
                                  </div>
                                  <div className="p-3 bg-zinc-900 border border-zinc-855 rounded-xl space-y-1">
                                    <span className="font-bold text-white block">2. Business Analysis Form</span>
                                    <p className="text-zinc-550 text-[11px] leading-relaxed">Data collection form asking for visitor traffic, signup rates, checkout drop-offs, and product tags.</p>
                                  </div>
                                  <div className="p-3 bg-zinc-900 border border-zinc-855 rounded-xl space-y-1">
                                    <span className="font-bold text-white block">3. Performance Dashboard</span>
                                    <p className="text-zinc-555 text-[11px] leading-relaxed font-sans">Displays live conversion funnel charts, prioritized ICE backlogs, and generated ad copy snippets.</p>
                                  </div>
                                  <div className="p-3 bg-zinc-900 border border-zinc-855 rounded-xl space-y-1">
                                    <span className="font-bold text-white block">4. Slack Ingest Pipeline</span>
                                    <p className="text-zinc-555 text-[11px] leading-relaxed font-sans">Real-time webhook alert pushing growth summaries and copy scripts directly to Slack channels.</p>
                                  </div>
                                </div>
                              </div>
                            )}

                            {deepDiveTab === 'tab4' && (
                              <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white">The ICE Prioritization Framework</h4>
                                <p className="text-zinc-400 leading-relaxed">
                                  SMEs need a mathematical standard to select ideas without subjective guessing.
                                </p>
                                <div className="bg-zinc-900 border border-zinc-855 rounded-xl p-5 text-center flex flex-col items-center justify-center space-y-3">
                                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Mathematical Formula</span>
                                  <div className="font-mono text-lg md:text-xl font-extrabold text-blue-400 px-4 py-2 border border-blue-500/20 bg-blue-500/5 rounded-lg inline-block">
                                    ICE Score = (Impact &times; Confidence) &divide; Effort
                                  </div>
                                  <p className="text-[11px] text-zinc-550 max-w-lg leading-relaxed">
                                    Evaluates whether a marketing campaign should be run. Impact measures scale, Confidence represents historical execution validation, and Effort represents resources.
                                  </p>
                                </div>
                              </div>
                            )}
                          </>
                        )}

                      </div>

                    </div>
                  )}

                </div>

                {/* Links Row */}
                {project.links && project.links.length > 0 && !isExpanded && (
                  <div className="flex gap-3 pt-6 mt-6 border-t border-zinc-900/60">
                    {project.links.map((link, idx) => (
                      <a 
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 hover:text-white border border-zinc-900 hover:border-zinc-850 bg-zinc-950 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                      >
                        {link.icon}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* ==============================================
            HISTORICAL & HACKATHON SYSTEMS SUB-GRID
            ============================================== */}
        <div className="space-y-6 pt-12 border-t border-zinc-900">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-400" />
              Historical &amp; Hackathon Systems
            </h3>
            <p className="text-zinc-550 text-xs font-sans">
              Secondary system MVPs and hackathon entries built for algorithmic execution and local commerce validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {historicalSystems.map((sys, idx) => (
              <div 
                key={idx} 
                className="bg-zinc-900/10 border border-zinc-900 hover:border-zinc-855 hover:bg-zinc-900/15 rounded-xl p-5 flex flex-col justify-between transition-all duration-300 group hover:shadow-lg hover:shadow-black/30"
              >
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {sys.title}
                    </h4>
                    <p className="text-[11px] text-zinc-455 leading-relaxed font-sans">{sys.headline}</p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {sys.techStack.map((tech, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="inline-block bg-zinc-950 border border-zinc-900/80 px-2 py-0.5 rounded text-[9px] font-mono text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-zinc-500 text-[11px] leading-relaxed font-sans">{sys.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
