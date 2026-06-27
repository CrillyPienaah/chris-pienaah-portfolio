'use client';

import React, { useEffect } from 'react';
import { X, Cpu, Server, CheckCircle2, AlertTriangle, Play, HelpCircle } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // System diagrams styled in clean CSS boxes and borders
  const renderArchitectureDiagram = (id: string) => {
    switch (id) {
      case 'governance-control-tower':
        return (
          <div className="space-y-4 font-mono text-[11px] text-zinc-400">
            <div className="flex justify-center">
              <div className="border border-blue-500/50 bg-blue-950/20 text-blue-400 px-3 py-1.5 rounded text-center min-w-[150px]">
                CI/CD / API Client
              </div>
            </div>
            
            <div className="flex justify-center text-blue-500/50">↓ Model Package Ingestion</div>
            
            <div className="flex justify-center">
              <div className="border border-purple-500/60 bg-purple-950/30 text-purple-300 px-4 py-2 rounded text-center font-bold min-w-[200px] border-dashed">
                Governance Supervisor Agent
              </div>
            </div>

            <div className="flex justify-center text-purple-500/30">
              <div className="h-4 w-[240px] border-x border-dashed"></div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="border border-zinc-850 bg-zinc-900/60 p-1.5 rounded text-center">
                <span className="text-zinc-200 block font-semibold mb-0.5">Regulatory</span>
                OSFI E-23 Check
              </div>
              <div className="border border-zinc-850 bg-zinc-900/60 p-1.5 rounded text-center">
                <span className="text-zinc-200 block font-semibold mb-0.5">Model Risk</span>
                Fairness/Bias Check
              </div>
              <div className="border border-zinc-850 bg-zinc-900/60 p-1.5 rounded text-center">
                <span className="text-zinc-200 block font-semibold mb-0.5">Reliability</span>
                PSI/Drift Check
              </div>
            </div>

            <div className="flex justify-center text-purple-500/30">
              <div className="h-4 w-[240px] border-x border-dashed"></div>
            </div>

            <div className="flex justify-center">
              <div className="border border-emerald-500/50 bg-emerald-950/20 text-emerald-400 px-4 py-2 rounded text-center min-w-[200px]">
                Deterministic Policy Engine
                <span className="block text-[9px] text-zinc-500 font-normal mt-0.5">Rule: llm_override_possible = False</span>
              </div>
            </div>

            <div className="flex justify-center text-emerald-500/50">↓ Final Score / Gate</div>

            <div className="flex justify-around items-center pt-1 border-t border-zinc-800">
              <div className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> DEPLOY (AIR &gt; 0.8)
              </div>
              <div className="flex items-center gap-1 text-red-400">
                <AlertTriangle className="w-3.5 h-3.5" /> BLOCK (Fairness Breach)
              </div>
            </div>
          </div>
        );

      case 'sme-growth-copilot':
        return (
          <div className="space-y-4 font-mono text-[11px] text-zinc-400">
            <div className="flex items-center justify-between border border-zinc-800 bg-zinc-900/40 p-2 rounded">
              <div className="flex items-center gap-1 text-zinc-200">
                <Server className="w-3 h-3 text-blue-400" /> Ingest
              </div>
              <span>User Funnel / CSV Ingestion</span>
            </div>

            <div className="flex justify-center text-blue-500/30">↓</div>

            <div className="grid grid-cols-2 gap-2">
              <div className="border border-zinc-850 bg-zinc-900/60 p-2 rounded">
                <span className="text-zinc-200 block font-semibold mb-0.5">1. Funnel Analyst</span>
                Locate drop-off rates
              </div>
              <div className="border border-zinc-850 bg-zinc-900/60 p-2 rounded">
                <span className="text-zinc-200 block font-semibold mb-0.5">2. Idea Generator</span>
                Formulate marketing ideas
              </div>
            </div>

            <div className="flex justify-center text-blue-500/30">↓</div>

            <div className="grid grid-cols-2 gap-2">
              <div className="border border-zinc-850 bg-zinc-900/60 p-2 rounded">
                <span className="text-zinc-200 block font-semibold mb-0.5">3. ICE Ranker</span>
                Score by Impact/Confidence/Effort
              </div>
              <div className="border border-zinc-850 bg-zinc-900/60 p-2 rounded">
                <span className="text-zinc-200 block font-semibold mb-0.5">4. Copywriter</span>
                Generate email &amp; slack scripts
              </div>
            </div>

            <div className="flex justify-center text-blue-500/30">↓</div>

            <div className="border border-purple-500/50 bg-purple-950/20 text-purple-300 p-2 rounded text-center">
              <span className="font-semibold block text-white">5. Explainer Supervisor</span>
              Synthesize results into unified Markdown CV
            </div>

            <div className="flex justify-center text-purple-500/50">↓</div>

            <div className="flex justify-center">
              <div className="border border-emerald-500/40 bg-emerald-950/20 text-emerald-400 px-3 py-1 rounded text-center">
                Slack Hook / Web App UI
              </div>
            </div>
          </div>
        );

      case 'self-healing-pipelines':
        return (
          <div className="space-y-4 font-mono text-[11px] text-zinc-400">
            <div className="border border-red-500/30 bg-red-950/10 text-red-400 p-2 rounded flex justify-between items-center">
              <span>Data Quality Failure (Airflow/dbt)</span>
              <AlertTriangle className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            </div>

            <div className="flex justify-center text-red-500/30">↓ Telemetry Ingest</div>

            <div className="border border-zinc-850 bg-zinc-900/60 p-2.5 rounded">
              <span className="text-zinc-200 block font-semibold mb-1">Detective Agent</span>
              Queries telemetry log indices, performs drift check &amp; localizes schema root error.
            </div>

            <div className="flex justify-center text-zinc-700">↓ Diagnosis</div>

            <div className="border border-zinc-850 bg-zinc-900/60 p-2.5 rounded">
              <span className="text-zinc-200 block font-semibold mb-1">Fixer Agent</span>
              Synthesizes remediation code (SQL DDL/Python repair patches).
            </div>

            <div className="flex justify-center text-zinc-700">↓ Code Patch</div>

            <div className="border border-purple-500/50 bg-purple-950/20 text-purple-300 p-2.5 rounded">
              <span className="text-white block font-semibold mb-1">Critic Agent (Docker Sandbox)</span>
              Executes generated script in isolated DB test container to verify schema health.
            </div>

            <div className="flex justify-center text-purple-500/40">↓ Validation Output (Pass/Fail)</div>

            <div className="grid grid-cols-2 gap-2 text-center text-[10px]">
              <div className="border border-emerald-500/30 bg-emerald-950/10 text-emerald-400 p-1.5 rounded">
                Confidence &gt; 95%<br />Auto-apply to DB
              </div>
              <div className="border border-yellow-500/30 bg-yellow-950/10 text-yellow-400 p-1.5 rounded">
                Confidence &lt; 95%<br />Slack approval button
              </div>
            </div>
          </div>
        );

      case 'pdf-to-sql-pipeline':
        return (
          <div className="space-y-4 font-mono text-[11px] text-zinc-400">
            <div className="border border-zinc-800 bg-zinc-900/40 p-2 rounded text-center text-zinc-200 font-semibold">
              Sensitive Financial PDF (Bank Statement / Invoice)
            </div>

            <div className="flex justify-center text-zinc-700">↓ Local Upload</div>

            <div className="border border-blue-500/50 bg-blue-950/20 text-blue-300 p-2.5 rounded">
              <span className="text-white block font-semibold mb-1">Layer 1: Local Docling OCR (CPU)</span>
              Extracts text, table borders, and bounding boxes. No outbound network calls.
            </div>

            <div className="flex justify-center text-blue-500/30">↓ Clean Text Blocks</div>

            <div className="border border-purple-500/50 bg-purple-950/20 text-purple-300 p-2.5 rounded">
              <span className="text-white block font-semibold mb-1">Layer 2: Gemini Flash-Lite Mapper</span>
              Executes dynamic schema mapping via few-shot structured output prompt.
            </div>

            <div className="flex justify-center text-purple-500/30">↓ Unchecked JSON Schema</div>

            <div className="border border-emerald-500/50 bg-emerald-950/20 text-emerald-300 p-2.5 rounded">
              <span className="text-white block font-semibold mb-1">Layer 3: Deterministic Validator</span>
              Enforces business validation rules (balance sum alignment, regex keys).
            </div>

            <div className="flex justify-center text-emerald-500/30">↓ Checked SQL Insertion</div>

            <div className="border border-zinc-800 bg-zinc-950 p-2 rounded text-center font-semibold text-zinc-200">
              Structured Database Store (PostgreSQL / JSONB)
            </div>
          </div>
        );

      default:
        // Generic dynamic block diagram fallback
        return (
          <div className="space-y-4 font-mono text-[11px] text-zinc-400">
            <div className="border border-zinc-800 bg-zinc-900/40 p-2 rounded text-center">
              Input Data Ingestion Layer
            </div>
            <div className="flex justify-center text-zinc-700">↓ Ingestion Flow</div>
            <div className="border border-blue-500/50 bg-blue-950/10 text-blue-300 p-2.5 rounded text-center">
              Processing &amp; Model Evaluation Block
            </div>
            <div className="flex justify-center text-blue-500/30">↓ Transformation</div>
            <div className="border border-purple-500/50 bg-purple-950/10 text-purple-300 p-2.5 rounded text-center">
              Business Validation &amp; Guardrails
            </div>
            <div className="flex justify-center text-purple-500/30">↓ Outputs</div>
            <div className="border border-emerald-500/50 bg-emerald-950/10 text-emerald-300 p-2 rounded text-center">
              Storage / API Endpoint Delivery
            </div>
          </div>
        );
    }
  };

  const getChallengesText = (id: string) => {
    switch (id) {
      case 'governance-control-tower':
        return (
          <div className="space-y-3 text-sm text-zinc-400">
            <p>
              <strong className="text-white">Challenge:</strong> Coordinating five independent LLM agents in a low-latency environment without risk of hallucination-driven deployment overrides.
            </p>
            <p>
              <strong className="text-white">Solution:</strong> Implemented a 2-stage orchestration loop. First, the Governance Supervisor invokes the 5 agents concurrently using Python AsyncIO. Second, the raw findings are piped into a deterministic policy gate in FastAPI. The final decision is calculated via standard logic formulas, ensuring a model with fairness bias (AIR &lt; 0.8) is automatically blocked, regardless of any LLM validation attempts.
            </p>
          </div>
        );
      case 'sme-growth-copilot':
        return (
          <div className="space-y-3 text-sm text-zinc-400">
            <p>
              <strong className="text-white">Challenge:</strong> Managing token usage and maintaining structured state across multiple conversation turns during business analysis.
            </p>
            <p>
              <strong className="text-white">Solution:</strong> Built the agent workflow using LangGraph state graphs. The conversation data is saved in a unified state, with strict JSON output schemas enforced at each agent boundary. Implemented mathematical conviction thresholds using the ICE scoring formula to filter out weak growth ideas before generating recommendations.
            </p>
          </div>
        );
      case 'self-healing-pipelines':
        return (
          <div className="space-y-3 text-sm text-zinc-400">
            <p>
              <strong className="text-white">Challenge:</strong> Safely executing LLM-generated code corrections on production data systems without risking database corruption or data loss.
            </p>
            <p>
              <strong className="text-white">Solution:</strong> Built an isolated sandboxed execution loop using Docker container scripts. The generated patch SQL is run against a replica of the database structure in the sandbox. If it passes verification tests, the patch is promoted to production. Added an threshold configuration that triggers auto-apply for fixes exceeding a 95% model confidence score.
            </p>
          </div>
        );
      case 'pdf-to-sql-pipeline':
        return (
          <div className="space-y-3 text-sm text-zinc-400">
            <p>
              <strong className="text-white">Challenge:</strong> Table schema extraction from low-quality, multi-page financial statement scans without incurring massive cloud costs.
            </p>
            <p>
              <strong className="text-white">Solution:</strong> Combined local CPU-based Docling OCR with Gemini Flash-Lite. Docling extracts raw bounding boxes and table matrices locally. We then pass only the dense text and coordinates to Gemini Flash-Lite for structured schema mapping. This decreased the API cost to $0.0005 per page while retaining 95.4% extraction accuracy.
            </p>
          </div>
        );
      default:
        return (
          <div className="space-y-3 text-sm text-zinc-400">
            <p>
              <strong className="text-white">Challenge:</strong> Integrating heterogeneous data components while keeping service degradation and latency metrics minimal.
            </p>
            <p>
              <strong className="text-white">Solution:</strong> Architected modular components with strict schema validation. Integrated caching layers and async processing to maintain API responsiveness.
            </p>
          </div>
        );
    }
  };

  const projectMetrics: Record<string, { value: string; label: string; color: string }[]> = {
    'governance-control-tower': [
      { value: 'AUC 0.969', label: 'Blocked correctly', color: 'text-red-400' },
      { value: '5 Agents', label: 'Coordinated', color: 'text-purple-400' },
      { value: 'OSFI E-23', label: 'Compliant checks', color: 'text-blue-400' }
    ],
    'sme-growth-copilot': [
      { value: '1ms', label: 'Avg response time', color: 'text-emerald-400' },
      { value: '100%', label: 'Delivery success', color: 'text-blue-400' },
      { value: '$135K', label: 'Funnel leak identified', color: 'text-yellow-400' }
    ],
    'self-healing-pipelines': [
      { value: '< 30s', label: 'Detection to fix', color: 'text-emerald-400' },
      { value: '431M+', label: 'Daily records scaled', color: 'text-blue-400' },
      { value: '95%', label: 'Autonomy threshold', color: 'text-purple-400' }
    ],
    'pdf-to-sql-pipeline': [
      { value: '95.4%', label: 'OCR accuracy', color: 'text-emerald-400' },
      { value: '$0.0005', label: 'Cost per page', color: 'text-blue-400' },
      { value: 'Local CPU', label: 'Data sovereignty', color: 'text-purple-400' }
    ],
    'luminamed': [
      { value: '92%', label: 'Accuracy score', color: 'text-emerald-400' },
      { value: '-40%', label: 'Analysis time', color: 'text-blue-400' },
      { value: 'HL7/FHIR', label: 'Data standard', color: 'text-purple-400' }
    ],
    'daavi': [
      { value: '95%', label: 'Fraud filtered', color: 'text-emerald-400' },
      { value: 'NestJS', label: 'Scaling framework', color: 'text-blue-400' },
      { value: 'PostGIS', label: 'Geospatial indexing', color: 'text-purple-400' }
    ]
  };

  const metrics = projectMetrics[project.id] || [
    { value: 'Production', label: 'Deployment target', color: 'text-blue-400' },
    { value: '100%', label: 'Safety checklist', color: 'text-emerald-400' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-zinc-900 px-6 py-4 flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-blue-400" />
            <h3 className="text-md font-bold text-white font-mono">System Architecture Overview</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-grow">
          
          {/* Top Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-2">
              <span className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider bg-blue-500/10 px-2 py-0.5 border border-blue-500/20 rounded">
                {project.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">{project.title}</h2>
              <p className="text-zinc-400 text-sm">{project.subtitle}</p>
            </div>
            
            {/* Tech stack badges */}
            <div className="border border-zinc-900 bg-zinc-900/30 rounded-xl p-4 space-y-2.5">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Deployment Stack</span>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-[11px] font-mono bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 border-y border-zinc-900 py-6">
            {metrics.map((m, idx) => (
              <div key={idx} className="text-center md:text-left">
                <span className={`block text-xl md:text-2xl font-bold font-mono ${m.color}`}>{m.value}</span>
                <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-wider font-mono">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Two-Column Details Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column: Simulated System block diagram */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5 text-blue-400" />
                system_block_diagram.log
              </h4>
              <div className="border border-zinc-900 bg-zinc-900/20 rounded-xl p-5 md:p-6 shadow-inner relative overflow-hidden min-h-[300px] flex flex-col justify-center">
                {renderArchitectureDiagram(project.id)}
              </div>
            </div>

            {/* Right Column: Challenges Solved */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
                engineering_challenges.log
              </h4>
              <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-5 md:p-6 space-y-4 min-h-[300px]">
                {getChallengesText(project.id)}
                
                {/* Bullet point impacts */}
                {project.impact && (
                  <div className="space-y-2 pt-2 border-t border-zinc-900">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Verifiable Project Impact</span>
                    <ul className="space-y-1.5">
                      {project.impact.slice(0, 3).map((imp, idx) => (
                        <li key={idx} className="text-xs text-zinc-400 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-zinc-900 px-6 py-4 flex items-center justify-between border-t border-zinc-800">
          <div className="text-zinc-500 text-[10px] font-mono">
            SECURE VERIFICATION GATE v2.0.26
          </div>
          <div className="flex gap-3">
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-950 text-zinc-300 hover:text-white rounded-lg text-xs font-semibold transition-all font-mono"
              >
                git clone repo
              </a>
            )}
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-all font-mono"
              >
                curl live_demo
              </a>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
